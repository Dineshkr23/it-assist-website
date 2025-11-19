import React from 'react'
import Team1 from '../img/team/team-1.jpg'
import Team2 from '../img/team/team-2.jpg'
import Team3 from '../img/team/team-3.jpg'
import Team4 from '../img/team/team-4.jpg'


const Stories = () => {
  return (
    <>
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
    </>
  )
}

export default Stories