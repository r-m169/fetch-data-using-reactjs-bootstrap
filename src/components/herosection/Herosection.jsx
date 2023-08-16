import React from 'react';
import './herosection.css'; // Import your CSS file

const Herosection = () => {
  return (
    <div className="container-fluid">
  <div className="row align-items-center">
    <div className="col-md-6 job-title" style={{ marginLeft: '110px' }}>
      <h5>Welcome to My Portfolio</h5>
      <h2><span className="typing-animation">Hello, I'm Rodayna</span></h2>
      <p>
        <span className="typing-animation">
          I specialize in developing the frontend part of websites.<br />
          I take great pride in my work and constantly try to improve my skills.
        </span>
      </p>
      <a href="about" className="btn">More about me</a>
    </div>
    <div className="col-md-4">
      <img src="/images/me.png" alt="Image" className="img-fluid" />
    </div>
  </div>
</div>
  );
};

export default Herosection;
