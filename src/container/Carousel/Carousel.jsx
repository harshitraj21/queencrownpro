import React from "react";

import "./Carousel.css";

const Carousel = () => (
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleCaptions"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="restaurantPic1.jpg"
          className="d-block w-100"
          alt="carouselPic1"
        />
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-info">Welcome to the Queen's Crown</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="restaurantPic2.jpg"
          className="d-block w-100"
          alt="carouselPic2"
        />
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-info">Where Taste Meets Tradition</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="restaurantPic3.jpg"
          className="d-block w-100"
          alt="carouselPic3"
        />
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-info">
            A Fusion of Taste and Elegance
          </button>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleCaptions"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
