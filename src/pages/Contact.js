import React from 'react';
import { useNavigate } from 'react-router-dom';
import Clients1 from '../img/clients/trust-pilot.png';
import Clients2 from '../img/clients/mcafee.png';
import Clients3 from '../img/clients/bbb-logo.png';
import Clients4 from '../img/clients/ms-partner.jpg';
import Clients5 from '../img/clients/ICON-NETWORK.svg';
import Clients6 from '../img/clients/500startups.png';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };

  return (
    <>
      <section id="hero" className="d-flex align-items-center hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Contact Us</h1>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients1} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients2} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients3} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients4} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients5} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
              <img src={Clients6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <h4>Fill up the form and we will get back to you</h4>
                <form id="contactForm" className="php-email-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="emailid" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="phone" placeholder="Phone Number" required />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Contact Details</h4>
              <ul className="contact-details">
                <li><strong>Address 1</strong></li>
                <li>No6401 31ST ST S APT 112, SAINT PETERSBURG, FL 33712 US</li>
                <li>2296 Henderson Mill Rd #116, Atlanta, GA 30345</li>
                <li><strong>Email</strong></li>
                <li>support@compassistpro.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
