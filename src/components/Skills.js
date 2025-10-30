import React from "react";
import git from "../images/Tech.png";
function Skills() {
  return (
    <div className="flex flex-col  mx-auto px-6 md:flex-col bg-black pt-10">
      <p className="bg-[#374151] rounded-full text-center text-[#D1D5DB] mx-auto mt-4 mb-4 text-2xl w-[200px]">
        Skills
      </p>
      <p className="text-[#D1D5DB] text-center text-2xl">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex flex-wrap justify-center mx-auto gap-10">
        <img src={git} alt="Git" className="size-50" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
        <img src={git} alt="Git" />
      </div>
    </div>
  );
}

export default Skills;
