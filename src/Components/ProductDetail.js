// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import './ProductDetail.css';

// // Import product images
// import Product1 from '../assets/Product1.png';
// import Product2 from '../assets/Product2.png';
// import Felt from '../assets/Felt.png';
// import Glue from '../assets/Glue.png';
// import ColoredPencils from '../assets/ColoredPencils.png';
// import HolePunch from '../assets/HolePunch.png';
// import GooglyEyes from '../assets/GooglyEyes.png';
// import Markers from '../assets/Markers.png';
// import DotMarkers from '../assets/DotMarkers.png';
// import PaintSticks from '../assets/PaintSticks.png';
// import PaperRolls from '../assets/PaperRolls.png';
// import Pegs from '../assets/Pegs.png';
// import Ribbon from '../assets/Ribbon.png';
// import Ruler from '../assets/Ruler.png';
// import Stapler from '../assets/Stapler.png';
// import Straws from '../assets/Straws.png';
// import Twine from '../assets/Twine.png';

// // Define product data
// const productData = {
//   'Acrylic Paint': { id: 1, img: Product1, price: '$19.99', description: 'Acrylic paint for artistic purposes.' },
//   'Adhesive Paper': { id: 2, img: Product2, price: '$29.99', description: 'Adhesive paper for crafting and decoration.' },
//   'Felt': { id: 3, img: Felt, price: '$39.99', description: 'Soft felt sheets for crafting.' },
//   'Glue': { id: 4, img: Glue, price: '$55.90', description: 'Craft glue for sticking materials together.' },
//   'Colored Pencils': { id: 5, img: ColoredPencils, price: '$22.99', description: 'A set of vibrant colored pencils for drawing.' },
//   'Hole Punch': { id: 6, img: HolePunch, price: '$33.99', description: 'Hole puncher for creating holes in paper.' },
//   'Googly Eyes': { id: 7, img: GooglyEyes, price: '$44.99', description: 'Googly eyes for adding fun to craft projects.' },
//   'Markers': { id: 8, img: Markers, price: '$59.99', description: 'Set of colorful markers for drawing and coloring.' },
//   'Dot Markers': { id: 9, img: DotMarkers, price: '$59.99', description: 'Dot markers for creative stamping and coloring.' },
//   'Paint Sticks': { id: 10, img: PaintSticks, price: '$59.99', description: 'Paint sticks for mess-free painting.' },
//   'Paper Rolls': { id: 11, img: PaperRolls, price: '$59.99', description: 'Large rolls of paper for drawing and painting.' },
//   'Wooden Pegs': { id: 12, img: Pegs, price: '$59.99', description: 'Wooden pegs for various crafting uses.' },
//   'Ribbon': { id: 13, img: Ribbon, price: '$59.99', description: 'Decorative ribbons for crafting and gifts.' },
//   'Ruler': { id: 14, img: Ruler, price: '$59.99', description: 'A 12-inch ruler for accurate measurements.' },
//   'Stapler': { id: 15, img: Stapler, price: '$59.99', description: 'Stapler for binding papers together.' },
//   'Straws': { id: 16, img: Straws, price: '$59.99', description: 'Plastic straws for crafting and decoration.' },
//   'Twine': { id: 17, img: Twine, price: '$59.99', description: 'Twine for tying and crafting purposes.' },
// };



// const ProductDetail = () => {
//   const { productName } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();
//   const decodedProductName = decodeURIComponent(productName);
//   const product = productData[decodedProductName];

//   if (!product) {
//     console.error('Product not found:', decodedProductName);
//     return <div>Product not found.</div>;
//   }

//   const isAuthenticated = () => {
//     const token = localStorage.getItem('authToken');
//     console.log('Auth token:', token); // Debugging line
//     return !!token;
//   };

//   const handleAddToCart = () => {
//     try {
//       addToCart(product);
//       alert(`${productName} has been added to your cart!`);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleBuyNow = () => {
//     if (isAuthenticated()) {
//       handleAddToCart();
//       navigate('/checkout');
//     } else {
//       alert('You need to sign in to complete the purchase.');
//       navigate('/signin');
//     }
//   };

//   return (
//     <div className="product-detail">
//       <img src={product.img} alt={productName} className="product-image" />
//       <h1>{productName}</h1>
//       <p>{product.description}</p>
//       <p className="product-price">Price: {product.price}</p>
//       <div className="product-actions">
//         <button className="btn-add-to-cart" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//         <button className="btn-buy-now" onClick={handleBuyNow}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;