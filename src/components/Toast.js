import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Toast.css';

function Toast({ message, onClose, showCheckoutButton }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose();
        navigate('/cart');
    };

    return (
        <div className="toast-overlay" onClick={onClose}>
            <div className="toast-container" onClick={(e) => e.stopPropagation()}>
                <div className="toast-icon">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="25" fill="#28a745" />
                        <path d="M15 25L22 32L35 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="toast-title">{message}</h3>
                <div className="toast-buttons">
                    {showCheckoutButton && (
                        <button onClick={handleCheckout} className="toast-btn-primary">
                            Proceed to Checkout
                        </button>
                    )}
                    <button onClick={onClose} className="toast-btn-secondary">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Toast;