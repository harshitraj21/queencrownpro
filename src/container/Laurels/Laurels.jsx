import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../components";
import data_awards from "./data_awards";

const Award = ({ award: { url, title, subtitle } }) => (
  <div className="app_awards_laurels">
    <img src={url} alt="awards1" />
    <div className="app_awards_laurels_info">
      <p className="para2">{title}</p>
      <p className="para1">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app_awards app_bg wrapper section_padding" id="rewards">
    <div className="app_awards_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="wrapper_h1">Our Laurels</h1>
      <div className="app_awards_content">
        {data_awards.awards.map((award) => (
          <Award key={award.title} award={award} />
        ))}
      </div>
    </div>
    <div className="app_awards_img">
      <img src="menuPic3.jpg" alt="awards" />
    </div>
  </div>
);

export default Laurels;
