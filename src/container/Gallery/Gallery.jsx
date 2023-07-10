import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import data_gallery from "./data_gallery";

function Gallery(props) {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const GalleryImg = ({ image: { url } }) => (
    <div className="app_gallery_images_container_card center_flex">
      <img src={url} alt="image_gallery" />
      <BsInstagram className="app_gallery_img_icon" />
    </div>
  );

  return (
    <div className="app_gallery app_bg center_flex">
      <div className="app_gallery_text">
        <SubHeading title="Instagram" />
        <h1 className="wrapper_h1">Photo Gallery</h1>
        <p className="para2" style={{ marginTop: "2rem" }}>
          Indulge your senses in our exquisite gallery of culinary masterpieces.
        </p>
        <a href="https://www.instagram.com">
          <button className="button_restaurant">View More</button>
        </a>
      </div>

      <div className="app_gallery_images">
        <div className="app_gallery_images_container" ref={scrollRef}>
          {data_gallery.images.map((image, index) => (
            <GalleryImg key={index} url={image.url} image={image} />
          ))}
        </div>
        <div className="app_gallery_arrows">
          <BsArrowLeftShort
            className="app_gallery_arrow_icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="app_gallery_arrow_icon"
            onClick={() => scroll()}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
