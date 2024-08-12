import React, { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentPage.css";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51NehF1GdOlJmgDN1ZhjKiQ7T2eCotWN4MqC0X1tYqBSVCzzR5ZFZ7w2aw6MTn73FLjco8gnRdZ30W1tDJgq3d1RM00BCFqGCTu"
);

const CheckoutForm = ({ paymentDetails, onPaymentDetailsChange }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {
      data: { clientSecret },
    } = await axios.post(
      "http://localhost:5000/api/payment",
      {
        amount: paymentDetails.amount * 100,
        currency: paymentDetails.currency,
        tariff: paymentDetails.tariff,
        includedMinutes: paymentDetails.includedMinutes,
        number: paymentDetails.number,
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
    console.log("paymentIntent");
    if (error) {
      setError(error.message);
      setProcessing(false);
      return;
    }

    console.log("paymentIntent");

    if (paymentIntent.status === "succeeded") {
      setError(null);
    } else {
      setError("Payment failed");
    }

    setProcessing(false);
    navigate("/admin");
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={paymentDetails.amount}
          onChange={(e) => onPaymentDetailsChange("amount", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="currency">Currency:</label>
        <input
          type="text"
          id="currency"
          value={paymentDetails.currency}
          onChange={(e) => onPaymentDetailsChange("currency", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tariff">Tariff:</label>
        <input
          type="text"
          id="tariff"
          value={paymentDetails.tariff}
          onChange={(e) => onPaymentDetailsChange("tariff", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={paymentDetails.number}
          onChange={(e) => onPaymentDetailsChange("number", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="includedMinutes">Included Minutes:</label>
        <input
          type="number"
          id="includedMinutes"
          value={paymentDetails.includedMinutes}
          onChange={(e) =>
            onPaymentDetailsChange("includedMinutes", e.target.value)
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={paymentDetails.destination}
          onChange={(e) =>
            onPaymentDetailsChange("destination", e.target.value)
          }
          required
        />
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
        {processing ? "Processing..." : `Pay $${paymentDetails.amount}`}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 10,
    currency: "usd",
    tariff: "",
    number: "",
    includedMinutes: 100,
    destination: "",
  });

  const handlePaymentDetailsChange = (field, value) => {
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          paymentDetails={paymentDetails}
          onPaymentDetailsChange={handlePaymentDetailsChange}
        />
      </Elements>
    </div>
  );
};

export default PaymentPage;
