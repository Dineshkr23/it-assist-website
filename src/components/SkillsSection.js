import React from 'react';
import Skills from '../img/skills.png'

const SkillsSection = () => {
  return (
    <section id="skills" class="skills">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={Skills} class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>For Service Partners:</h3>
            <p class="">
              The technological landscape of retirement communities is evolving rapidly, a shift further propelled by recent global events. Companies specializing in managed IT services, IT development, reporting, cyber security, and more are facing the challenge of upholding premier SLAs and customer experiences at competitive rates.
            </p>
            <p>Here's how we can assist:</p>
            <li>Broaden your offerings by including resident tech assistance.</li>
            <li>Act as the primary point of contact for your managed services portfolio.</li>
            <li>Collaborate with various service providers, such as Comcast and app developers.</li>
            <li>Integrate smoothly with your team, offering tier 1 and/or tier 2 solutions for your clientele.</li>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
