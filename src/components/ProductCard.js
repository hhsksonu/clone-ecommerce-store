import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Toast from './Toast';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setShowToast(true);
  };

  return (
    <>
      <Link to={`/product/${product.id}`} className="product-card">
        <div className="product-image">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {showToast && (
        <Toast
          message="Item added to cart successfully!"
          onClose={() => setShowToast(false)}
          showCheckoutButton={true}
        />
      )}
    </>
  );
}

export default ProductCard;