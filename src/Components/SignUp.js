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
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
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

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
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
      </form>
    </div>
  );
};

export default SignUp;
