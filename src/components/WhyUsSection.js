import React from "react";
import UsImage from "../img/why-us.jpg";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>Why Choose IT Assist Experts?</h3>
              <p>
                In today's digital world, your business and personal life depend
                on reliable technology. Laptops, desktops, and printers are
                essential tools that require consistent connectivity, frequent
                updates, routine maintenance, and robust protection. Challenges
                can pop up at any time, be it device failure, software issues,
                network problems, or protection threats.
              </p>
              <p>Here's what we offer:</p>
              <ul>
                <li>
                  <strong>Comprehensive IT Assistance:</strong> Expert fixes and
                  help for laptops, desktops, printers, and all your technology
                  needs.
                </li>
                <li>
                  <strong>24/7 Availability:</strong> Round-the-clock assistance
                  when you need it most, minimizing downtime and disruption.
                </li>
                <li>
                  <strong>Multi-Service Solutions:</strong> From device
                  maintenance to problem resolution, malware elimination, data
                  recovery, and network setup - we handle it all.
                </li>
                <li>
                  <strong>Protection & Privacy:</strong> Guarantee that your
                  software and devices align with protection and privacy
                  standards, safeguarding your valuable data.
                </li>
                <li>
                  <strong>Cost-Effective Plans:</strong> Affordable monthly
                  assistance plans starting at $19/month, providing unlimited IT
                  help.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: `url(${UsImage})` }}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
