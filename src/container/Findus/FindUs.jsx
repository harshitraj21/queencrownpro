import React from "react";
import { SubHeading } from "../../components";
import "./Findus.css";
const FindUs = () => (
  <div className="app_bg wrapper section_padding" id="contact">
    <div className="wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="wrapper_h1">Find Us</h1>
      <div>
        <p className="para1">
          A15, Ground Floor, Vishal Enclave, Main Najafgarh Road, Opposite Of
          Khanna Jewellers, Rajouri Garden, New Delhi, India
        </p>
        <p className="para2">Opening Hours</p>
        <p className="para1">Mon-Fri: 11:00 AM to 10:00 PM</p>
        <p className="para1">Sat-Sun: 10:00 AM to 1:00 AM</p>
        <p className="para1">Call us on- 1800-918-1870</p>
      </div>
      <a href="#newsletter">
        <button className="button_restaurant">Visit Us</button>
      </a>
    </div>
    <div className="app_findus_img">
      <img src="menuPic2.jpg" alt="Pic" />
    </div>
  </div>
);

export default FindUs;
