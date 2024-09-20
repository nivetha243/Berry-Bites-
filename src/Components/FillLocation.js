import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FillLocation.css'; // Make sure to include the CSS file

const FillLocation = () => {
  const [formData, setFormData] = useState({
    city: '',
    area: '',
    nearbyShop: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save location details to local storage
    localStorage.setItem('deliveryLocation', JSON.stringify(formData));
    // Navigate back to checkout
    navigate('/checkout');
  };

  return (
    <div className="fill-location-container">
      <h1>Enter Delivery Address</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Nearby Shop:</label>
          <input
            type="text"
            name="nearbyShop"
            value={formData.nearbyShop}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Save and Return</button>
      </form>
    </div>
  );
};

export default FillLocation;
