import React from "react";
import "./About.css";
import { GrReactjs } from "react-icons/gr";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosMail, IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaAws,
  FaBitbucket,
  FaBootstrap,
  FaHtml5,
  FaNodeJs,
  FaSchool,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiNextdotjs, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandVercel } from "react-icons/tb";
import { IoLogoJavascript, IoRemoveOutline } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="about ">
      <div className="title flex items-center space-x-2">
        <IoRemoveOutline className="title-icon " />
        <span className="title-color">&lt;</span>
        <h1 className="px-3">ABOUT ME</h1>{" "}
        <span className="title-color">/&gt;</span>
        <IoRemoveOutline className="title-icon" />
      </div>
      <div className="about-sections lg:flex w-full ">
        <div className="md:w-3/4 py-10 px-5 md:px-8  text-base ">
          <div className="about-content pb-5">
            <p>
              Hi, I'm Nivedita Patle, a Computer Science graduate with extensive
              experience as a Software Developer and over a decade of expertise
              in frontend development. Throughout my career, I have collaborated
              with prestigious organizations, significantly contributing to
              their success. My passion for software development drives me to
              continually enhance my skills and stay updated with the latest
              technologies and tools. I am dedicated and enthusiastic about each
              project, always striving to deliver high-quality solutions. I look
              forward to the opportunity to bring my experience and passion to
              your team and contribute to innovative projects.
            </p>
          </div>

          <button className="flex bg-custom-gradient py-[10px] px-[25px] text-white text-[15px] rounded-md items-center transition-all duration-300 hover:bg-opacity-80 hover:scale-105 ">
          <AnchorLink offset={50} href="#contact">
              CONTACT ME
            </AnchorLink>
            <IoIosMail className="text-[19px] ml-2" />
          </button>
        </div>

      {/* <! SKILLS section !> */}

        <div className=" md:w-2/5  p-4 border shadow-lg rounded-lg border-stone-800 bg-stone-900">
          <div className=" flex items-center text-[26px] mb-4">
            <IoRemoveOutline className=" text-[#8a2387] " />
            <h2>
              {" "}
              <span className="text-[#8a2387]">&lt;</span>{" "}
              <span className="text-[22px] ">MY SKILLS</span>{" "}
              <span className="text-[#8a2387]">/&gt;</span>{" "}
            </h2>
            <IoRemoveOutline className="text-[#8a2387] " />
          </div>
          
          <div className="grid grid-cols-3 pt-3  md:grid-cols-4 md:gap-6  ">
            <div className="icon-container">
              <GrReactjs className="text-blue-400 icon" />
              <p className="icon-name">React</p>
            </div>
            <div className="icon-container">
              <IoLogoJavascript className="text-yellow-500 icon" />
              <p className="icon-name">JavaScript</p>
            </div>
            <div className="icon-container">
              <IoLogoCss3 className="text-blue-600 icon" />
              <p className="icon-name">CSS</p>
            </div>
            <div className="icon-container">
              <RiTailwindCssFill className="text-blue-500 icon" />
              <p className="icon-name">TailwindCSS</p>
            </div>
            <div className="icon-container">
              <FaHtml5 className="text-orange-600 icon" />
              <p className="icon-name">HTML5</p>
            </div>
            <div className="icon-container">
              <FaBootstrap className="text-violet-700 icon" />
              <p className="icon-name">Bootstrap</p>
            </div>
            <div className="icon-container">
              <BsGithub className="text-gray-700 icon" />
              <p className="icon-name">GitHub</p>
            </div>
            <div className="icon-container">
              <SiNextdotjs className="text-black icon" />
              <p className="icon-name">Next JS</p>
            </div>
            <div className="icon-container">
              <SiRedux className="text-violet-700 icon" />
              <p className="icon-name">Redux</p>
            </div>
            <div className="icon-container">
              <FaNodeJs className="text-green-700 icon" />
              <p className="icon-name">Node JS</p>
            </div>
            <div className="icon-container">
              <FaAws className="text-orange-500 icon" />
              <p className="icon-name">AWS</p>
            </div>
            <div className="icon-container">
              <VscVscode className="text-blue-600 icon" />
              <p className="icon-name">VS Code</p>
            </div>
            <div className="icon-container">
              <TbBrandVercel className="text-black icon" />
              <p className="icon-name">Vercel</p>
            </div>
            <div className="icon-container">
              <FaBitbucket className="text-blue-600 icon" />
              <p className="icon-name">Bitbucket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
