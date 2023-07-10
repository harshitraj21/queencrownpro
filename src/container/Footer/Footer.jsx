import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import "./Footer.css";

const Footer = () => (
  <div className="app_footer">
    <div className="app_footer_queens_logo">
      <img src="QUEENS0.png" alt="" />
      <div className="app_footer_toll">
        <p className="app_footer_links">Toll Free No.</p>
        <p className="app_footer_links">1800-198-1800</p>
      </div>
    </div>
    <div className="app_footer_info">
      <div className="app_footer_about">
        <h1 className="app_footer_h1">About</h1>
        <p className="app_footer_links">Blog</p>
        <p className="app_footer_links">Invester Relations</p>
        <p className="app_footer_links">Report Fraud</p>
        <p className="app_footer_links">Contact Us</p>
      </div>
      <div className="app_footer_Queenverse">
        <h1 className="app_footer_h1">Queenverse</h1>
        <p className="app_footer_links">Queen's Crown</p>
        <p className="app_footer_links">Feeding India</p>
        <p className="app_footer_links">Queenland</p>
      </div>
      <div className="app_footer_policies">
        <h1 className="app_footer_h1">Our Policies</h1>
        <p className="app_footer_links">Privacy</p>
        <p className="app_footer_links">Terms & Conditions\</p>
        <p className="app_footer_links">FAQs</p>
      </div>
    </div>
    <div className="app_footer_store_follow">
      <img src="store_logo.png" alt="store" />
      <div className="app_footer_followUs">
        <h1 className="app_footer_h1">Follow Us</h1>
        <div className="app_footer_logo_icons">
          <AiOutlineFacebook
            className="social_media_icons_blue"
            onClick={() => window.open("https://www.facebook.com/")}
          />
          <AiOutlineInstagram
            className="social_media_icons_red"
            onClick={() => window.open("https://www.instagram.com/")}
          />
          <RxTwitterLogo
            className="social_media_icons_blue"
            onClick={() => window.open("https://www.twitter.com/")}
          />
          <AiOutlineLinkedin
            className="social_media_icons_blue"
            onClick={() => window.open("https://www.linkedin.com/")}
          />
          <AiOutlineYoutube
            className="social_media_icons_red"
            onClick={() => window.open("https://www.youtube.com/")}
          />
        </div>
      </div>
    </div>
    <div className="app_footer_divider"></div>
    <div className="app_footer_end">
      <p className="app_footer_links">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies.
      </p>
      <p className="app_footer_links">
        All trademarks are properties of their respective owners. 2008-2023
        @Queen's Crown
        <sup>TM</sup> Ltd.
      </p>
      <p className="app_footer_links">All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
