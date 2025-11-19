import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Thankyou = () => {
  useEffect(() => {
    // Inject Google Tag Manager script dynamically
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5PHHKMR');;
    `;
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Helmet to add noscript GTM code */}
      <Helmet>
        <noscript>{`
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5PHHKMR"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}</noscript>
      </Helmet>

      <section id="hero" className="d-flex align-items-center hero-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Thank you for filling up the form</h1>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src="" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="thankyou" className="thankyou">
        <div className="container">
          <h2>Thank You!</h2>
          <p>
            Thank you for contacting us. We have received your message and will
            get back to you shortly.
          </p>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
