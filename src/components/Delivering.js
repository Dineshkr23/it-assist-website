import React from 'react';
import America from '../img/america.jpg';

const Delivering = () => {
  return (
    <>
      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Delivering IT assistance across 20+ sectors in every state of the US.</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
              <img src={America} className="img-fluid" alt="Map of the United States" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h3>Additional Services:</h3>
              <p className="fst-italic">
                Serving SMBs and Self-Employed Professionals in various industries:
              </p>

              <div className="box">
                <ul>
                  <li><i className="bx bx-check"></i><b>Managed IT Services:</b></li>
                  <li><i className="bx bx-check"></i><b>Digital Marketing:</b></li>
                  <li><i className="bx bx-check"></i><b>E-commerce Solutions:</b></li>
                  <li><i className="bx bx-check"></i><b>CRM (Customer Relationship Management) Solutions:</b></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Delivering;
