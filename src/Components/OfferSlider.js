import React, { useState } from 'react';
import offer1 from '../assets/offer1.jpg'; 
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';
import offer4 from '../assets/offer4.jpg';
import './OfferSlider.css'; // Optional, for specific slider styles

const offers = [
  { img: offer1, title: 'Special Offer 1', description: 'Save 20% on all items' },
  { img: offer2, title: 'Special Offer 2', description: 'Buy one get one free' },
  { img: offer3, title: 'Special Offer 3', description: 'Free shipping on orders over $50' },
  { img: offer4, title: 'Special Offer 4', description: 'Free shipping on orders over $50' },
];

function OfferSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  return (
    <div className="offer-slider">
      <div className="offer-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {offers.map((offer, index) => (
          <div className="offer-slide" key={index}>
            <img src={offer.img} alt={`Offer ${index + 1}`} />
            <h2>{offer.title}</h2>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={prevSlide}>❮</button>
      <button className="slider-button next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default OfferSlider;
