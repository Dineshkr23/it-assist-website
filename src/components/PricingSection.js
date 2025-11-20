import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Pricing</h2>
          <p>IT Assist Experts offers customized IT solutions to meet the diverse needs of businesses, whether you're working remotely or in an office. Every plan provides access to our exclusive software suite, designed to ensure optimal performance and robust protection for your enterprise.</p>
        </div>
        <div className="row">
          <div className="pricing-title">
            <h2>Choose a plan that best suits your needs</h2>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="box">
              <h3>IT Assist Experts Basic</h3>
              <h4><sup>$</sup>19<span> per month</span></h4>
              <ul>
                <li><i className="bx bx-check"></i><b>Help Desk Assistance:</b><br />Unlimited phone, chat, and email assistance, device performance and speed tune-ups, program installation and setup.</li>
                <li><i className="bx bx-check"></i><b>Preventative Maintenance:</b><br />Adware/spyware cleanup, threat protection.</li>
                <li><i className="bx bx-check"></i><b>Additional Services:</b><br />More IT assistance as needed.</li>
              </ul>
              <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="box featured">
              <h3>IT Assist Experts Professional</h3>
              <h4><sup>$</sup>29.99<span> per month</span></h4>
              <ul>
                <li><i className="bx bx-check"></i><b>Includes all Basic features</b></li>
                <li><i className="bx bx-check"></i><b>Custom Software Platform:</b><br />Protection Suite – antivirus, VPN, firewall, automatic backup, employee monitoring.</li>
                <li><i className="bx bx-check"></i><b>Remote Workforce Assistance:</b><br />New employee onboarding, tracking & computer lockdown at termination, home network, and computer protection.</li>
                <li><i className="bx bx-check"></i><b>Backup & Disaster Recovery:</b><br />Remote data migration, disaster recovery (RTO & RPO).</li>
                <li><i className="bx bx-check"></i><b>Protection & System Monitoring:</b><br />Network protection scans, VPN configuration, user training on protection best practices.</li>
              </ul>
              <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
            </div>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="box">
              <h3>IT Assist Experts Enterprise</h3>
              <h4><sup>$</sup>49.99<span> per month</span></h4>
              <ul>
                <li><i className="bx bx-check"></i><b>Includes all Basic features</b></li>
                <li><i className="bx bx-check"></i><b>Advanced Protection & Monitoring:</b><br />Dark web scans for leaked information, email protection scans, web content filtering, firewall configuration and updates.</li>
                <li><i className="bx bx-check"></i><b>Data Protection and Privacy Compliance:</b><br />Guidance to implement a data protection and privacy compliance program, website sign-up/login and privacy policy review, regular data compliance scans for vulnerabilities.</li>
                <li><i className="bx bx-check"></i><b>Dedicated IT Manager:</b><br />Personalized IT management for your business.</li>
              </ul>
              <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
