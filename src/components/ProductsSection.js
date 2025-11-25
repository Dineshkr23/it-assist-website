import React from "react";

const ProductsSection = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">
                OUR IT ASSISTANCE SERVICES
              </h2>
              <p className="mt-3">
                Comprehensive solutions for all your technology needs
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* Service 1 - Laptop Fixes */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <span className="sale">Most Popular</span>
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-laptop"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">Laptop Fixes & Assistance</h3>
                  <p className="mb-0 amount">Starting at $49</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                  </div>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Desktop Assistance */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-tv"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">
                    Desktop Computer Assistance
                  </h3>
                  <p className="mb-0 amount">Starting at $59</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                  </div>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 - Printer Services */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-printer"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">Printer Setup & Fixes</h3>
                  <p className="mb-0 amount">Starting at $39</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                  </div>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Malware Elimination */}
          {/* <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-shield-check"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">
                    Malware & Threat Elimination
                  </h3>
                  <p className="mb-0 amount">Starting at $79</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                  </div>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Service 5 - Network Setup */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-wifi"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">Network & Wi-Fi Setup</h3>
                  <p className="mb-0 amount">Starting at $69</p>
                  <div className="py-1">
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star active"></span>
                    <span className="ti-star"></span>
                  </div>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6 - Data Recovery */}
          <div className="col-sm-6 col-lg-4 mb-4">
            <div className="d-block text-center">
              <div className="product-list">
                <div className="product-image position-relative">
                  <span className="sale">Emergency</span>
                  <div
                    className="service-icon-wrapper"
                    style={{
                      height: "250px",
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <i
                      className="bi bi-hdd"
                      style={{ fontSize: "80px", color: "#fff", opacity: 0.9 }}
                    ></i>
                  </div>
                </div>
                <div className="product-name pt-3">
                  <h3 className="text-capitalize">Data Recovery Services</h3>
                  <p className="mb-0 amount">Starting at $99</p>
                  <a href="/printer" className="btn btn-blue mt-3">
                    GET SERVICE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="overflow-hidden my-5">
          <div className="row">
            <div className="col-sm-12 up_to_off">
              <div
                style={{
                  minHeight: "200px",
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  padding: "60px 20px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)",
                    zIndex: 1,
                  }}
                ></div>
                <div
                  className="up_to_content"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <h2
                    style={{
                      color: "#fff",
                      margin: 0,
                      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                      fontWeight: "700",
                      fontFamily: '"Poppins", sans-serif',
                      lineHeight: "1.3",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      padding: "0 20px",
                    }}
                  >
                    24/7 ASSISTANCE - LAPTOPS, DESKTOPS, PRINTERS & MORE!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductsSection;
