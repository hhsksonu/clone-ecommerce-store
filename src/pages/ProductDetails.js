import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import Toast from '../components/Toast';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>

      <div className="product-details-container">
        <div className="product-images">
          <img src={product.images[0]} alt={product.title} />
        </div>

        <div className="product-details-info">
          <h1>{product.title}</h1>
          <p className="product-category">Category: {product.category.name}</p>
          <p className="product-details-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <button onClick={handleAddToCart} className="add-to-cart-btn-large">
            Add to Cart
          </button>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Item added to cart successfully!"
          onClose={() => setShowToast(false)}
          showCheckoutButton={true}
        />
      )}
    </div>
  );
}

export default ProductDetails;