import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            excepturi eveniet, consequatur harum laudantium ea rem corporis cum.
            Consectetur, maiores.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>(+91) 817 - 994 - 9261</li>
                <li>contact@smarthop.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copryright 2024 ©️ Smarthop.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
