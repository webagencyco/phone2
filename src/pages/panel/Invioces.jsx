import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../App";
import { AuthContext } from "../../AuthContext";
import "./Invoices.css";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get(`${server}/api/payment/invoices`, {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setInvoices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, [user]);

  return (
    <div className="invoices-container">
      <h1>Your Invoices</h1>
      <ul className="invoice-list">
        {invoices.map((invoice) => (
          <li key={invoice._id} className="invoice-item">
            <p>Invoice ID: {invoice._id}</p>
            <p>Number: {invoice.number}</p>
            <p>Tariff: {invoice.tariff}</p>
            <p>Destination: {invoice.destination}</p>
            <p>
              Amount: {invoice.amount} {invoice.currency}
            </p>
            <p>Date: {new Date(invoice.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invoices;
