import React from 'react';
import ContactForm from '../components/ContactForm'; // Adjust the path as needed

const AboutSection = () => {
  return (
<>
<section 
        id="hero" 
        className="d-flex align-items-center hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.45) 0%, rgba(30, 41, 59, 0.35) 100%), url('/assets/img/hero.webp')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>About Us</h1>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

<section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row content">
          <div className="col-lg-8">
            <h3>With Tech Care Assistance as your IT partner, you will get:</h3>
            <ul>
              <li><i className="ri-check-double-line"></i> Proactive Problem Prevention: Comp Care Takers Assistance actively monitors and addresses IT concerns before they escalate, ensuring seamless operations and minimal downtime for your business.</li>
              <li><i className="ri-check-double-line"></i> Expertise on Demand: Our seasoned IT professionals are readily available, guaranteeing rapid responses and effective solutions to any tech challenges you face.</li>
              <li><i className="ri-check-double-line"></i> Tailored IT Strategies: We understand that every business is unique. Comp Care Takers Assistance crafts customized IT roadmaps that align perfectly with your goals and growth projections.</li>
              <li><i className="ri-check-double-line"></i> Cutting-Edge Solutions: Stay ahead of the curve with the latest technological advancements. We provide our partners with top-tier tools and innovations for sustained competitive advantage.</li>
            </ul>
          </div>
          <div className="col-lg-4 pt-4 pt-lg-0 d-flex align-items-stretch forms">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
</>

    
  );
};

export default AboutSection;
