import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">What IT services do you provide? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                <p>We provide comprehensive IT assistance services including laptop and desktop fixes, printer setup and problem-solving, malware and threat elimination, network and Wi-Fi setup, data recovery, program installation, system optimization, device upgrades, and preventive maintenance. We assist with all major brands and handle both device and software issues.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Do you assist with both laptops and desktops? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>Yes, we assist with both laptops and desktops from all major brands including Dell, HP, Lenovo, Apple, ASUS, Acer, Microsoft, and more. We handle device fixes, software issues, upgrades, and maintenance for both device types. We also provide printer assistance and other IT services.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How quickly can you respond to IT issues? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>We offer 24/7 assistance with quick response times. For remote help, we typically respond within hours. On-site service can be scheduled based on urgency and availability. Priority assistance is available for our Professional and Enterprise plan subscribers with faster response times.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Do you offer both remote and on-site assistance? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>Yes, we offer both remote and on-site assistance. Remote assistance is available for software issues, problem resolution, and system optimization. On-site service is provided for device repairs, installations, and complex issues that require physical access. Our Enterprise plan includes dedicated on-site assistance for businesses.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">What are your pricing plans? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>We offer three affordable monthly assistance plans: Basic IT Assistance at $19/month includes diagnostics, basic fixes, and unlimited help. Professional IT Assistance at $29.99/month adds advanced fixes, preventive maintenance, and priority assistance. Enterprise IT Assistance at $49.99/month includes all features plus on-site help and device management for businesses. All plans cover laptops, desktops, printers, and other IT services.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
