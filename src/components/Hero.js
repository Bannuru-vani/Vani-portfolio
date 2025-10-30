import React from "react";
import user from "../images/user.jpeg";

function Hero() {
  return (
    <div className="flex flex-col-reverse justify-around mx-auto px-6 md:flex-row bg-black pt-10">
      <div className="flex flex-col  text-left md:text-center md:w-3/4">
        <h3 className="font-bold text-4xl text-center text-white md:text-left">
          Hi, I’m Vani 👋
        </h3>
        <p className="font-small text-xl text-white text-center mt-5 md:text-left">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <p className="font-small text-xl text-white text-center mt-8 md:text-left">
          Ahmedabad, India
        </p>
        <p className="font-small text-xl text-white text-center mt-5 md:text-left">
          Available for new projects
        </p>
        <div className="flex flex-row">
          <a href="">
            <i className="fa-brands fa-github"></i> &nbsp;
          </a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
      <div className=" flex justify-center md-w-1/4">
        <img
          src={user}
          alt="Userimage"
          className="size-50 flex item-center md:size-60"
        />
      </div>
    </div>
  );
}

export default Hero;
