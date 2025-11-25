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

      <section id="thankyou" className="thankyou" style={{ padding: "100px 0", minHeight: "60vh" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" data-aos="fade-up">
              <div 
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "#10b981",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)"
                }}
              >
                <i 
                  className="bi bi-check-lg" 
                  style={{
                    fontSize: "50px",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                ></i>
              </div>
              <h1 style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontSize: "2.5rem",
                color: "#0f172a",
                marginBottom: "20px"
              }}>
                Thank You!
              </h1>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2rem",
                color: "#64748b",
                lineHeight: "1.8",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                Thank you for contacting us. We have received your message and will
                get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thankyou;
