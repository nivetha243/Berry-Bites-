// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Checkout.css';

// // Function to send order data to the backend
// const placeOrder = async (orderData) => {
//   try {
//     const response = await fetch('http://localhost:5000/api/orders/placeOrder', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('authToken')}`
//       },
//       body: JSON.stringify(orderData)
//     });

//     const responseText = await response.text();  // Log raw response
//     console.log('Response Status:', response.status);
//     console.log('Response Body:', responseText);

//     if (response.ok) {
//       return await response.json();
//     } else {
//       // Capture the detailed error message returned from the server
//       throw new Error(responseText || 'Order placement failed');
//     }
//   } catch (error) {
//     console.error('Error placing order:', error);
//     throw error;
//   }
// };


// const Checkout = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNumber: '',
//     cardDetails: '',
//     quantity: 1,
//     paymentMethod: 'online-payment',
//     currentLocation: '',
//     deliveryLocation: '',
//     city: '',
//     area: '',
//     nearbyShop: ''
//   });

//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [basePrice] = useState(100);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       navigate('/signin');
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const savedLocation = localStorage.getItem('deliveryLocation');
//     if (savedLocation) {
//       const locationData = JSON.parse(savedLocation);
//       setFormData(prevState => ({
//         ...prevState,
//         ...locationData,
//         currentLocation: '',
//       }));
//       setSelectedLocation('other');
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleQuantityChange = (change) => {
//     setFormData(prevState => ({
//       ...prevState,
//       quantity: Math.max(1, prevState.quantity + change)
//     }));
//   };

//   const handleLocationClick = (locationType) => {
//     if (locationType === 'current') {
//       setSelectedLocation('current');
//       setFormData({ ...formData, currentLocation: 'User\'s current location', city: '', area: '', nearbyShop: '' });
//     } else if (locationType === 'other') {
//       setSelectedLocation('other');
//       navigate('/fill-location');
//     }
//   };

//   const handlePaymentMethodClick = (method) => {
//     setFormData(prevState => ({
//       ...prevState,
//       paymentMethod: method
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     if (!selectedLocation) {
//       setError('Please select a delivery location.');
//       setLoading(false);
//       return;
//     }

//     if (formData.paymentMethod === 'online-payment' && !formData.cardDetails) {
//       setError('Card details are required for online payment.');
//       setLoading(false);
//       return;
//     }

//     try {
//       const orderData = {
//         ...formData,
//         totalPrice: formData.quantity * basePrice
//       };

//       const response = await placeOrder(orderData);
//       setSuccess('Order placed successfully!');
//       setTimeout(() => navigate('/order-confirmation'), 1500);
//     } catch (err) {
//       setError(err.message || 'An error occurred while placing the order.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalPrice = formData.quantity * basePrice;

//   return (
//     <div className="checkout">
//       <form onSubmit={handleSubmit} className="checkout-form">
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
//           <label>Mobile Number:</label>
//           <input
//             type="text"
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Location:</label>
//           <div className="location-options">
//             <button
//               type="button"
//               className={`location-btn ${selectedLocation === 'current' ? 'selected' : ''}`}
//               onClick={() => handleLocationClick('current')}
//             >
//               Use Current Location
//             </button>
//             <button
//               type="button"
//               className={`location-btn ${selectedLocation === 'other' ? 'selected' : ''}`}
//               onClick={() => handleLocationClick('other')}
//             >
//               Enter Delivery Location
//             </button>
//           </div>
//         </div>

//         {selectedLocation === 'other' && (
//           <>
//             <div className="form-group">
//               <label>City:</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Area:</label>
//               <input
//                 type="text"
//                 name="area"
//                 value={formData.area}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label>Nearby Shop:</label>
//               <input
//                 type="text"
//                 name="nearbyShop"
//                 value={formData.nearbyShop}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </>
//         )}

//         {selectedLocation && (
//           <>
//             {formData.paymentMethod === 'online-payment' && (
//               <div className="form-group">
//                 <label>Card Details:</label>
//                 <input
//                   type="text"
//                   name="cardDetails"
//                   value={formData.cardDetails}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             )}

//             <div className="form-group">
//               <label>Payment Method:</label>
//               <div className="payment-methods">
//                 <button
//                   type="button"
//                   className={`payment-btn ${formData.paymentMethod === 'online-payment' ? 'selected' : ''}`}
//                   onClick={() => handlePaymentMethodClick('online-payment')}
//                 >
//                   Online Payment
//                 </button>
//                 <button
//                   type="button"
//                   className={`payment-btn ${formData.paymentMethod === 'cash-on-delivery' ? 'selected' : ''}`}
//                   onClick={() => handlePaymentMethodClick('cash-on-delivery')}
//                 >
//                   Cash on Delivery
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         <div className="form-group quantity-group">
//           <label>Quantity:</label>
//           <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
//           <span>{formData.quantity}</span>
//           <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
//         </div>

//         <div className="form-group">
//           <label>Total Price: ${totalPrice}</label>
//         </div>

//         {error && <p className="error-message">{error}</p>}
//         {success && <p className="success-message">{success}</p>}

//         <button type="submit" className="place-order-btn" disabled={!formData.name || !formData.quantity || loading}>
//           {loading ? 'Placing Order...' : 'Place Order'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Checkout.css';

// Function to send order data to the backend
const placeOrder = async (orderData) => {
  try {
    const response = await fetch('http://localhost:5000/api/orders/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify(orderData)
    });

    const responseText = await response.text(); // Read the response body as text

    if (response.ok) {
      return JSON.parse(responseText); // Parse it only if the response is OK
    } else {
      // Handle error with the response text
      throw new Error(responseText || 'Order placement failed.');
    }
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    quantity: 1,
    paymentMethod: 'cash-on-delivery',
    city: '',
    area: '',
    nearbyShop: ''
  });

  const [userId, setUserId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [basePrice] = useState(100);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Check for authToken and extract user ID
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('You need to be signed in to place an order.');
      navigate('/signin');
    } else {
      const decodedToken = jwtDecode(token);
      console.log('Decoded Token:', decodedToken); // Log the decoded token
      setUserId(decodedToken.userId); // Correctly set userId
      console.log('User ID Set:', decodedToken.userId); // Verify the user ID is set
    }
  }, [navigate]);
  
  

  // Load saved delivery location from localStorage if available
  useEffect(() => {
    const savedLocation = localStorage.getItem('deliveryLocation');
    if (savedLocation) {
      const locationData = JSON.parse(savedLocation);
      setFormData(prevState => ({
        ...prevState,
        ...locationData
      }));
      setSelectedLocation('other');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleQuantityChange = (change) => {
    setFormData(prevState => ({
      ...prevState,
      quantity: Math.max(1, prevState.quantity + change)
    }));
  };

  const handleLocationClick = (locationType) => {
    if (locationType === 'current') {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setFormData(prevState => ({
              ...prevState,
              currentLocation: `Lat: ${latitude}, Long: ${longitude}`,
              city: '',
              area: '',
              nearbyShop: ''
            }));
            setSelectedLocation('current');
          },
          () => {
            setError('Error retrieving current location');
          }
        );
      } else {
        setError('Geolocation is not supported by your browser.');
      }
    } else if (locationType === 'other') {
      setSelectedLocation('other');
      navigate('/fill-location');
    }
  };

  const handlePaymentMethodClick = (method) => {
    setFormData(prevState => ({ ...prevState, paymentMethod: method }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
  
    // Validate required fields
    if (!formData.name || !formData.mobileNumber) {
      setError('Name and mobile number are required.');
      setLoading(false);
      return;
    }
  
    if (!selectedLocation) {
      setError('Please select a delivery location.');
      setLoading(false);
      return;
    }
  
    if (selectedLocation === 'other' && (!formData.city || !formData.area || !formData.nearbyShop)) {
      setError('Please fill in all delivery location details.');
      setLoading(false);
      return;
    }
  
    // Check if userId is set
    if (!userId) {
      setError('User ID is required.');
      setLoading(false);
      return;
    }
  
    try {
      const orderData = {
        userId, // Ensure this is included and valid
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        quantity: formData.quantity,
        paymentMethod: formData.paymentMethod,
        totalPrice: formData.quantity * basePrice,
        deliveryAddress: {
          city: formData.city,
          area: formData.area,
          nearbyShop: formData.nearbyShop
        }
      };
  
      console.log('Order Data:', orderData); // Verify userId is included
      await placeOrder(orderData);
      setSuccess('Order placed successfully!');
      setTimeout(() => navigate('/order-confirmation'), 1500);
    } catch (err) {
      setError(err.message || 'An error occurred while placing the order.');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = formData.quantity * basePrice;

  return (
    <div className="checkout">
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

        {selectedLocation === 'other' && (
          <>
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
          </>
        )}

        <div className="form-group">
          <label>Payment Method:</label>
          <div className="payment-methods">
            <button
              type="button"
              className={`payment-btn ${formData.paymentMethod === 'online-payment' ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodClick('online-payment')}
            >
              Pay with Card
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
          <label>Quantity:</label>
          <div className="quantity-controls">
            <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{formData.quantity}</span>
            <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>

        <div className="total-price">
          Total Price: ${totalPrice}
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <button type="submit" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;




