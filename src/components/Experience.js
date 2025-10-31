import React from "react";
import logocom from "../images/logo-upwork.png";
function Experience() {
  return (
    <div className="flex flex-col item-center mx-auto pb-5 bg-[#111827]">
      <p className="bg-[#374151] rounded-full text-center text-white mx-auto mt-4 mb-4 text-2xl w-[200px]">
        Experience
      </p>
      <p className="text-[#D1D5DB] text-center text-2xl m-3">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col w-full md:w-[70%] gap-2 md:m-auto">
        <div className="bg-[#1F2937] flex flex-col items-start text-[#F9FAFB] md:flex-row md:justify-around pt-[2%] pb-[2%] ">
          <div>
            <img src={logocom} alt="company name" />{" "}
          </div>
          <div className="flex flex-col mt-3 ">
            <p className="text-2xl">Sr. Frontend Developer</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div>
            <p>Nov 2021 - Present</p>
          </div>
        </div>
        <div className="bg-[#1F2937] flex flex-col items-start text-[#F9FAFB] md:flex-row md:justify-around pt-[2%] pb-[2%] ">
          <div>
            <img src={logocom} alt="company name" />{" "}
          </div>
          <div className="flex flex-col mt-3 ">
            <p className="text-2xl">Sr. Frontend Developer</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div>
            <p>Nov 2021 - Present</p>
          </div>
        </div>{" "}
        <div className="bg-[#1F2937] flex flex-col items-start text-[#F9FAFB] md:flex-row md:justify-around pt-[2%] pb-[2%] ">
          <div>
            <img src={logocom} alt="company name" />{" "}
          </div>
          <div className="flex flex-col mt-3">
            <p className="text-2xl">Sr. Frontend Developer</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div>
            <p>Nov 2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
