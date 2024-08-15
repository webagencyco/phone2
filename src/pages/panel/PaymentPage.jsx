import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentPage.css";
import { AuthContext } from "../../AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "../../App";

const stripePromise = loadStripe(
  "pk_test_51NehF1GdOlJmgDN1ZhjKiQ7T2eCotWN4MqC0X1tYqBSVCzzR5ZFZ7w2aw6MTn73FLjco8gnRdZ30W1tDJgq3d1RM00BCFqGCTu"
);

const CheckoutForm = ({ paymentDetails }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const {
        data: { clientSecret },
      } = await axios.post(
        `${server}/api/payment`,
        {
          amount: paymentDetails.amount * 100,
          currency: paymentDetails.currency,
          tailorPrice: paymentDetails.tailorPrice,
          includedMinutes: paymentDetails.includedMinutes,
          numbers: paymentDetails.numbers,
          destination: paymentDetails.destination,
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        }
      );

      if (!clientSecret) {
        throw new Error("Failed to receive client secret from server");
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "Customer",
            },
          },
        }
      );

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        setError(null);
        navigate("/admin");
      } else {
        setError("Payment failed");
      }
  
    } catch (err) {
      setError(err.message);
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-group">
        <label htmlFor="subtotal">Subtotal:</label>
        <input
          type="number"
          id="subtotal"
          value={paymentDetails.subtotal}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="vat">VAT (20%):</label>
        <input type="number" id="vat" value={paymentDetails.vat} readOnly />
      </div>
      <div className="form-group">
        <label htmlFor="total">Total Amount:</label>
        <input
          type="number"
          id="total"
          value={paymentDetails.amount}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="currency">Currency:</label>
        <input
          className="outline-none"
          type="text"
          id="currency"
          value={paymentDetails.currency}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Selected Numbers:</label>
        <ul>
          {paymentDetails.numbers.map(
            ({ number, destination, tariff, tariffPrice, price }) => (
              <li key={number}>
                {number} - Destination: {destination}, Tariff: {tariff}, Number
                Price: £{price}, Tariff Price: £{tariffPrice}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="card-element">
        <CardElement />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button
        type="submit"
        className="submit-button"
        disabled={!stripe || processing}
      >
        {processing ? "Processing..." : `Pay £${paymentDetails.amount}`}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const location = useLocation();
  const { selectedNumbers, tailorPrice, subtotal, vat, total } =
    location.state || {};

  const [paymentDetails, setPaymentDetails] = useState({
    amount: total || 0,
    currency: "gbp",
    numbers: [],
    tailorPrice: tailorPrice || 0,
    subtotal: subtotal || 0,
    vat: vat || 0,
  });

  useEffect(() => {
    if (selectedNumbers) {
      setPaymentDetails((prevDetails) => ({
        ...prevDetails,
        numbers: selectedNumbers,
      }));
    }
  }, [selectedNumbers]);
  console.log(paymentDetails);
  return (
    <div className="payment-page my-10">
      <h2>Payment Page</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm paymentDetails={paymentDetails} />
      </Elements>
    </div>
  );
};

export default PaymentPage;
