import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';
import OrderConfirmation from './Components/OrderConfirmation';
<<<<<<< HEAD
import FillLocation from './Components/FillLocation';
import Payment from './Components/Payment';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
=======
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Cart from './Components/Cart';
import { CartProvider } from './context/CartContext';
import Erasers from './Components/Erasers';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile';
import All from './Components/All'; // Import AllProducts component
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
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
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Home route showing OfferSlider, ProductList */}
          <Route path="/" element={
            <>
              <OfferSlider />
              <ProductList />
              <AboutUs />
              <Footer />
            </>
          } />

          {/* Route for the product detail page */}
          <Route path="/product/:productName" element={<ProductDetail />} />

          {/* Route for the checkout page */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Route for the order confirmation page */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/fill-location" element={<FillLocation />} />
          <Route path ="/payment" element={<Payment/>}/>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
=======
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
            <Route path="/product/:productName" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/erasers" element={<Erasers />} />
            <Route path="/profile" element={<Profile profile={profile} />} />
            <Route path="/editprofile" element={<EditProfile profile={profile} setProfile={setProfile} />} />
            <Route path="/all" element={<All />} /> {/* New route for AllProducts */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
>>>>>>> ae6aa307484ccfd5fe8ca806e78e203832fcc1c2
  );
}

export default App;
