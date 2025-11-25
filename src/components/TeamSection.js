import React from 'react';

const TeamSection = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Find out why our customers rate us 5 stars!</h2>
          <p>400k+ Satisfied Customers</p>
          <div className="row">
            <div className="col-lg-4"><img src="assets/img/nps-home.png" className="img-fluid" alt="" /></div>
            <div className="col-lg-6 mt-5">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div className="member-info">
                  <p className="text-dark">"Outstanding experience with your tech team! Your dedication and extensive efforts to resolve our computer issue truly stood out. We're deeply grateful for a company that goes above and beyond to ensure their clients are fully satisfied and operational. A massive thank you!"</p>
                  <h4 className="mt-2">Robert D. James</h4>
                  <span>Mapleton, MN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <p>"Partnering with Comp Care Takers assistance transformed our tech landscape. Their responsive team and unparalleled expertise have propelled our efficiency, ensuring smooth operations and peace of mind. Truly the best IT decision we've made!."</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Janet Renolds</h4>
                <p>“Our company has been fortunate to have the excellent services of Comp Care Takers. The team equipped our company with the best tools and resources to be protected and run successfully without interruptions in our daily processes. They are there when we need them the most. Thank you!”</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="section-title">
            <p>400k+ Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
