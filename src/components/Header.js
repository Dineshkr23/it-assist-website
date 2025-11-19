import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png"; // Adjust path accordingly

const Header = () => {
  useEffect(() => {
    const select = (el, all = false) => {
      if (!el) return null;
      el = el.trim();
      return all
        ? [...document.querySelectorAll(el)]
        : document.querySelector(el);
    };

    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    const selectHeader = select("#header");
    const backtotop = select(".back-to-top");
    const navbar = select("#navbar");
    const mobileNavToggle = select(".mobile-nav-toggle");

    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader?.classList.add("header-scrolled");
      } else {
        selectHeader?.classList.remove("header-scrolled");
      }
    };

    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop?.classList.add("active");
      } else {
        backtotop?.classList.remove("active");
      }
    };

    const toggleMobileNav = (e) => {
      if (navbar) {
        navbar.classList.toggle("navbar-mobile");
      }
      e.target.classList.toggle("bi-list");
      e.target.classList.toggle("bi-x");
    };

    const dropdownToggle = (e) => {
      if (navbar?.classList.contains("navbar-mobile")) {
        e.preventDefault();
        e.target.nextElementSibling?.classList.toggle("dropdown-active");
      }
    };

    // **New Function: Close mobile nav when clicking a nav link**
    const closeMobileNav = () => {
      if (navbar?.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        mobileNavToggle?.classList.remove("bi-x");
        mobileNavToggle?.classList.add("bi-list");
      }
    };

    // Attach event listeners
    window.addEventListener("load", headerScrolled);
    window.addEventListener("scroll", headerScrolled);
    window.addEventListener("load", toggleBacktotop);
    window.addEventListener("scroll", toggleBacktotop);
    mobileNavToggle?.addEventListener("click", toggleMobileNav);
    select(".navbar .dropdown > a", true)?.forEach((dropdown) =>
      dropdown.addEventListener("click", dropdownToggle)
    );
    select(".navbar a", true)?.forEach((link) =>
      link.addEventListener("click", closeMobileNav)
    );

    // Cleanup on unmount
    return () => {
      window.removeEventListener("load", headerScrolled);
      window.removeEventListener("scroll", headerScrolled);
      window.removeEventListener("load", toggleBacktotop);
      window.removeEventListener("scroll", toggleBacktotop);
      mobileNavToggle?.removeEventListener("click", toggleMobileNav);
      select(".navbar .dropdown > a", true)?.forEach((dropdown) =>
        dropdown.removeEventListener("click", dropdownToggle)
      );
      select(".navbar a", true)?.forEach((link) =>
        link.removeEventListener("click", closeMobileNav)
      );
    };
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center flex-wrap">
        <Link to="/" className="logo me-auto">
          <img src={Logo} alt="IT Assist Experts" className="img-fluid" />
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/printer">
                IT Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contactus">
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div class="help">
          <a class="blue" style={{ paddingLeft: "25px", paddingRight: "10px" }}>
            Ask support
          </a>
          <a href="tel:(888) 830-1368" className="blueContact">
            (888) 830-1368
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
