import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { AiFillCloseSquare } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="nav_app">
      <div className="nav_app_logo">
        <img src={"QUEENS0.png"} alt="queen" />
      </div>
      <ul className="nav_app_links">
        <li>
          <a className="para2" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="para2" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="para2" href="#menu">
            Menu
          </a>
        </li>
        <li>
          <a className="para2" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="para2" href="#rewards">
            Rewards
          </a>
        </li>
      </ul>
      <div className="nav_app_order">
        <a href="#order" className="para2">
          Order Online
        </a>
        <div />
        <a href="#Book" className="para2">
          Book the Table
        </a>
      </div>
      <div className="nav_app_small">
        <BiRestaurant
          className="nav_app_small_menu"
          color="#dcca87"
          fontSize={35}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="nav_app_small_open">
            <AiFillCloseSquare
              fontSize={35}
              className="close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="nav_app_small_open_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#rewards" onClick={() => setToggleMenu(false)}>
                  Rewards
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
