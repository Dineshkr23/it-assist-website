import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './popup.css';
import ContactForm from './ContactForm';

const Popup = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const autoOpenTimerRef = useRef(null);
  const hasAutoOpenedRef = useRef(false);

  const openPopup = () => {
    const popupOverlay = document.getElementById("popup-overlay");
    if (popupOverlay) {
      popupOverlay.style.display = "flex";
      setIsOpen(true);
    }
  };

  const closePopup = () => {
    const popupOverlay = document.getElementById("popup-overlay");
    if (popupOverlay) {
      popupOverlay.style.display = "none";
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const popupOverlay = document.getElementById("popup-overlay");
    const openPopupButtons = document.querySelectorAll(".subscribe-popup-button");
    const closePopupButton = document.querySelector(".close-popup");

    const handleButtonClick = (e) => {
      e.preventDefault();
      // Clear auto-open timer if user manually opens
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
        autoOpenTimerRef.current = null;
      }
      openPopup();
    };

    // Auto-open popup after 7 seconds (only once)
    if (!hasAutoOpenedRef.current) {
      autoOpenTimerRef.current = setTimeout(() => {
        const popupOverlay = document.getElementById("popup-overlay");
        // Check if popup is not already visible
        if (popupOverlay && popupOverlay.style.display !== "flex") {
          openPopup();
          hasAutoOpenedRef.current = true;
        }
      }, 7000);
    }

    openPopupButtons.forEach(button => {
      button.addEventListener("click", handleButtonClick);
    });

    if (closePopupButton) {
      closePopupButton.addEventListener("click", closePopup);
    }

    // Close on overlay click
    if (popupOverlay) {
      popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
          closePopup();
        }
      });
    }

    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
      }
      openPopupButtons.forEach(button => {
        button.removeEventListener("click", handleButtonClick);
      });

      if (closePopupButton) {
        closePopupButton.removeEventListener("click", closePopup);
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Close the popup
    closePopup();
    // Navigate to thank you page
    navigate("/thankyou");
  };

  return (
    <div>
      <div className="popup-overlay" id="popup-overlay" style={{ display: 'none' }}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <button 
            type="button" 
            className="close-popup" 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
          <h3>Get Unlimited IT Assistance</h3>
          <p>for as little as $19/month</p>
          <form onSubmit={handleFormSubmit} id="subscribe-form" className="php-email-form">
            <div className="inputBox form-group">
              <input
                type="text"
                id="subscribe-name"
                name="name"
                placeholder="Your name...."
                required
              />
            </div>
            <div className="inputBox form-group">
              <input
                type="email"
                id="subscribe-email"
                name="emailid"
                placeholder="Your Email....."
                required
              />
            </div>
            <div className="inputBox form-group">
              <input
                type="tel"
                id="subscribe-phone"
                name="phone"
                placeholder="Your Phone..."
                required
              />
            </div>
            <div className="inputBox" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button 
                type="button" 
                className="close-popup btn btn-secondary"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
