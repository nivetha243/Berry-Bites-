<<<<<<< HEAD
// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

// Function to send registration request to the backend API
const registerUser = async (name, email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', { // Update with your backend registration URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }), // Send user details to the server
    });

    const data = await response.json();

    if (response.ok) {
      return data; // The data might contain a token or user details
    } else {
      throw new Error(data.message || 'Registration failed');
    }
  } catch (error) {
    throw error;
  }
};

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after sign-up

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const userData = await registerUser(name, email, password); // Call the backend

      // Assuming the backend sends a token and user details
      localStorage.setItem('authToken', userData.token); // Store the token locally

      // Optionally store user details in localStorage
      localStorage.setItem('userDetails', JSON.stringify(userData.user));

      // Redirect to the next page (e.g., checkout)
      navigate('/checkout');
    } catch (err) {
      // Show an error message if registration fails
      setError(err.message);
=======
// SignUpPage.js
import React, { useState } from 'react';
import './SignUp.css';

const SignUp= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    otp: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { name, email, password, cpassword, otp } = formData;
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!name) newErrors.name = 'Name is required';
    if (!email || !emailPattern.test(email)) newErrors.email = 'Valid email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password && !passwordPattern.test(password)) newErrors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, and a number';
    if (password !== cpassword) newErrors.cpassword = 'Passwords must match';
    if (!otp) newErrors.otp = 'OTP is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add form submission logic here
      console.log('Form Data:', formData);
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
<<<<<<< HEAD
      <form onSubmit={handleSignUp} className="signup-form">
=======
      <form onSubmit={handleSubmit}>
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
<<<<<<< HEAD
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

=======
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
<<<<<<< HEAD
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="signup-button">
          Sign Up
        </button>
=======
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password:</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
          />
          {errors.cpassword && <p className="error-text">{errors.cpassword}</p>}
        </div>
        <div className="form-group otp-group">
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
          />
          {errors.otp && <p className="error-text">{errors.otp}</p>}
        </div>
        <div className="form-group button-group">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="otp-button">Resend OTP</button>
        </div>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
      </form>
    </div>
  );
};

export default SignUp;
