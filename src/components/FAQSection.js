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
                <p>We provide comprehensive IT support services including laptop and desktop repair, printer setup and troubleshooting, virus and malware removal, network and Wi-Fi setup, data recovery, software installation, system optimization, hardware upgrades, and preventive maintenance. We support all major brands and handle both hardware and software issues.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Do you support both laptops and desktops? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <p>Yes, we support both laptops and desktops from all major brands including Dell, HP, Lenovo, Apple, ASUS, Acer, Microsoft, and more. We handle hardware repairs, software issues, upgrades, and maintenance for both device types. We also provide printer support and other IT services.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How quickly can you respond to IT issues? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <p>We offer 24/7 support with quick response times. For remote support, we typically respond within hours. On-site service can be scheduled based on urgency and availability. Priority support is available for our Professional and Enterprise plan subscribers with faster response times.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Do you offer both remote and on-site support? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                <p>Yes, we offer both remote and on-site support. Remote support is available for software issues, troubleshooting, and system optimization. On-site service is provided for hardware repairs, installations, and complex issues that require physical access. Our Enterprise plan includes dedicated on-site support for businesses.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">What are your pricing plans? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <p>We offer three affordable monthly support plans: Basic IT Support at $19/month includes diagnostics, basic repairs, and unlimited support. Professional IT Support at $29.99/month adds advanced repairs, preventive maintenance, and priority support. Enterprise IT Support at $49.99/month includes all features plus on-site support and device management for businesses. All plans cover laptops, desktops, printers, and other IT services.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
