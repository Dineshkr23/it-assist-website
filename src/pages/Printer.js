import React from 'react'
import { useNavigate } from 'react-router-dom';
import UsImage from '../img/why1.webp';
import Skills from '../img/skills1.webp'
import Team1 from '../img/team/team-1.jpg'
import Team2 from '../img/team/team-2.jpg'
import Team3 from '../img/team/team-3.jpg'
import Team4 from '../img/team/team-4.jpg'
import Printer1 from '../img/clients/printer.png'
import Printer2 from '../img/clients/inkjet.png'
import Printer3 from '../img/clients/multifunction-printer.png'
import Printer4 from '../img/clients/3d-printing.png'
import Printer5 from '../img/clients/repair.png'

const Printer = () => {

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here you can add form validation and submission logic if needed
    navigate('/thankyou'); // Redirect to the "Thank You" page
  };


  return (
    <>
    <section id="hero" className="d-flex align-items-center">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h1>Expert Laptop & Desktop Support Services</h1>
        <h2>Complete IT Solutions: Repair, Setup, Maintenance & More</h2>
        
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="tel:+18888301368" className="btn-get-started scrollto">
            Call Now
          </a>
        </div>
      </div>
      {/* Uncomment and update the image path if you want to add an image */}
      {/* <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
        <img src="/path/to/printer-repair-image.jpg" className="img-fluid animated" alt="Printer Repair Services" />
      </div> */}
    </div>
  </div>
</section>


<section id="about" className="about">
  <div className="container" data-aos="fade-up">
    <div className="row content">
      <div className="col-lg-8">
        <h3>Why Choose IT Assist Experts for Your Laptop & Desktop Support?</h3>
        <ul>
          <li>
            <i className="ri-check-double-line"></i> 
            <strong>Expert Laptop & Desktop Repair:</strong> Fast and reliable repair services for all major brands. We handle device issues, screen replacements, battery problems, keyboard repairs, and component upgrades with precision.
          </li>
          <li>
            <i className="ri-check-double-line"></i> 
            <strong>Comprehensive IT Services:</strong> Beyond laptops and desktops, we provide printer support, network setup, malware elimination, data recovery, program installation, and system optimization - all your IT needs in one place.
          </li>
          <li>
            <i className="ri-check-double-line"></i> 
            <strong>Certified Technicians:</strong> Our experienced professionals are certified in handling all major computer brands (Dell, HP, Lenovo, Apple, ASUS, Acer, and more) with accurate diagnoses and effective solutions.
          </li>
          <li>
            <i className="ri-check-double-line"></i> 
            <strong>Affordable & Transparent Pricing:</strong> High-quality services at competitive prices with no hidden fees. We provide upfront estimates and ensure value for money without compromising on results.
          </li>
          <li>
            <i className="ri-check-double-line"></i> 
            <strong>Preventive Maintenance Plans:</strong> Ongoing maintenance services to keep your devices in top condition, prevent unexpected breakdowns, and extend the lifespan of your technology investments.
          </li>
        </ul>
      </div>
      <div className="col-lg-4 pt-4 pt-lg-0 d-flex align-items-stretch forms">
        <form onSubmit={handleSubmit} id="contactForm" className="php-email-form">
          <div className="row">
            <h4>Get IT Support Today!</h4>
            <p>Starting at just $19/month</p>
          </div>
          <div className="inputBox form-group">
            <input type="text" id="name" placeholder="Your Name..." required />
          </div>
          <div className="inputBox form-group">
            <input type="email" id="emailid" placeholder="Your Email..." required />
          </div>
          <div className="inputBox form-group">
            <input type="tel" id="phone" placeholder="Your Phone..." required />
          </div>
          <div className="inputBox">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


<section id="clients" className="clients section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Comprehensive IT Support for All Your Technology Needs!</h2>
    </div>
    <div className="row" data-aos="zoom-in">
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-laptop" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Laptop Repair</p>
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-tv" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Desktop Support</p>
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-printer" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Printer Services</p>
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-shield-check" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Malware Elimination</p>
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-wifi" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Network Setup</p>
      </div>
      <div className="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center justify-content-center">
        <i className="bi bi-hdd" style={{fontSize: '48px', color: '#2563eb', marginBottom: '10px'}}></i>
        <p>Data Recovery</p>
      </div>
    </div>
  </div>
</section>


    <section id="services" className="services section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Why Choose Us for IT Support?</h2>
    </div>
    <div className="row">
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div className="icon-box">
          <i className="bi bi-laptop" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
          <h4><a href="">Certified IT Experts</a></h4>
          <p>Our dedicated team of certified technicians ensures reliable repairs and support for all major laptop, desktop, and printer brands with years of experience.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        <div className="icon-box">
          <i className="bi bi-tools" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
          <h4><a href="">Advanced Diagnostic Tools</a></h4>
          <p>We use state-of-the-art diagnostic tools and software to identify and resolve computer and printer issues quickly and effectively, ensuring optimal performance.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
        <div className="icon-box">
          <i className="bi bi-gear" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
          <h4><a href="">Preventive Maintenance Plans</a></h4>
          <p>Regular maintenance plans to extend the life of your laptops, desktops, and printers, preventing unexpected breakdowns and keeping your work uninterrupted.</p>
        </div>
      </div>
      <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
        <div className="icon-box">
          <i className="bi bi-headset" style={{fontSize: '48px', color: '#2563eb', marginBottom: '20px'}}></i>
          <h4><a href="">Quick On-Site & Remote Support</a></h4>
          <p>Whether it's on-site service or remote problem-solving, we respond promptly to minimize disruptions and get your devices back online quickly.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="pricing" className="pricing">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Our Pricing</h2>
      <p>IT Assist Experts offers affordable and flexible IT support service plans to cater to all your home and business technology needs. Choose the plan that works best for you and enjoy reliable service from our certified professionals.</p>
    </div>
    <div className="row">
      <div className="pricing-title">
        <h2>Choose a plan that best suits your needs</h2>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="box">
          <h3>Basic IT Support</h3>
          <h4><sup>$</sup>19<span> per month</span></h4>
          <ul>
            <li><i className="bx bx-check"></i><b>Diagnostics & Repairs:</b><br />Basic problem resolution and repair for laptops, desktops, and printers.</li>
            <li><i className="bx bx-check"></i><b>Performance Checkups:</b><br />Regular performance checks to keep your devices running smoothly.</li>
            <li><i className="bx bx-check"></i><b>Unlimited Support:</b><br />Phone, email, and chat assistance for your IT queries.</li>
          </ul>
          <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
        </div>
      </div>
      <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
        <div className="box featured">
          <h3>Professional IT Support</h3>
          <h4><sup>$</sup>29.99<span> per month</span></h4>
          <ul>
            <li><i className="bx bx-check"></i><b>Includes all Basic features</b></li>
            <li><i className="bx bx-check"></i><b>Advanced Repairs:</b><br />Support for complex device and software issues on laptops, desktops, and printers.</li>
            <li><i className="bx bx-check"></i><b>Preventive Maintenance:</b><br />Regular system optimization, cleaning, and updates to prevent issues before they occur.</li>
            <li><i className="bx bx-check"></i><b>Priority Support:</b><br />Faster response times for your service requests.</li>
          </ul>
          <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
        </div>
      </div>
      <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
        <div className="box">
          <h3>Enterprise IT Support</h3>
          <h4><sup>$</sup>49.99<span> per month</span></h4>
          <ul>
            <li><i className="bx bx-check"></i><b>Includes all Professional features</b></li>
            <li><i className="bx bx-check"></i><b>On-Site Support:</b><br />Dedicated on-site service for large offices or businesses.</li>
            <li><i className="bx bx-check"></i><b>Device Management:</b><br />Comprehensive management of multiple laptops, desktops, and printers in your business.</li>
            <li><i className="bx bx-check"></i><b>Customized Solutions:</b><br />Tailored service plans to meet the specific IT needs of your business.</li>
          </ul>
          <a href="#" className="subscribe-popup-button buy-btn">Subscribe</a>
        </div>
      </div>
    </div>
  </div>
</section>


    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Find out why our customers rate us 5 stars!</h2>
          <p>400k+ Satisfied Customers</p>
          <div className="row">
            <div className="col-lg-4"><img src="assets/img/nps-home.png" className="img-fluid" alt="" /></div>
            <div className="col-lg-6 mt-5">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div className="member-info">
                  <p className="text-dark">"Outstanding experience with your tech team! Your dedication and extensive efforts to resolve our computer issue truly stood out. We're deeply grateful for a company that goes above and beyond to ensure their clients are fully satisfied and operational. A massive thank you!"</p>
                  <h4 className="mt-2">Robert D. James</h4>
                  <span>Mapleton, MN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <p>“Partnering with Comp Care Takers support transformed our tech landscape. Their responsive team and unparalleled expertise have propelled our efficiency, ensuring smooth operations and peace of mind. Truly the best IT decision we’ve made!.”</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Janet Renolds</h4>
                <p>“Our company has been fortunate to have the excellent services of Comp Care Takers. The team equipped our company with the best tools and resources to be protected and run successfully without interruptions in our daily processes. They are there when we need them the most. Thank you!”</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="section-title">
            <p>400k+ Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>

    <section id="why-us" className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
        <div className="content">
          <h3>Why Choose IT Assist Experts for Your Technology Needs?</h3>
          <p>Laptops, desktops, and printers are essential tools for both home and office, but issues like device failures, software problems, connectivity errors, and protection threats can disrupt your workflow. That's where IT Assist Experts come in!</p>
          <p>Here's what we offer:</p>
          <ul>
            <li>Expert problem-solving and repair for all major laptop, desktop, and printer brands and models.</li>
            <li>Comprehensive IT services including malware elimination, data recovery, network setup, and program installation.</li>
            <li>On-site and remote support for quick and efficient service, minimizing your downtime.</li>
            <li>Regular maintenance to ensure peak device performance and longevity.</li>
            <li>Guidance on best practices for device usage, protection, and care.</li>
            <li>Customized solutions for businesses with multiple devices or advanced IT needs.</li>
          </ul>
        </div>
      </div>
      <div
        className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
        style={{ backgroundImage: `url(${UsImage})` }}
        data-aos="zoom-in"
        data-aos-delay="150"
      >&nbsp;</div>
    </div>
  </div>
</section>


<section id="skills" className="skills">
  <div className="container" data-aos="fade-up">

    <div className="row">
      <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
        <img src={Skills} className="img-fluid" alt="Printer Repair Services" />
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
        <h3>Our Expertise in IT Support:</h3>
        <p>
          Laptops, desktops, and printers are integral to modern work environments, yet maintaining them can be a challenge. With IT Assist Experts, you gain access to industry-leading expertise to ensure your technology performs at its best.
        </p>
        <p>Here's how we can assist:</p>
        <ul>
          <li>Comprehensive repair services for laptops, desktops, and printers - all major brands supported.</li>
          <li>Act as your primary IT assistance for problem resolution, maintenance, and optimization.</li>
          <li>Additional services including malware elimination, data recovery, network setup, and program installation.</li>
          <li>Collaborate seamlessly with your existing IT team or service providers.</li>
          <li>Provide Tier 1 and Tier 2 IT support solutions for your business needs.</li>
          <li>Deliver tailored maintenance plans for businesses with multiple devices or advanced IT setups.</li>
        </ul>
      </div>
    </div>

  </div>
</section>


    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Our Techies Stories</h2>
          
        </div>

        <div class="row">
          <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <img src={Team1} class="img-fluid" alt="" />
              <h4><a href="">Ethan Walker</a></h4>
               {/* <p>Expert IT professionals committed solely to your business, ensuring seamless operations, personalized solutions, and rapid tech issue resolutions</p> */}
               
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <img src={Team2} class="img-fluid" alt="" />
              <h4><a href="">Natalie Mitchell</a></h4>
              {/* <p>Advanced, forward-thinking solutions harnessing the latest technological innovations, driving efficiency, and setting industry standards for tomorrow’s challenges.</p> */}
            
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <img src={Team3} class="img-fluid" alt="" />
              <h4><a href="">Brandon Hughes</a></h4>
               {/* <p>Streamlined, efficient processes powered by intelligent software, optimizing operations, reducing manual intervention, and ensuring consistent, high-quality outcomes.</p> */}
             
            </div>
          </div>

          <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <img src={Team4} class="img-fluid" alt="" />
              <h4><a href="">Natalie Mitchell</a></h4>
             {/* <p>Instantaneous support from afar, ensuring rapid solutions, minimizing disruptions, and maintaining peak performance, all at the click of a button.</p> */}
            
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="faq" className="faq section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div className="faq-list">
      <ul>
        <li data-aos="fade-up" data-aos-delay="100">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">
            What types of devices do you support? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
            <p>We support all major laptop and desktop brands, including Dell, HP, Lenovo, Apple, ASUS, Acer, Microsoft, and more. We also provide printer support for all major brands. Whether it's device repair, software issues, or network setup, we've got you covered.</p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="200">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
            Do you offer on-site IT support services? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
            <p>Yes, we provide on-site IT support services for both homes and businesses. Our technicians can visit your location to diagnose and fix laptop, desktop, and printer issues quickly and efficiently.</p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
            How long does a typical repair take? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
            <p>Most laptop, desktop, and printer repairs are completed within 24-48 hours. However, the timeframe may vary depending on the complexity of the issue and the availability of replacement parts. Remote support for software issues is typically resolved within hours.</p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="400">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
            What is the cost of IT support services? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
            <p>The cost of service depends on the issue and device type. We provide an initial diagnosis and offer transparent pricing before proceeding with any repairs. Our monthly support plans start at $19/month for comprehensive IT assistance.</p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="500">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">
            Do you provide regular maintenance services? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
            <p>Yes, we offer preventive maintenance plans to keep your laptops, desktops, and printers running smoothly and prevent future issues. This includes system optimization, cleaning, updates, protection checks, and checking for worn-out parts.</p>
          </div>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <i className="bx bx-help-circle icon-help"></i> 
          <a data-bs-toggle="collapse" data-bs-target="#faq-list-6" className="collapsed">
            Can you help with network and connectivity issues? 
            <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i>
          </a>
          <div id="faq-list-6" className="collapse" data-bs-parent=".faq-list">
            <p>Absolutely. We specialize in resolving network and connection issues, including Wi-Fi setup, network configuration, printer sharing, driver conflicts, and network connection problems for seamless operation across all your devices.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

    </>
  )
}

export default Printer