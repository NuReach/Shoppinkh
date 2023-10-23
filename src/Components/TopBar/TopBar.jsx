import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./TopBar.css";
function TopBar() {
  const properties = {
    prevArrow: <button></button>,
    nextArrow: <button></button>,
  };
  return (
    <Fade {...properties} scale={0.3} duration={4200} transitionDuration={900}>
      <div className="each-slide-effect">
        <div>Top</div>
      </div>
      <div className="each-slide-effect">
        <div>Middle</div>
      </div>
      <div className="each-slide-effect">
        <div>Last</div>
      </div>
    </Fade>
  );
}

export default TopBar;
