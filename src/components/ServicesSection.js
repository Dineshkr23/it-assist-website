import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our IT Support Services</h2>
          <p>Comprehensive solutions for laptops, desktops, printers, and all your technology needs</p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <i className="bi bi-laptop" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
              <h4><a href="">Laptop & Desktop Repair</a></h4>
              <p>Expert repair services for all laptop and desktop brands. We handle hardware issues, screen replacements, battery problems, keyboard repairs, and component upgrades with precision and care.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <i className="bi bi-printer" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
              <h4><a href="">Printer Support & Setup</a></h4>
              <p>Complete printer services including installation, troubleshooting, network setup, driver configuration, and maintenance. We support all printer brands and models for home and office use.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <i className="bi bi-shield-check" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
              <h4><a href="">Virus Removal & Security</a></h4>
              <p>Professional malware removal, antivirus installation, security hardening, and protection against cyber threats. We keep your devices safe and your data secure.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <i className="bi bi-wifi" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
              <h4><a href="">Network & Connectivity</a></h4>
              <p>Wi-Fi setup, network troubleshooting, router configuration, internet connectivity issues, and multi-device network management. Get all your devices connected seamlessly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
