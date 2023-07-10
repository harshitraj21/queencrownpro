import React from "react";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="about_app app_bg center_flex section_padding " id="about">
    <div className="about_app_info center_flex ">
      <div className="about_app_info_about">
        <h1 className="wrapper_h1">About Us</h1>
        <img src="spoon.png" alt="spoon" />
        <p className="para1">
          Our restaurant is a haven for food enthusiasts, offering a delightful
          dining experience that tantalizes the taste buds and leaves a lasting
          impression. Here, the culinary excellence meets warm hospitality.
        </p>
      </div>

      <div className="about_app_pic center_flex">
        <img src="aboutPic.jpg" alt="about pic" />
      </div>

      <div className="about_app_info_history">
        <h1 className="wrapper_h1">History</h1>
        <img src="spoon.png" alt="spoon" />
        <p className="para1">
          Established in 2009, "Queen's Crown" has a rich and captivating
          history that has shaped it into the culinary gem it is today. Our
          journey is filled with passion, dedication, and a commitment to
          exceptional food.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
