import React from "react";

import "./SpecialMenu.css";
import { MenuItem, SubHeading } from "../../components";
import data from "./data";

const SpecialMenu = () => (
  <div className="menu_app app_bg section_padding center_flex" id="menu">
    <div className="menu_app_title">
      <SubHeading title="Our Specialities" />
      <h1 className="wrapper_h1">Culinary Extravaganza</h1>
    </div>
    <div className="menu_app_menuList">
      <div className="menu_app_menuList_meals center_flex">
        <p className="menu_app_menuList_menu_heading">Meals</p>
        <div className="menu_app_menuList_menu_info">
          {data.meals.map((meal, index) => (
            <MenuItem
              key={meal.title + index}
              title={meal.title}
              price={meal.price}
              tags={meal.tags}
            />
          ))}
        </div>
      </div>
      <div className="menu_app_pics">
        <img src="menuPic.jpg" alt="menuPic" />
      </div>
      <div className="menu_app_menuList_drinks center_flex">
        <p className="menu_app_menuList_menu_heading">Drinks</p>
        <div className="menu_app_menuList_menu_info">
          {data.drinks.map((drink, index) => (
            <MenuItem
              key={drink.title + index}
              title={drink.title}
              price={drink.price}
              tags={drink.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 14 }}>
      <a href="#contact">
        <button className="button_restaurant" type="button">
          Contact Us to order
        </button>
      </a>
    </div>
  </div>
);

export default SpecialMenu;
