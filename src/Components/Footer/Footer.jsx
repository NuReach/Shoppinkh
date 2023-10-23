import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import FooterMid from "./FooterMid";

function Footer() {
  return (
    <div>
      <div className=" ">
        <FooterTop />
        <FooterMid />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Footer;
