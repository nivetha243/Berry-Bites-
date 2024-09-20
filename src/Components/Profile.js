import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          navigate('/Signin'); // Redirect to SignIn if no token
          return;
        }

        // Fetch profile from backend
        const response = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Attach token to the Authorization header
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfile(data); // Set profile data
      } catch (error) {
        setError('Failed to fetch profile. Redirecting to sign-in...');
        setTimeout(() => {
          navigate('/Signin'); // Redirect after error
        }, 2000);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    navigate('/Signin'); // Redirect to SignIn page after logout
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {profile ? (
        <>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Address:</strong> {profile.address}</p> {/* Additional fields */}
          <Link to="/editprofile" className="edit-profile-btn">Edit Profile</Link>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </>
      ) : (
        <p>No profile data available. Please <Link to="/signup">sign up</Link>.</p>
      )}
    </div>
  );
};

export default Profile;
