import React from "react";
import email from "../images/Icon.png";
import mobile from "../images/Vector.png";
import copy from "../images/copy.png";
import git from "../images/gitlab.png";
function Contact() {
  return (
    <div className="flex flex-col item-center mx-auto pb-5 bg-black">
      <p className="bg-[#374151] rounded-full text-center text-white mx-auto mt-10 mb-4 text-2xl w-[200px]">
        Get in touch
      </p>
      <p className="text-[#D1D5DB] w-full text-2xl text-center mx-auto mt-5 md:w-[50%]">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex mx-auto items-center mt-8 gap-5">
        <span>
          <img src={email} alt="Email" />
        </span>
        <span className="text-[#D1D5DB] font-bold text-3xl">
          vanibannuru11@gmail.com
        </span>
        <span>
          {" "}
          <img src={copy} alt="Email" />
        </span>
      </div>
      <div className="flex mx-auto items-center mt-5 gap-5">
        <span>
          <img src={mobile} alt="Email" />
        </span>
        <span className="text-[#D1D5DB] font-bold text-3xl">
          +91 8106457460
        </span>
        <span>
          <img src={copy} alt="Email" />
        </span>
      </div>
      <p className="text-[#D1D5DB] text-center mt-10">
        You may also find me on these platforms!
      </p>
      <div className="flex mx-auto items-center mt-5 gap-5">
        <span>
          <img src={git} alt="Email" />
        </span>
        <span>
          <img src={git} alt="Email" />
        </span>
        <span>
          <img src={git} alt="Email" />
        </span>
      </div>
    </div>
  );
}

export default Contact;
