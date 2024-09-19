// Payment.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process payment
    console.log('Payment details:', paymentInfo);
    navigate('/order-confirmation'); // Navigate to order confirmation
  };

  return (
    <div className="payment">
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
