import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Reuse the same CSS for styling
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
import Ribbon from '../assets/Ribbon.png';
import Ruler from '../assets/Ruler.png';
import Stapler from '../assets/Stapler.png';
import Straws from '../assets/Straws.png';
import Twine from '../assets/Twine.png';

// Define product list
const products = [
  { img: Product1, name: 'Acrylic Paint', price: '$19.99' },
  { img: Product2, name: 'Adhesive Paper', price: '$29.99' },
  { img: Felt, name: 'Felt', price: '$39.99' },
  { img: Glue, name: 'Glue', price: '$55.90' },
  { img: ColoredPencils, name: 'Colored Pencils', price: '$22.99' },
  { img: HolePunch, name: 'Hole Punch', price: '$33.99' },
  { img: GooglyEyes, name: 'Googly Eyes', price: '$44.99' },
  { img: Markers, name: 'Markers', price: '$59.99' },
  { img: DotMarkers, name: 'Dot Markers', price: '$59.99' },
  { img: PaintSticks, name: 'Paint Sticks', price: '$59.99' },
  { img: PaperRolls, name: 'Paper Rolls', price: '$59.99' },
  { img: Pegs, name: 'Wooden Pegs', price: '$59.99' },
  { img: Ribbon, name: 'Ribbon', price: '$59.99' },
  { img: Ruler, name: 'Ruler', price: '$59.99' },
  { img: Stapler, name: 'Stapler', price: '$59.99' },
  { img: Straws, name: 'Straws', price: '$59.99' },
  { img: Twine, name: 'Twine', price: '$59.99' },
];

function All() {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <Link to={`/product/${encodeURIComponent(product.name)}`}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default All;
