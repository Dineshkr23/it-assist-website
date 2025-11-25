import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our IT Assistance Services</h2>
          <p>
            Comprehensive solutions for laptops, desktops, printers, and all
            your technology needs
          </p>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <i
                className="bi bi-laptop"
                style={{
                  fontSize: "48px",
                  color: "#2563eb",
                  marginBottom: "20px",
                }}
              ></i>
              <h4>
                <a href="">Laptop & Desktop Assistance</a>
              </h4>
              <p>
                Expert assistance services for all laptop and desktop brands. We
                handle device issues, screen replacements, battery problems,
                keyboard assistance, and component upgrades with precision and
                care.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <i
                className="bi bi-printer"
                style={{
                  fontSize: "48px",
                  color: "#2563eb",
                  marginBottom: "20px",
                }}
              ></i>
              <h4>
                <a href="">Printer Assistance & Setup</a>
              </h4>
              <p>
                Complete printer services including installation,
                problem-solving, network setup, driver configuration, and
                maintenance. We assist with all printer brands and models for
                home and office use.
              </p>
            </div>
          </div>
          {/* <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <i className="bi bi-shield-check" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
              <h4><a href="">Malware Elimination & Protection</a></h4>
              <p>Professional threat removal, antivirus installation, protection hardening, and defense against cyber threats. We keep your devices safe and your data protected.</p>
            </div>
          </div> */}
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <i
                className="bi bi-wifi"
                style={{
                  fontSize: "48px",
                  color: "#2563eb",
                  marginBottom: "20px",
                }}
              ></i>
              <h4>
                <a href="">Network & Connectivity</a>
              </h4>
              <p>
                Wi-Fi setup, network problem-solving, router configuration,
                network connection issues, and multi-device network management.
                Get all your devices connected seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
