import React from 'react'
import './footer.css'
import { Logo } from '../assets';
import { Link } from 'react-router-dom';
import About from './About';

function Footer() {
  return (
    <footer className="footer-section">
    <div className="footer-top" >
      <div className="container" >
        <div className="row" >
          <div className="col-lg-3 col-md-6 col-sm-6" >
            <div className="widget company-intro-widget" >
              <a href="index.html" className="site-logo"><img src={Logo} alt="logo" style={{borderRadius: "100%"}}/></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6" >
            <div className="widget course-links-widget" >
              <h5 className="widget-title">Company</h5>
              <ul className="courses-link-list">
                <li><Link to="/about"><i className="fas fa-long-arrow-alt-right"></i>About Us</Link></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Collections</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Why Us</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Privacy Policy</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget newsletter-widget">
              <h5 className="widget-title">Get in Touch</h5>
              <ul className="courses-link-list">
                <li style={{display: "flex"}}><a href="#"><i className="fa-brands fa-instagram fa-shake fa-2xs" style={{ color: "#ee70ff", fontSize: "2ex"}}></i>Instagram</a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin fa-shake" style={{ color: "#2259b9", fontSize: "2ex"}}></i>LinkedIn</a></li>
                <li><a href="#"><i className="fa-brands fa-whatsapp fa-shake" style={{ color: "#00ad5c" }}></i>WhatsApp</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Privacy Policy</a></li>
                <li><a href="#"><i className="fas fa-long-arrow-alt-right"></i>Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copy-right-text">© 2023 <a href="https://codepen.io/anupkumar92">Cronus</a> All Rights Reserved.</span>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;
