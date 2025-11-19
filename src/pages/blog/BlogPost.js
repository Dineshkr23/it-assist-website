import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css";

const BlogPost = () => {
  return (
    <div className="blog-post-wrapper mt-5 py-5">
      <div className="container">
        <div className="row">
          {/* Main Content Area */}
          <div className="col-lg-8">
            <nav className="breadcrumb mb-4">
              <Link to="/" className="breadcrumb-item">
                Home
              </Link>
              <Link to="/blog" className="breadcrumb-item">
                Apps
              </Link>
              <span className="breadcrumb-item active">
                Top 5 Printer Maintenance Tips
              </span>
            </nav>

            <article className="blog-post">
              <h1 className="post-title">Top 5 Printer Maintenance Tips</h1>
              <p className="post-meta">
                By <span className="author">Shane Doe</span> • Dec 28, 2023 •
                Updated: Dec 30, 2023 • 6 Min Read
              </p>

              <div className="post-image my-4">
                <img
                  src="/assets/img/Printer-Maintenance.jpg"
                  alt="Printer Maintenance"
                  className="img-fluid rounded"
                />
              </div>

              <div className="social-share d-flex mb-4">
                <button className="btn btn-primary me-2">Facebook</button>
                <button className="btn btn-info me-2">Twitter</button>
                <button className="btn btn-danger">Pinterest</button>
              </div>

              <section className="post-content">
                <p>
                  Proper printer maintenance ensures optimal performance and
                  extends the lifespan of your device. Regular care prevents
                  common issues like paper jams, streaky prints, and unexpected
                  breakdowns. Here are five detailed tips to help you keep your
                  printer in great shape:
                </p>

                <h3>1. Keep Your Printer Clean</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/Cleaning-Printer.jpg"
                    alt="Cleaning Printer"
                    className="img-fluid rounded"
                  />
                </div>
                <p>
                  Dust and debris can cause operational issues. Clean the
                  printer’s exterior weekly using a lint-free cloth and
                  isopropyl alcohol. For the interior, use a handheld vacuum to
                  remove dust from gears and rollers. Never use compressed air
                  as it may spread dust further.
                </p>
                <div className="cta-buttons my-4">
                  <a href="/contact-us" className="btn btn-orange me-3">
                    Need Assistance? Contact Us
                  </a>
                  <a href="tel:+18001234567" className="btn btn-outline-dark">
                    Call Us Toll-Free
                  </a>
                </div>

                <h3>2. Use Genuine Ink and Toner</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/Genuine-Ink.jpg"
                    alt="Genuine Ink"
                    className="img-fluid rounded"
                  />
                </div>
                <p>
                  Third-party cartridges can lead to clogging or inconsistent
                  prints. Invest in manufacturer-recommended ink and toner to
                  maintain quality and prevent damage to your printer’s internal
                  components.
                </p>

                <h3>3. Avoid Overloading Paper</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/Paper-Overload.jpg"
                    alt="Paper Overload"
                    className="img-fluid rounded"
                  />
                </div>
                <p>
                  Always adhere to your printer’s recommended paper capacity.
                  Overloading can cause jams and damage the feeding mechanism.
                  Use high-quality paper designed for your printer model.
                </p>
                <div className="cta-buttons my-4">
                  <a href="/products" className="btn btn-orange me-3">
                    Explore Quality Supplies
                  </a>
                  <a href="/contact-us" className="btn btn-outline-dark">
                    Get Expert Advice
                  </a>
                </div>

                <h3>4. Update Printer Drivers</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/Update-Drivers.jpg"
                    alt="Update Drivers"
                    className="img-fluid rounded"
                  />
                </div>
                <p>
                  Outdated drivers can result in compatibility issues. Visit the
                  manufacturer’s website periodically to download and install
                  the latest drivers for your printer model. Enable auto-updates
                  if available.
                </p>

                <h3>5. Schedule Regular Servicing</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/printer-servicing.jpg"
                    alt="Printer Servicing"
                    className="img-fluid rounded"
                  />
                </div>
                <p>
                  Even well-maintained printers require professional servicing.
                  Schedule an annual check-up to ensure all components function
                  properly. This proactive step saves money in the long run.
                </p>

                <h3>Bonus Tips</h3>
                <div className="post-image my-3">
                  <img
                    src="/assets/img/printer-tips.jpg"
                    alt="Printer Tips"
                    className="img-fluid rounded"
                  />
                </div>
                <ul>
                  <li>
                    Turn off the printer when not in use to conserve energy and
                    reduce wear and tear.
                  </li>
                  <li>Store ink cartridges properly to prevent drying out.</li>
                  <li>
                    Run a nozzle check monthly to detect potential clogs early.
                  </li>
                </ul>
                <div className="cta-buttons my-4">
                  <a href="/contact-us" className="btn btn-danger">
                    Book a Professional Printer Check
                  </a>
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar Area */}
          <div className="col-lg-4">
            <div className="sidebar">
              {/* Editors Pick Section */}
              <div className="sidebar-section mb-5 p-4 rounded shadow-sm bg-light">
                <h4 className="section-title mb-4 text-center">
                  Editors Picks
                </h4>
                <ul className="list-unstyled">
                  <li className="editor-pick d-flex align-items-center mb-3 p-3 rounded hover-shadow">
                    <img
                      src="/assets/img/editors-pick.jpg"
                      alt="Editor Pick"
                      className="me-3 rounded-circle border"
                      width="70"
                    />
                    <div>
                      <h6 className="mb-1">Apple Planning Big Mac Redesign</h6>
                      <p className="text-muted small">Jan 5, 2024</p>
                    </div>
                  </li>
                  <li className="editor-pick d-flex align-items-center mb-3 p-3 rounded hover-shadow">
                    <img
                      src="/assets/img/editors-pick.jpg"
                      alt="Editor Pick"
                      className="me-3 rounded-circle border"
                      width="70"
                    />
                    <div>
                      <h6 className="mb-1">Quadcopters for Disabled Users</h6>
                      <p className="text-muted small">Jan 4, 2024</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Top Reviews Section */}
              <div className="sidebar-section p-4 rounded shadow-sm bg-light">
                <h4 className="section-title mb-4 text-center">Top Reviews</h4>
                <ul className="list-unstyled">
                  <li className="review d-flex align-items-center mb-3 p-3 rounded hover-shadow">
                    <img
                      src="/assets/img/editors-pick1.jpg"
                      alt="Review"
                      className="me-3 rounded border"
                      width="70"
                    />
                    <div>
                      <h6 className="mb-1">T-Mobile Wins 5G Race</h6>
                      <span className="badge bg-danger">9.1</span>
                    </div>
                  </li>
                  <li className="review d-flex align-items-center mb-3 p-3 rounded hover-shadow">
                    <img
                      src="/assets/img/editors-pick1.jpg"
                      alt="Review"
                      className="me-3 rounded border"
                      width="70"
                    />
                    <div>
                      <h6 className="mb-1">Samsung Galaxy S21</h6>
                      <span className="badge bg-warning">8.9</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
