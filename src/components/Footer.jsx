import React from 'react';
import './Footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>ABOUT US</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolorem veniam deserunt quisquam eius ad hic maxime
              dicta ipsum nemo itaque necessitatibus quas nobis, illum
              voluptate, pariatur recusandae alias harum!
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-4 mb-4">
            <h5>NEWSLETTER</h5>
            <p>Stay updated with our latest trends</p>
            <form className="d-flex">
              <input
                type="text"
                placeholder="Email ID"
                className="form-control me-2 placeholder-grey-600"
                required
              />
              <button type="submit" className="btn btn-warning">
                →
              </button>
            </form>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-4 mb-4">
            <h5>FOLLOW US</h5>
            <FontAwesomeIcon
                        icon={faInstagram}
                        className="me-3 cursor-pointer hover:text-pink-500"
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="me-3 cursor-pointer hover:text-blue-500"
                      />
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="me-3 cursor-pointer hover:text-blue-700"
                      />
                      <FontAwesomeIcon
                        icon={faSquareLinkedin}
                        className="me-3 cursor-pointer hover:text-blue-700"
                      />
                      
            <p>Let us be social</p>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          Copyright © 2025 All rights reserved | This website is made with{' '}
          <span className="text-danger">❤</span> by Chippymol K Binu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
