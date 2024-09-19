import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import OfferSlider from './Components/OfferSlider';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductDetail from './Components/ProductDetails'; // Corrected: singular
import Checkout from './Components/Checkout';
import OrderConfirmation from './Components/OrderConfirmation';
import FillLocation from './Components/FillLocation';
import Payment from './Components/Payment';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
