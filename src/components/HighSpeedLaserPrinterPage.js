import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import Navbar from "./Header";
import Footer from "./Footer";

const HighSpeedLaserPrinterPage = () => {
  const productImages = ["/assets/img/p3.jpg"];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const orderId = Math.floor(100000 + Math.random() * 900000);

    navigate("/thankyou", {
      state: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        product: "High-Speed Laser Printer",
        quantity: document.getElementById("quantity").value,
        price: 300,
        orderId,
      },
    });

    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <section className="product-page container py-5">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery">
              <img
                src={selectedImage}
                alt="High-Speed Laser Printer"
                className="product-main-image img-fluid rounded"
              />
              <div className="product-thumbnails d-flex mt-3">
                {productImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`img-thumbnail me-2 ${
                      selectedImage === image ? "active" : ""
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h1 className="product-title">High-Speed Laser Printer</h1>
            <p className="text-muted">Brand: Brother</p>
            <div className="rating mb-3">
              <span>★★★★☆</span> <small>(145 Reviews)</small>
            </div>

            <div className="product-price mt-3">
              <span className="text-danger fs-3">$300.00</span>
            </div>

            <p className="mt-4 text-success">In Stock</p>

            <div className="product-quantity d-flex align-items-center mb-4">
              <label htmlFor="quantity" className="me-2">
                Quantity:
              </label>
              <select id="quantity" className="form-select w-auto">
                {[1, 2, 3, 4, 5].map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>

            <div className="buy-buttons d-flex gap-3">
              <button className="btn btn-warning" onClick={handleButtonClick}>
                Add to Cart
              </button>
              <button className="btn btn-blue" onClick={handleButtonClick}>
                Buy Now
              </button>
            </div>

            <ul className="product-features mt-5">
              <li className="d-flex align-items-center mb-3">
                <i className="fas fa-bolt me-3 text-warning fa-2x"></i>
                <span>Ultra-Fast Laser Printing</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="fas fa-network-wired me-3 text-primary fa-2x"></i>
                <span>Network and Wireless Connectivity</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="fas fa-file-alt me-3 text-success fa-2x"></i>
                <span>Double-Sided Printing (Duplex)</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="fas fa-shield-alt me-3 text-danger fa-2x"></i>
                <span>Secure Print Feature</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Description */}
        <div className="product-description mt-5 p-4 bg-light rounded shadow-sm">
          <h3>Product Description</h3>
          <p>
            The High-Speed Laser Printer offers exceptional print quality and
            efficiency, making it ideal for office and home use. With
            lightning-fast print speeds and wireless connectivity, you can print
            large volumes without interruption.
          </p>
        </div>

        {/* Review Section */}
        <div className="product-reviews mt-5 p-4 bg-white rounded shadow-sm">
          <h3>Customer Reviews</h3>
          <div className="review-item mb-4 border-bottom pb-3">
            <p>
              <strong>Michael Roberts</strong> -{" "}
              <span className="text-warning">★★★★★</span>
            </p>
            <p>
              "Best laser printer I've used! It's super-fast and prints clear,
              sharp documents."
            </p>
          </div>
          <div className="review-item mb-4 border-bottom pb-3">
            <p>
              <strong>Anna Clark</strong> -{" "}
              <span className="text-warning">★★★★☆</span>
            </p>
            <p>
              "Reliable and efficient. The double-sided printing is a game
              changer. Highly recommended!"
            </p>
          </div>
        </div>

        {/* Modal Form */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content p-4">
              <h2>Enter Your Details</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    required
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary w-100 mt-2"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default HighSpeedLaserPrinterPage;
