import React from "react";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header_app wrapper app_bg section_padding" id="#home">
        <div className="wrapper_info">
          <SubHeading title="A Feast for the Senses" />
          <h1 className="wrapper_h1">Savor the Flavor</h1>
          <p className="para1" style={{ margin: "2rem 0" }}>
            Experience the epitome of hospitality at our restaurant, where our
            dedicated team is committed to ensuring your dining experience is
            nothing short of extraordinary.
          </p>
          <a href="#menu">
            <button className="button_restaurant">Explore Menu</button>
          </a>
        </div>
        <div className="wrapper_img">
          <img src="food1.jpg" alt="welcome" />
        </div>
      </div>
    </>
  );
};

export default Header;
