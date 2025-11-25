import React from 'react';


const EmailSubscription = () => {
  return (
    <>
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
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Welcome to IT Assist Experts Family</h1>
              <h1></h1>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

</section>

      <div className="emailsubscription">
        <div className="container mt-5">
          <div className="subscription-content" data-aos="fade-up" data-aos-delay="200">
            <h1>Thank You for Subscribing!</h1>
            <p>You have successfully subscribed to our newsletter. We will keep you updated with the latest news and offers.</p>
            <div className="additional-info">
              <h2>What's Next?</h2>
              <p>Stay tuned for our upcoming emails. Here’s what you can look forward to:</p>
              <ul>
                <li>Exclusive discounts and offers</li>
                <li>Latest updates and news</li>
                <li>Personalized content and recommendations</li>
                <li>Early access to new products and services</li>
              </ul>
              <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSubscription;
