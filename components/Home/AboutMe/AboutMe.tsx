import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
import Image from '../../../public/myimage.jpeg'
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["React / Next.js", "TypeScript", "Tailwind CSS", "MongoDB / Firebase", "WebSockets / REST APIs"],
    ["Node.js / Express.js", "Redux", "Supabase", "Solana / Web3", "AI-powered tools"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              Hey there! I&apos;m <span className="text-AAsecondary">Shubham</span>, and I&apos;m passionate about building impactful digital experiences with code. My journey into tech started during my college years, where curiosity drove me to explore <span className="text-AAsecondary">web development</span>. That spark quickly turned into a full-on obsession with creating applications that connect people, solve problems, and push boundaries.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Along the way, I&apos;ve built and contributed to projects like{" "}
              <span className="text-AAsecondary">DevBond</span> (a real-time developer networking platform),{" "}
              <span className="text-AAsecondary">Huntshot</span> (an AI-powered resume and profile builder), and{" "}
              <span className="text-AAsecondary">Codematrix</span> (a resource hub powered by AI and Redux). As part of{" "}
              <span className="text-AAsecondary">GDG NIET and FOSSCU</span>, I&apos;ve led workshops for{" "}
              <span className="text-AAsecondary">100+ developers</span>, organized events, and mentored students through their first{" "}
              <span className="text-AAsecondary">open-source contributions</span> — experiences that honed both my leadership and technical skills.
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Currently, I&apos;m expanding my expertise into{" "}
              <span className="text-AAsecondary">blockchain development</span>, diving deep into{" "}
              <span className="text-AAsecondary">Solana</span> and experimenting with{" "}
              <span className="text-AAsecondary">decentralized applications (dApps)</span>. I love blending{" "}
              <span className="text-AAsecondary">full stack development</span> with{" "}
              <span className="text-AAsecondary">Web3 innovation</span>, exploring how AI and blockchain can redefine the way people interact online.
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div key={groupIndex} className="flex flex-col space-y-4 sm:text-base text-sm">
                  {techGroup.map((tech, techIndex) => (
                    <div key={techIndex} className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary flex-none"} />
                      <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="font-Header text-gray-400 pt-4 text-justify">
              Whether it&apos;s building <span className="text-AAsecondary">modern full stack apps</span>, experimenting with{" "}
              <span className="text-AAsecondary">blockchain</span>, or <span className="text-AAsecondary">mentoring fellow developers</span>, I&apos;m always excited for the next challenge where I can learn, contribute, and innovate.
            </div>
          </div>

                    {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-[32rem] md:w-72 md:h-96 md:block hidden">
            <div className="group-hover:-translate-x-3 group-hover:-translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-10 bg-AAsecondary opacity-0 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/myimage.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="group relative w-full h-80 md:hidden flex justify-center items-center">
            <div className="group-hover:-translate-x-5 group-hover:-translate-y-5 duration-300 absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/myimage.jpeg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="group-hover:opacity-10 duration-300 absolute w-48 h-full bg-AAsecondary opacity-0 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
