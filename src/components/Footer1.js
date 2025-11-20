import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/emailsubscription");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>IT Assist Experts</h4>
            <p>
              IT Assist Experts offers comprehensive IT assistance services for laptops, desktops, printers, and all your technology needs. Our expertise spans device maintenance, problem resolution, network setup, malware elimination, data recovery, and preventive maintenance to keep your devices running smoothly.
            </p>
          </div>
          <div className="col-md-3">
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact Details</h4>
            <address>
              <p>
                <i className="bi bi-geo-alt-fill"></i> No6401 31ST ST S APT 112,
                SAINT PETERSBURG, FL 33712 US
              </p>
              <p>
                <i className="bi bi-geo-alt-fill"></i> 2296 Henderson Mill Rd
                #116, Atlanta, GA 30345
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i>(888) 830-1368
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i>{" "}
                support@itassistexperts.com
              </p>
            </address>
          </div>
          <div className="col-md-3">
            <h4>Newsletter</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Enter your email here"
                />
              </div>
              <button type="submit" className="btn btn-primary newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="fixed-strip">
        <a href="tel:(888) 830-1368">
          <i class="fa fa-phone"></i>
          <span class="hidden-number">(888) 830-1368</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
