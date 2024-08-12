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
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { server } from "../App";
import Select from "react-select";

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
  const [numOptions, setNumOptions] = useState([]);
  const [tariffOptions, setTariffOptions] = useState([]);
  const [prices, setPrices] = useState({});
  const [selectedTariff, setSelectedTariff] = useState(null);
  const [price, setPrice] = useState("");
  const [pricesData, setPricesData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [numbersResponse, tariffsResponse, pricesResponse] =
          await Promise.all([
            axios.get(`${server}/api/numbers/api`, {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }),
            axios.get(`${server}/api/numbers/tariffs`, {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }),
            axios.get(`${server}/api/numbers/tariffs/prices`, {
              headers: {
                Authorization: `Bearer ${user}`,
              },
            }),
          ]);
        console.log(pricesResponse.data);
        const numberOptions = numbersResponse.data.map((number) => ({
          value: number,
          label: number,
        }));

        const tariffOptions = Object.keys(pricesResponse.data).map(
          (tariff) => ({
            value: tariff,
            label: tariff,
          })
        );

        setNumOptions(numberOptions);
        setTariffOptions(tariffOptions);
        console.log("Tariff Options:", tariffOptions);
        setPricesData(pricesResponse.data); // Store the prices data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [user]);

  const handleTariffChange = (selectedOption) => {
    onPaymentDetailsChange("tariff", selectedOption.value);

    const selectedPrice = prices[selectedOption.value][0].Price;
    const includedMinutes = prices[selectedOption.value][0].inclusive;

    onPaymentDetailsChange("amount", selectedPrice);
    onPaymentDetailsChange("includedMinutes", includedMinutes);
  };

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
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            onPaymentDetailsChange("amount", e.target.value);
          }}
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
          onChange={(e) => onPaymentDetailsChange("currency", e.target.value)}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="tariff">Tariff:</label>
        <Select
          options={tariffOptions}
          onChange={(selectedOption) => {
            setSelectedTariff(selectedOption.value);
            const tariffPrices = pricesData[selectedOption.value];
            const tariffPrice = tariffPrices ? tariffPrices[0].Price : "";
            setPrice(tariffPrice);
            onPaymentDetailsChange("tariff", selectedOption.value);
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <Select
          options={numOptions}
          onChange={(selectedOption) =>
            onPaymentDetailsChange("number", selectedOption.value)
          }
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
    <div className="payment-page my-10">
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
