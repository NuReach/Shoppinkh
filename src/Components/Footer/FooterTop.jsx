import React from "react";

function FooterTop() {
  return (
    <div className="border-gray-300 border-y-2 flex flex-col justify-center items-center py-10 lg:flex lg:flex-row lg:px-20  lg:justify-between ">
      <div className="1col flex flex-col justify-center items-center lg:flex lg:flex-col  lg:items-start lg:justify-start lg:h-44">
        <h5 className="font-bold ">ABOUT US</h5>
        <div className=" flex flex-col justify-center items-center lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-3 lg:pt-3 ">
          <p>Our Story</p>
          <p>Find Our Store and shop</p>
          <p>Work WIth Us</p>
          <p>Work WIth Us</p>
        </div>
      </div>
      <div className="2col flex flex-col justify-center items-center  lg:flex lg:flex-col lg:items-start lg:justify-start lg:h-44">
        <h5 className="font-bold">CONTACT & HELP</h5>
        <div className=" flex flex-col justify-center items-center  lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-3 lg:pt-3">
          <p>Our Story</p>
          <p>Find Our Store</p>
          <p>Work WIth Us and do </p>
        </div>
      </div>
      <div className="3col flex flex-col justify-center items-center  lg:flex lg:flex-col lg:items-start  lg:justify-start lg:h-44">
        <h5 className="font-bold">LET WORK TOGETHER </h5>
        <div className=" flex flex-col justify-center items-center  lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-3 lg:pt-3">
          <p>Our Story</p>
          <p>Find Our Store</p>
          <p>Work WIth Us</p>
        </div>
      </div>
      <div className="4col flex flex-col justify-center items-center  lg:flex lg:flex-col lg:items-start lg:justify-start lg:h-44">
        <h5 className="font-bold">YOUR ACCOUNT </h5>
        <div className=" flex flex-col justify-center items-center  lg:flex lg:flex-col lg:justify-start lg:items-start lg:space-y-3 lg:pt-3">
          <p>Our Story</p>
          <p>Find Our Store</p>
          <p>Work WIth Us</p>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
