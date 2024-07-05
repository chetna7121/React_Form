// src/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) return <p>No data available</p>;

  return (
    <div>
      <h1>Form Submitted Successfully</h1>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNo}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>PAN No:</strong> {formData.panNo}</p>
      <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
