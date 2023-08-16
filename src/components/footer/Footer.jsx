import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/r-m169" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rodayna-mohamed-b3113222b/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="iconss"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/rodayna.mohamed.3386" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
