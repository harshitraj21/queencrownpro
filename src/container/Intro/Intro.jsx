import React from "react";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const videoRef = React.useRef();

  return (
    <>
      <div className="app_video_title app_bg">Short Video from our side</div>
      <div className="app_video app_bg">
        <video src="meal.mp4" ref={videoRef} loop controls={false} muted />
        <div className="app_video_overlay center_flex">
          <div
            className="app_video_overlay_circle center_flex"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                videoRef.current.pause();
              } else {
                videoRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseCircle color="#fff" fontSize={120} />
            ) : (
              <BsPlayCircle color="#fff" fontSize={120} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
