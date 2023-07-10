import React from "react";
import "./Newsletter.css";
import { SubHeading } from "../../components";

const Newsletter = () => {
  return (
    <div className="app_newsletter app_bg" id="newsletter">
      <div className="app_newsletter_heading">
        <SubHeading title="Newsletter" />
        <h1 className="wrapper_h1">Subscribe to our Newsletter</h1>
        <p className="para1 app_newsletter_heading_info">
          Never miss out latest updates and crazy deals
        </p>
      </div>
      <div className="app_newsletter_input center_flex">
        <input type="email" placeholder="Enter your Email Address" />
        <button className="button_restaurant" type="button">
          Subscribe
        </button>
      </div>
      <div>
        <p className="para1 app_newsletter_heading_info">
          You will get all the updates through the emails after subscribing
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
