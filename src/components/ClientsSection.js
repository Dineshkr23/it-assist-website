import React from 'react';

const ClientsSection = () => {
  return (
    <section id="clients" className="clients section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Tech assist for all your need !</h2>
        </div>
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-LAPTOP.svg" className="img-fluid" alt="" />
            <p>Laptop Computers</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-DESKTOP.svg" className="img-fluid" alt="" />
            <p>PC/Mac</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-TABLET.svg" className="img-fluid" alt="" />
            <p>Tablets</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-MOBILE.svg" className="img-fluid" alt="" />
            <p>iOS/Android</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-NETWORK.svg" className="img-fluid" alt="" />
            <p>Network Setup</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
            <img src="assets/img/clients/ICON-PRINTER.svg" className="img-fluid" alt="" />
            <p>Printers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
