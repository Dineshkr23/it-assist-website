import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ThankYouPage.css";

const ThankYou = () => {
  const location = useLocation();
  const { name, product, quantity, price, orderId } = location.state || {};

  return (
    <div className="thank-you-container d-flex justify-content-center align-items-center vh-100">
      <div className="thank-you-box text-center shadow p-5 bg-white rounded">
        <i className="fas fa-check-circle success-icon mb-4"></i>
        <h1 className="text-success">Thank You for Your Order!</h1>
        <p className="text-muted mb-4">
          We appreciate your business, <strong>{name}</strong>. Your order
          details are below:
        </p>

        <div className="order-details mb-4">
          <p>
            <strong>Product:</strong> {product}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p className="price-text">
            <strong>Total Price:</strong>{" "}
            <span className="text-success">${price * quantity}</span>
          </p>
          <p className="order-id-text">
            <strong>Order ID:</strong>{" "}
            <span className="text-primary">#{orderId}</span>
          </p>
        </div>

        <p className="text-muted">
          We will contact you shortly to confirm the details.
        </p>

        <Link to="/" className="btn btn-outline-dark mt-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
