import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductDetails from './Components/ProductDetails';
import Checkout from './Components/Checkout';
import OrderConfirmation from './Components/OrderConfirmation';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import { CartProvider } from './context/CartContext';
import Erasers from './Components/Erasers';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import All from './Components/All'; // Import AllProducts component
import SignIn from './Components/SignIn';
import FillLocation from './Components/FillLocation';
import './App.css';

function App() {
  // State to manage the user profile
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St',
    landmark: 'Near Park',
    city: 'Chennai',
  });

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <OfferSlider />
                <ProductList />
                <AboutUs />
                <Footer />
              </>
            } />
            <Route path="/product/:productName" element={<ProductDetails/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/erasers" element={<Erasers />} />
            <Route path="/fill-location" element={<FillLocation />} />
            <Route path="/profile" element={<Profile profile={profile} />} />
            <Route path="/editprofile" element={<EditProfile profile={profile} setProfile={setProfile} />} />
            <Route path="/all" element={<All />} /> {/* New route for AllProducts */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
