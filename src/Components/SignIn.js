import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css';

// Function to send login request to the backend API
const authenticateUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Server response:', data); // Debugging log

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error during authentication:', error); // Debugging log
    throw error;
  }
};


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true); // Start loading
    setError(''); // Reset error

    try {
      const userData = await authenticateUser(email, password);

      // Store token and user details in localStorage
      localStorage.setItem('authToken', userData.token);
      localStorage.setItem('userDetails', JSON.stringify(userData.user));

      // Redirect to the next page (e.g., checkout)
      navigate('/checkout');
    } catch (err) {
      // Show an error message if authentication fails
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
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
        {loading ? (
          <button type="button" className="signin-button" disabled>
            Loading...
          </button>
        ) : (
          <button type="submit" className="signin-button">
            Sign In
          </button>
        )}

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
