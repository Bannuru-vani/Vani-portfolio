import React from "react";
import Hero from "./Hero";
import themechange from "../images/Icon Button.png";
function Header() {
  return (
    <>
      <div className="flex justify-between item-center mx-auto p-4 bg-black">
        <div>
          <h3 className="font-bold text-2xl text-white">Vani</h3>
        </div>
        <div className="hidden flex flex-col items-center space-x-6 md:flex-row space-y-0 md:flex ">
          <a className="font-small text-white hover:text-red-300" href="">
            About
          </a>
          <a className="font-small text-white hover:text-red-300" href="">
            Work
          </a>
          <a className="font-small text-white hover:text-red-300" href="">
            Testimonials
          </a>
          <a className="font-small text-white hover:text-red-300" href="">
            Contact
          </a>
          <a className="font-small text-white hover:text-red-300" href="">
            <img src={themechange} alt="Theme" />
          </a>
          <a className="font-small text-white " href="">
            <button className="rounded-full bg-white hover:bg-red-300 text-black p-1">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
