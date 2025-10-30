// B.E. in Computer EngineeringAspiring indie hackerFull time freelancer Avid learner

import React from "react";
import user from "../images/user.jpeg";
function About() {
  return (
    <div className="flex flex-col item-center mx-auto pb-5 bg-[#111827]">
      <p className="bg-[#374151] rounded-full text-center text-white mx-auto mt-4 mb-4 text-2xl w-[200px]">
        About me
      </p>
      <div className="container flex flex-col   md:flex-row">
        <div className="w-full flex justify-center item-center md:w-1/2">
          <img src={user} alt="User" />
        </div>
        <div className="flex w-full flex-col text-center text-[#F9FAFB]  md:w-1/2 md:text-left ">
          <p className="font-bold text-3xl">
            Curious about me? Here you have it:
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            {" "}
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            {" "}
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            {" "}
            Finally, some quick bits about me.
          </p>
          <p className="mt-4 text-[#D1D5DB]">
            {" "}
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
