import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({ profile }) {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Landmark:</strong> {profile.landmark}</p>
      <p><strong>City:</strong> {profile.city}</p>
      <Link to="/editprofile" className="edit-profile-btn">
        Edit Profile
      </Link>
    </div>
  );
}

export default Profile;
