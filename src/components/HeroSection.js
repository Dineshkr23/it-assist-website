import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
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
          <div
            className="col-lg-8 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Expert Laptop & Desktop Assistance - Fast, Reliable, 24/7</h1>
            <h2>
              Complete IT Solutions: Laptop Fixes, Desktop Assistance, Printer
              Services & More
            </h2>
            {/* <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="tel:+18888301368" className="btn-get-started scrollto">
                Call Now
              </a>
            </div> */}
          </div>
          {/* <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="/path/to/your/image.jpg" className="img-fluid animated" alt="IT Assistance" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
