import { Carousel } from "flowbite-react";
import React from "react";
function Slider() {
  return (
    <div className="h-96">
      <Carousel leftControl rightControl indicators>
        <img alt="..." src="" />
        <img alt="..." src="" />
        <img alt="..." src="" />
        <img alt="..." src="" />
      </Carousel>
    </div>
  );
}

export default Slider;
