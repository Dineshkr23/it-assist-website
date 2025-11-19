import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    emailid: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted", formData);

    // Simulate form submission logic here (e.g., sending data to a server)

    navigate("/thankyou");
  };

  return (
    <form onSubmit={handleSubmit} id="contactForm" className="php-email-form">
      <div className="row">
        <h4>Get Unlimited IT Assist</h4>
        <p>for as little as $19/month</p>
      </div>
      <div className="inputBox form-group">
        <input
          type="text"
          id="name"
          placeholder="Your name...."
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputBox form-group">
        <input
          type="email"
          id="emailid"
          placeholder="Your Email....."
          value={formData.emailid}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputBox form-group">
        <input
          type="tel"
          id="phone"
          placeholder="Your Phone..."
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="inputBox">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
