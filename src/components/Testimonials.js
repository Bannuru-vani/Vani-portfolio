import React from "react";
import avatar from "../images/icon-avatar.png";
function Testimonials() {
  return (
    <div className="flex flex-col  mx-auto px-6 md:flex-col bg-black pt-10">
      <p className="bg-[#374151] rounded-full text-center text-[#D1D5DB] mx-auto mt-4 mb-4 text-2xl w-[200px]">
        Testimonials
      </p>
      <p className="text-[#D1D5DB] text-center text-2xl">
        Nice things people have said about me:
      </p>
      <div className="flex flex-col mx-auto justify-center gap-10 mt-5 md:flex-row">
        <div className="w-full flex  items-center flex-col md:w-[25%] bg-[#1F2937] ">
          <img src={avatar} alt="Avatar" className="m-5 w-[40px]" />
          <p className="w-full text-left text-[#D1D5DB] md:w-[50%]">
            {" "}
            “Job well done! I am really impressed. He is very very good at what
            he does:) I would recommend Sagar and will rehire in the future for
            Frontend development.”
          </p>
          <p className="text-2xl text-[#F9FAFB] mt-4">John Doe</p>
          <p className="text-[#D1D5DB]">Founder - abc.com</p>
        </div>
        <div className="w-full flex  items-center flex-col md:w-[25%] bg-[#1F2937] ">
          <img src={avatar} alt="Avatar" className="m-5 w-[40px]" />
          <p className="w-full text-left text-[#D1D5DB] md:w-[50%]">
            {" "}
            “Great guy, highly recommended for any COMPLEX front-end development
            job! His skills are top-notch and he will be an amazing addition to
            any team.”
          </p>
          <p className="text-2xl text-[#F9FAFB] mt-4">John Doe</p>
          <p className="text-[#D1D5DB]">Founder - abc.com</p>
        </div>
        <div className="w-full flex  items-center flex-col md:w-[25%] bg-[#1F2937] ">
          <img src={avatar} alt="Avatar" className="m-5 w-[40px]" />
          <p className="w-full text-left text-[#D1D5DB] md:w-[50%]">
            {" "}
            “Sagar was extremely easy and pleasant to work with and he truly
            cares about the project being a success. Sagar has a high level of
            knowledge and was able to work on my MERN stack application without
            any issues.”
          </p>
          <p className="text-2xl text-[#F9FAFB] mt-4">John Doe</p>
          <p className="text-[#D1D5DB]">Founder - abc.com</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
