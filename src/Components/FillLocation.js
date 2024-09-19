// FillLocation.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FillLocation.css';

const FillLocation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deliveryLocation: '',
    mobileNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Location details:', formData);
    navigate('/checkout'); // Navigate back to checkout or a different page
  };

  return (
    <div className="fill-location">
      <h1>Fill Delivery Location</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Delivery Location:</label>
          <input
            type="text"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Location
        </button>
      </form>
    </div>
  );
};

export default FillLocation;
