import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./projects.css";
import Footer from "../footer/Footer";

const ProjectsSection = () => {
  return (
    <>
      <div className="heading">
        <h2
          style={{
            color: "white",
            marginTop: "-2%",
            borderBottom: "2px solid white",
            paddingBottom: "10px",
            marginLeft: "112px",
          }}
        >
          Projects
        </h2>
      </div>
      <div className="container">
        <div className="row" style={{ flexWrap: "nowrap" }}>
          <div className="card" style={{ width: "20rem", marginRight: "20px" }}>
            <div className="card1" style={{ width: "18rem" }}>
              <img src="/images/flipcard.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CHECK & FLIP</h5>
                <p className="card-text">
                  Check the strenght of your passward and flip to get the login page or go back to the sign up page
                </p>
                <a href="https://helpful-taiyaki-83e2e9.netlify.app/" className="btn">
                  visit
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem", marginRight: "20px" }}>
            <div className="card1" style={{ width: "18rem" }}>
              <img src="/images/stopwatch.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">STOPWATCH</h5>
                <p className="card-text">
                    Emulating real stopwatch using html5 , css3 and js
                </p>
                <a href="https://stopwatch-miniproject.netlify.app/" className="btn ">
                visit
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <div className="card1" style={{ width: "18rem" }}>
              <img src="/images/boot.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CAPITAL SHOP</h5>
                <p className="card-text">
                  Capital shop is a e-commerece website (frontend only)
                  using html5 , css3 , bootstrap5
                </p>
                <a href="#" className="btn ">
                visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProjectsSection;
