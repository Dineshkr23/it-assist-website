import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here you can add form validation and submission logic if needed
    navigate('/thankyou'); // Redirect to the "Thank You" page
  };

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row content">
          <div className="col-lg-8">
            <h3>Comprehensive IT Assistance for Laptops, Desktops & All Your Tech Needs</h3>
            <ul>
              <li><i className="ri-check-double-line"></i> <strong>Laptop & Desktop Fixes:</strong> Expert diagnosis and restoration for all brands - device issues, screen replacements, battery problems, keyboard fixes, and more. Fast turnaround times to get you back to work.</li>
              <li><i className="ri-check-double-line"></i> <strong>Software & System Help:</strong> Operating system installation, driver updates, problem resolution, malware elimination, threat protection, and system optimization for peak performance.</li>
              <li><i className="ri-check-double-line"></i> <strong>Printer & Network Services:</strong> Complete printer setup, issue resolution, network configuration, Wi-Fi connectivity, and multi-device connection solutions.</li>
              <li><i className="ri-check-double-line"></i> <strong>Data Recovery & Backup:</strong> Secure data recovery from damaged drives, backup solutions, cloud setup, and disaster recovery planning to protect your valuable information.</li>
              <li><i className="ri-check-double-line"></i> <strong>Device Upgrades:</strong> RAM upgrades, SSD installations, graphics card upgrades, and performance enhancements to extend your device's lifespan.</li>
            </ul>
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0 d-flex align-items-stretch forms">
            <form onSubmit={handleSubmit} id="contactForm" className="php-email-form">
              <div className="row">
                <h4>Get Unlimited IT Assist</h4>
                <p>for as little as $19/month</p>
              </div>
              <div className="inputBox form-group">
                <input type="text" id="name" placeholder="Your name...." required />
              </div>
              <div className="inputBox form-group">
                <input type="email" id="emailid" placeholder="Your Email....." required />
              </div>
              <div className="inputBox form-group">
                <input type="tel" id="phone" placeholder="Your Phone..." required />
              </div>
              <div className="inputBox">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
