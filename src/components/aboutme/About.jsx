import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // If needed
import './about.css';

const AboutSection = () => {
  return (
    <>
   <div className="heading">
      <h2
        style={{
          color: 'white',
          marginTop: '30px',
          borderBottom: '2px solid white',
          paddingBottom: '10px',
          marginLeft: '112px',
        }}
      >
        About Me
      </h2>
    </div>
    <div className="container">
      <section className="about">
        <div className="about-image">
          <img src="/images/about.avif" alt="About Image" />
        </div>
        <div className="about-content">
          <p>
            I'm a dedicated frontend developer who thrives on the excitement of learning.
            <br />
            With a burning passion for expanding my horizons, I eagerly embrace new challenges to refine my skills. <br />
            My guiding principle echoes, "It matters not how leisurely you progress, as long as you maintain your stride and never come to a halt. <br />
            " This philosophy propels me forward, urging me to keep learning, keep growing, and keep pushing the boundaries of what I can achieve. <br />
            Every day is a chance to add a new brushstroke to the masterpiece of my expertise, and I relish every moment of this artistic journey.
          </p>
          <a href="cv.pdf" className="download" download="cv.pdf">Download my cv</a>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutSection;
