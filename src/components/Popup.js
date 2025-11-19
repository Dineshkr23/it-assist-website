import React, { useEffect } from 'react';
import './popup.css'

const Popup = () => {
  useEffect(() => {
    const popupOverlay = document.getElementById("popup-overlay");
    const openPopupButtons = document.querySelectorAll(".subscribe-popup-button");
    const closePopupButton = document.querySelector(".close-popup");

    const openPopup = () => {
      if (popupOverlay) {
        popupOverlay.style.display = "flex";
      }
    };

    const closePopup = () => {
      if (popupOverlay) {
        popupOverlay.style.display = "none";
      }
    };

    openPopupButtons.forEach(button => {
      button.addEventListener("click", openPopup);
    });

    if (closePopupButton) {
      closePopupButton.addEventListener("click", closePopup);
    }

    return () => {
      openPopupButtons.forEach(button => {
        button.removeEventListener("click", openPopup);
      });

      if (closePopupButton) {
        closePopupButton.removeEventListener("click", closePopup);
      }
    };
  }, []);

  return (
    <div>
      <div className="popup-overlay" id="popup-overlay" style={{ display: 'none' }}>
        <div className="popup">
          <h3>Get Unlimited IT Support</h3>
          <p>for as little as $19/month</p>
          <form id="subscribe-form">
            <div className="form-group">
              <label htmlFor="subscribe-name">Your Name</label>
              <input type="text" name="subscribe-name" id="subscribe-name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subscribe-email">Your Email</label>
              <input type="email" name="subscribe-email" id="subscribe-email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="subscribe-phone">Your Phone</label>
              <input type="tel" id="subscribe-phone" className="form-control" placeholder="Your Phone..." required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="close-popup btn btn-secondary">Close</button>
          </form>
        </div>
      </div>
      <button className="subscribe-popup-button">Subscribe</button>
    </div>
  );
};

export default Popup;
