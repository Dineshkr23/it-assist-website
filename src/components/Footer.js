import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../img/logo.png"; // Adjust the path to match your project structure

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 footer-contact">
              <Link to="/" className="logo me-auto">
                <img src={Logo} alt="IT Assist Experts" className="img-fluid" />
              </Link>
              <p>Copyright © IT Assist Experts 2023 All Rights Reserved.</p>
              <p>
                Contact Us
                <ul>
                  <li className="text-white">
                    Address: 1498 Bouldercrest Rd SE Apt 118, Atlanta, GA,
                    30316, USA
                  </li>
                  <li className="text-white">Email: info@swifyithelp.com</li>
                </ul>
              </p>
              <br />
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <br />
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
            <div className="col-lg-6 col-md-6 footer-links">
              <h4>About Us</h4>
              <p>
                IT Assist Experts offers comprehensive IT solutions to ensure
                smooth and efficient business operations. Our expertise spans
                troubleshooting, infrastructure maintenance, and the
                implementation of cutting-edge technologies to enhance
                performance and security.
              </p>
              <p>
                Disclaimer: IT Assist Experts operates independently, providing
                remote technical assistance for a wide range of software,
                hardware, and peripherals. While we cover numerous third-party
                products globally, we are not affiliated with these companies
                unless stated otherwise. For warranties or permissions related
                to specific products, please contact the respective third party.
                IT Assist Experts is not responsible for third-party content
                accessed through our platform; users interact with such content
                at their own risk.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>IT Assist Experts</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link to="/">IT Assist Experts</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
