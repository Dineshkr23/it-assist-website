import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";

const A4PrinterPaperPage = () => {
  const productImages = ["/assets/img/p5.jpg"];

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

    navigate("/thank-you", {
      state: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        product: "Premium A4 Printer Paper",
        quantity: document.getElementById("quantity").value,
        price: 20,
        orderId,
      },
    });

    setShowModal(false);
  };

  return (
    <section className="product-page container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="product-gallery">
            <img
              src={selectedImage}
              alt="Premium A4 Printer Paper"
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
          <h1 className="product-title">Premium A4 Printer Paper</h1>
          <p className="text-muted">Brand: PaperCo</p>
          <div className="rating mb-3">
            <span>★★★★★</span> <small>(200 Reviews)</small>
          </div>

          <div className="product-price mt-3">
            <span className="text-danger fs-3">$20.00</span>
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
              <i className="fas fa-file-alt me-3 text-primary fa-2x"></i>
              <span>High-Quality A4 Paper</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-recycle me-3 text-success fa-2x"></i>
              <span>Eco-Friendly and Recyclable</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-print me-3 text-danger fa-2x"></i>
              <span>Compatible with All Printers</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-box me-3 text-warning fa-2x"></i>
              <span>500 Sheets per Pack</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description mt-5 p-4 bg-light rounded shadow-sm">
        <h3>Product Description</h3>
        <p>
          This Premium A4 Printer Paper is designed for high-quality printing.
          Perfect for professional documents, reports, and presentations. It's
          compatible with inkjet and laser printers, providing smooth, jam-free
          printing.
        </p>
      </div>

      {/* Review Section */}
      <div className="product-reviews mt-5 p-4 bg-white rounded shadow-sm">
        <h3>Customer Reviews</h3>
        <div className="review-item mb-4 border-bottom pb-3">
          <p>
            <strong>Linda Cooper</strong> -{" "}
            <span className="text-warning">★★★★★</span>
          </p>
          <p>
            "The best paper I've used for my printer. The quality is superb, and
            it's eco-friendly too!"
          </p>
        </div>
        <div className="review-item mb-4 border-bottom pb-3">
          <p>
            <strong>James Wright</strong> -{" "}
            <span className="text-warning">★★★★☆</span>
          </p>
          <p>
            "Very smooth and high quality. The price is affordable, and the
            delivery was quick."
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
  );
};

export default A4PrinterPaperPage;
