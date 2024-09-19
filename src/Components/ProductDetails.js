
// // export default ProductDetail;
// import React, { useState } from 'react';
// import { useParams,useNavigate } from 'react-router-dom';
// import './ProductDetail.css';

// // Importing product images
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
// import Ruler from '../assets/Ruler.png';
// import Stapler from '../assets/Stapler.png';
// import Straws from '../assets/Straws.png';
// import Twine from '../assets/Twine.png';
// import Ribbon from '../assets/Ribbon.png';

// // A mock product data object with all product details
// const productData = {
//   'Acrylic Paint': {
//     img: Product1,
//     price: '$19.99',
//     description: 'Acrylic paint for artistic purposes.',
//   },
//   'Adhesive Paper': {
//     img: Product2,
//     price: '$29.99',
//     description: 'Adhesive paper for crafting and decoration.',
//   },
//   'Felt Sheets': {
//     img: Felt,
//     price: '$4.99',
//     description: 'Soft felt sheets for crafting and DIY projects.',
//   },
//   'Glue': {
//     img: Glue,
//     price: '$2.99',
//     description: 'Craft glue for sticking materials together.',
//   },
//   'Colored Pencils': {
//     img: ColoredPencils,
//     price: '$8.99',
//     description: 'A set of vibrant colored pencils for drawing.',
//   },
//   'Hole Punch': {
//     img: HolePunch,
//     price: '$5.49',
//     description: 'Hole puncher for creating holes in paper.',
//   },
//   'Googly Eyes': {
//     img: GooglyEyes,
//     price: '$3.99',
//     description: 'Googly eyes for adding fun to craft projects.',
//   },
//   'Markers': {
//     img: Markers,
//     price: '$7.99',
//     description: 'Set of colorful markers for drawing and coloring.',
//   },
//   'Dot Markers': {
//     img: DotMarkers,
//     price: '$6.49',
//     description: 'Dot markers for creative stamping and coloring.',
//   },
//   'Paint Sticks': {
//     img: PaintSticks,
//     price: '$9.99',
//     description: 'Paint sticks for mess-free painting.',
//   },
//   'Paper Rolls': {
//     img: PaperRolls,
//     price: '$12.99',
//     description: 'Large rolls of paper for drawing and painting.',
//   },
//   'Wooden Pegs': {
//     img: Pegs,
//     price: '$3.99',
//     description: 'Wooden pegs for various crafting uses.',
//   },
//   'Ruler': {
//     img: Ruler,
//     price: '$1.49',
//     description: 'A 12-inch ruler for accurate measurements.',
//   },
//   'Stapler': {
//     img: Stapler,
//     price: '$4.49',
//     description: 'Stapler for binding papers together.',
//   },
//   'Straws': {
//     img: Straws,
//     price: '$1.99',
//     description: 'Plastic straws for crafting and decoration.',
//   },
//   'Twine': {
//     img: Twine,
//     price: '$2.49',
//     description: 'Twine for tying and crafting purposes.',
//   },
//   'Ribbon': {
//     img: Ribbon,
//     price: '$3.49',
//     description: 'Decorative ribbons for crafting and gifts.',
//   },
// };

// // ProductDetail component to display product details
// const ProductDetail = () => {
//   const { productName } = useParams(); // Get the product name from the URL
//   const navigate = useNavigate(); // Initialize useNavigate for navigation
//   const product = productData[productName]; // Find the product by its name
//   const [cart, setCart] = useState([]); // State for cart

//   if (!product) {
//     return <div>Product not found.</div>; // Handle case where product is not found
//   }

//   // Handle adding product to cart
//   const addToCart = () => {
//     setCart((prevCart) => [...prevCart, productName]);
//     console.log(`${productName} added to cart`);
//   };

//   // Handle "Buy Now" action and navigate to checkout
//   const buyNow = () => {
//     addToCart(); // Optionally add product to cart before navigating
//     console.log(`Proceed to checkout with ${productName}`);
//     navigate('/checkout'); // Redirect to the checkout page
//   };

//   return (
//     <div className="product-detail">
//       <img src={product.img} alt={productName} className="product-image" />
//       <h1>{productName}</h1>
//       <p>{product.description}</p>
//       <p className="product-price">Price: {product.price}</p>

//       {/* Add to Cart and Buy Now buttons */}
//       <div className="product-actions">
//         <button className="btn-add-to-cart" onClick={addToCart}>
//           Add to Cart
//         </button>
//         <button className="btn-buy-now" onClick={buyNow}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

// Importing product images
import Product1 from '../assets/Product1.png';
import Product2 from '../assets/Product2.png';
import Felt from '../assets/Felt.png';
import Glue from '../assets/Glue.png';
import ColoredPencils from '../assets/ColoredPencils.png';
import HolePunch from '../assets/HolePunch.png';
import GooglyEyes from '../assets/GooglyEyes.png';
import Markers from '../assets/Markers.png';
import DotMarkers from '../assets/DotMarkers.png';
import PaintSticks from '../assets/PaintSticks.png';
import PaperRolls from '../assets/PaperRolls.png';
import Pegs from '../assets/Pegs.png';
import Ruler from '../assets/Ruler.png';
import Stapler from '../assets/Stapler.png';
import Straws from '../assets/Straws.png';
import Twine from '../assets/Twine.png';
import Ribbon from '../assets/Ribbon.png';

// A mock product data object with all product details
const productData = {
  'Acrylic Paint': {
    img: Product1,
    price: '$19.99',
    description: 'Acrylic paint for artistic purposes.',
  },
  'Adhesive Paper': {
    img: Product2,
    price: '$29.99',
    description: 'Adhesive paper for crafting and decoration.',
  },
  'Felt Sheets': {
    img: Felt,
    price: '$4.99',
    description: 'Soft felt sheets for crafting and DIY projects.',
  },
  'Glue': {
    img: Glue,
    price: '$2.99',
    description: 'Craft glue for sticking materials together.',
  },
  'Colored Pencils': {
    img: ColoredPencils,
    price: '$8.99',
    description: 'A set of vibrant colored pencils for drawing.',
  },
  'Hole Punch': {
    img: HolePunch,
    price: '$5.49',
    description: 'Hole puncher for creating holes in paper.',
  },
  'Googly Eyes': {
    img: GooglyEyes,
    price: '$3.99',
    description: 'Googly eyes for adding fun to craft projects.',
  },
  'Markers': {
    img: Markers,
    price: '$7.99',
    description: 'Set of colorful markers for drawing and coloring.',
  },
  'Dot Markers': {
    img: DotMarkers,
    price: '$6.49',
    description: 'Dot markers for creative stamping and coloring.',
  },
  'Paint Sticks': {
    img: PaintSticks,
    price: '$9.99',
    description: 'Paint sticks for mess-free painting.',
  },
  'Paper Rolls': {
    img: PaperRolls,
    price: '$12.99',
    description: 'Large rolls of paper for drawing and painting.',
  },
  'Wooden Pegs': {
    img: Pegs,
    price: '$3.99',
    description: 'Wooden pegs for various crafting uses.',
  },
  'Ruler': {
    img: Ruler,
    price: '$1.49',
    description: 'A 12-inch ruler for accurate measurements.',
  },
  'Stapler': {
    img: Stapler,
    price: '$4.49',
    description: 'Stapler for binding papers together.',
  },
  'Straws': {
    img: Straws,
    price: '$1.99',
    description: 'Plastic straws for crafting and decoration.',
  },
  'Twine': {
    img: Twine,
    price: '$2.49',
    description: 'Twine for tying and crafting purposes.',
  },
  'Ribbon': {
    img: Ribbon,
    price: '$3.49',
    description: 'Decorative ribbons for crafting and gifts.',
  },
};

// Mock function to check if the user is authenticated
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
  // In a real app, you could check if the user is authenticated using a method like:
  // return !!localStorage.getItem('authToken'); 
  return false; // Assume the user is not authenticated for now
};

const ProductDetail = () => {
  const { productName } = useParams(); // Get the product name from the URL
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const product = productData[productName]; // Find the product by its name
  const [cart, setCart] = useState([]); // State for cart

  if (!product) {
    return <div>Product not found.</div>; // Handle case where product is not found
  }

  // Handle adding product to cart
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, productName]);
    console.log(`${productName} added to cart`);
  };

  // Handle "Buy Now" action
  const buyNow = () => {
    addToCart(); // Optionally add product to cart before navigating
    console.log(`Proceed to checkout with ${productName}`);

    if (isAuthenticated()) {
      navigate('/checkout'); // Redirect to the checkout page if authenticated
    } else {
      navigate('/signin'); // Redirect to sign-in page if not authenticated
    }
  };

  return (
    <div className="product-detail">
      <img src={product.img} alt={productName} className="product-image" />
      <h1>{productName}</h1>
      <p>{product.description}</p>
      <p className="product-price">Price: {product.price}</p>

      {/* Add to Cart and Buy Now buttons */}
      <div className="product-actions">
        <button className="btn-add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
        <button className="btn-buy-now" onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

