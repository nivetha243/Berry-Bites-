import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './EditProfile.css';
function EditProfile({ profile, setProfile }) {
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [address, setAddress] = useState(profile.address);
  const [landmark, setLandmark] = useState(profile.landmark);
  const [city, setCity] = useState(profile.city);
  const navigate = useNavigate(); // Use useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ name, email, address, landmark, city });
    // Redirect back to the Profile page
    navigate('/profile'); // Use navigate for redirection
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Landmark:
          <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProfile;
