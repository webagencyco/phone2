import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UserDetails.css";
import { AuthContext } from "../AuthContext";
import { server } from "../App";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    accountNumber: "",
    accountName: "",
    street: "",
    townCity: "",
    county: "",
    postCode: "",
  });
  const { user } = useContext(AuthContext);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`${server}/api/auth/user-details`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      setUserDetails({
        accountNumber: response.data.accountNumber,
        accountName: response.data.username,
        street: response.data.street,
        townCity: response.data.townCity,
        county: response.data.county,
        postCode: response.data.postCode,
      });
    } catch (error) {
      console.error("Error fetching user details", error);
    }
  };

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${server}/api/auth/update-address`, userDetails, {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      alert("Address updated successfully");
    } catch (error) {
      console.error("Error updating address", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  return (
    <div className="user-details">
      <h2>My Details</h2>
      <div className="details-section">
        <div className="details-row">
          <span>Account Number</span>
          <span>{userDetails.accountNumber}</span>
        </div>
        <div className="details-row">
          <span>Account Name</span>
          <span>{userDetails.accountName}</span>
        </div>
        <div className="details-row">
          <span>Your Address</span>
          <span>{`${
            userDetails.street !== undefined ? userDetails.street + "" : ""
          } ${
            userDetails.townCity !== undefined ? userDetails.townCity + "" : ""
          } ${
            userDetails.county !== undefined ? userDetails.county + "" : ""
          } ${
            userDetails.postCode !== undefined ? userDetails.postCode : "No Address Added Yet"
          }`}</span>
        </div>
        <div className="details-row">
          <span>Payment Method</span>
          <span>Debit Card</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl py-10">Update Address</h3>
        <label>Street</label>
        <input
          type="text"
          name="street"
          value={userDetails.street}
          onChange={handleChange}
        />
        <label>Town / City</label>
        <input
          type="text"
          name="townCity"
          value={userDetails.townCity}
          onChange={handleChange}
        />
        <label>County</label>
        <input
          type="text"
          name="county"
          value={userDetails.county}
          onChange={handleChange}
        />
        <label>Post Code</label>
        <input
          type="text"
          name="postCode"
          value={userDetails.postCode}
          onChange={handleChange}
        />
        <button type="submit" className="my-8">Submit</button>
      </form>
    </div>
  );
};

export default UserDetails;
