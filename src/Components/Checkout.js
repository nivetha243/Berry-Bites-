// // Checkout.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
// import './Checkout.css';

// const Checkout = () => {
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     cardDetails: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle form submission and order placement
//     console.log('Order placed:', formData);

//     // Navigate to Order Confirmation page
//     navigate('/order-confirmation'); // Use navigate instead of history.push
//   };

//   return (
//     <div className="checkout">
//       <h1>Checkout</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Card Details:</label>
//           <input
//             type="text"
//             name="cardDetails"
//             value={formData.cardDetails}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit" className="place-order-btn">
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '', // Address input is still here but hidden later
    cardDetails: '',
    quantity: 1, // Default quantity is 1
    paymentMethod: 'online-payment',
    currentLocation: '',
    deliveryLocation: '',
    mobileNumber: ''
  });

  const [selectedLocation, setSelectedLocation] = useState(null); // Track selected location option
  const [basePrice] = useState(100); // Example base price per product, you can change this

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (change) => {
    setFormData(prevState => ({
      ...prevState,
      quantity: Math.max(1, prevState.quantity + change) // Ensure quantity is at least 1
    }));
  };

  const handleLocationClick = (locationType) => {
    if (locationType === 'current') {
      setSelectedLocation('current');
      setFormData({ ...formData, currentLocation: 'User\'s current location' });
    } else if (locationType === 'other') {
      setSelectedLocation('other');
      navigate('/fill-location'); // Navigate to location fill page
    }
  };

  const handlePaymentMethodClick = (method) => {
    setFormData(prevState => ({
      ...prevState,
      paymentMethod: method
    }));

    if (method === 'online-payment') {
      navigate('/payment'); // Navigate to payment page
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.paymentMethod === 'cash-on-delivery') {
      console.log('Order placed:', formData);
      navigate('/order-confirmation'); // Navigate to order confirmation
    }
  };

  // Calculate total price based on quantity
  const totalPrice = formData.quantity * basePrice;

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Card Details - only if online payment */}
        {formData.paymentMethod === 'online-payment' && (
          <>
            {/* No Address Label, Address field hidden */}
            <div className="form-group" style={{ display: 'none' }}>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Card Details:</label>
              <input
                type="text"
                name="cardDetails"
                value={formData.cardDetails}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}

        <div className="form-group quantity-group">
          <label>Quantity:</label>
          <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{formData.quantity}</span>
          <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
        </div>

        <div className="form-group">
          <label>Total Price: ${totalPrice}</label>
        </div>

        <div className="form-group">
          <label>Payment Method:</label>
          <div className="payment-methods">
            <button
              type="button"
              className={`payment-btn ${formData.paymentMethod === 'online-payment' ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodClick('online-payment')}
            >
              Online Payment
            </button>
            <button
              type="button"
              className={`payment-btn ${formData.paymentMethod === 'cash-on-delivery' ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodClick('cash-on-delivery')}
            >
              Cash on Delivery
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>Location:</label>
          <div className="location-options">
            <button
              type="button"
              className={`location-btn ${selectedLocation === 'current' ? 'selected' : ''}`}
              onClick={() => handleLocationClick('current')}
            >
              Use Current Location
            </button>
            <button
              type="button"
              className={`location-btn ${selectedLocation === 'other' ? 'selected' : ''}`}
              onClick={() => handleLocationClick('other')}
            >
              Enter Delivery Location
            </button>
          </div>
        </div>

        <button type="submit" className="place-order-btn" disabled={!formData.name || !formData.quantity}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
