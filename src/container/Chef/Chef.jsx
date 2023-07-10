import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app_chef app_bg section_padding">
    <div className="app_chef_img">
      <img src="chef.jpg" alt="chef" />
    </div>
    <div className="app_chef_info">
      <SubHeading title="Chef's Word" />
      <h1 className="wrapper_h1">What we believe in</h1>
      <div className="app_chef_content">
        <div className="app_chef_content_quote">
          <img src="quote.png" alt="quote" />
          <p className="para1" style={{ color: "#dcca87" }}>
            At our restaurant, we believe that food is an expression of love and
            passion.
          </p>
        </div>
        <p className="para1" style={{ color: "#dcca87" }}>
          Every dish that leaves our kitchen is a reflection of our commitment
          to quality and creativity. From the first bite to the last, our goal
          is to create an unforgettable dining experience for you. In our
          kitchen, we blend tradition and innovation to create culinary
          masterpieces that excite the senses.
        </p>
      </div>
      <div className="app_chef_name">
        <p className="para2">Steven Lee</p>
        <p className="para2">Chef and Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
