import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";

const ProductPage = () => {
  const productImages = [
    "/assets/img/p2.jpg",
    "/assets/img/p3.jpg",
    "/assets/img/p4.jpg",
    "/assets/img/p5.jpg",
  ];

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
        product: "All-in-One Wireless Printer",
        quantity: document.getElementById("quantity").value,
        price: 400,
        orderId,
      },
    });

    setShowModal(false);
  };

  return (
    <section className="product-page container py-5">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          <div className="product-gallery">
            <img
              src={selectedImage}
              alt="All-in-One Wireless Printer"
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

        {/* Product Details Section */}
        <div className="col-md-6">
          <h1 className="product-title">All-in-One Wireless Printer</h1>
          <p className="text-muted">Brand: HP</p>
          <div className="rating mb-3">
            <span>★★★★☆</span> <small>(120 Reviews)</small>
          </div>

          <div className="product-price mt-3">
            <span className="text-danger fs-3">$400.00</span>
            <span className="original-price ms-2">$580.00</span>
            <span className="text-success ms-3 fs-5">Save 31%</span>
          </div>

          <p className="mt-4 text-success">In Stock</p>

          <div className="product-quantity d-flex align-items-center mb-4">
            <label htmlFor="quantity" className="me-2">
              Quantity:
            </label>
            <select id="quantity" className="form-select w-auto">
              {[1, 2, 3, 4].map((q) => (
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
              <i className="fas fa-wifi me-3 text-primary fa-2x"></i>
              <span>Wireless printing from multiple devices</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-bolt me-3 text-warning fa-2x"></i>
              <span>High-speed laser print technology</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-tint me-3 text-danger fa-2x"></i>
              <span>Includes Ink & Toner Cartridges</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-shield-alt me-3 text-success fa-2x"></i>
              <span>1-Year Warranty Included</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description mt-5 p-4 bg-light rounded shadow-sm">
        <h3>Product Description</h3>
        <p>
          This all-in-one wireless printer is designed for home and office use.
          It offers high-speed printing with laser technology, delivering sharp
          and vibrant results. Print from multiple devices seamlessly using
          wireless connectivity. Its compact design fits in any workspace,
          ensuring quality prints every time.
        </p>
      </div>

      {/* Reviews Section */}
      <div className="product-reviews mt-5 p-4 bg-white rounded shadow-sm">
        <h3>Customer Reviews</h3>
        <div className="review-item mb-4 border-bottom pb-3">
          <p>
            <strong>John Doe</strong> -{" "}
            <span className="text-warning">★★★★★</span>
          </p>
          <p>
            "Setup was seamless and print quality is top-notch. Highly recommend
            for home offices!"
          </p>
        </div>
        <div className="review-item border-bottom pb-3">
          <p>
            <strong>Jane Smith</strong> -{" "}
            <span className="text-warning">★★★★☆</span>
          </p>
          <p>
            "Great value for the price, but the toner runs out faster than
            expected."
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

export default ProductPage;
