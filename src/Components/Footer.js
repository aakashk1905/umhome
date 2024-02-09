import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="footer-inner">
        <div className="footer-links">
          <div>Contact us at</div>
          <div>
            <a href="tel:+917988800474">+91-7988800474</a>
          </div>
          <div>
            <a href="mailto:upskillmafia@gmail.com">Upskillmafia@gmail.com</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-links-inner">Free UI/UX Resources</div>
          <div className="footer-links-inner">Peer Learning</div>
          <div className="footer-links-inner">Community</div>
          <div className="footer-links-inner">Certification</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-inner">Hackathons</div>
          <div className="footer-links-inner">Daily Challenges</div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-copy">
        Copyright © 2023 upskillmafia. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
