import React from "react";
import "./Hero.css";
import SideImg from "../../assets/img4.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiContactsLine } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <h1>
          <span>I'm Nivedita Patle,</span> Software Developer 
        </h1>
        <p>
        Building Comprehensive Web Solutions with a Focus on Excellence at Every Stage, From Design and Development to Deployment and Optimization, Ensuring a Smooth and Effective Digital Presence.
        </p>
        <div className="hero-action">
          <div className="hero-connect bg-custom-gradient flex">
            <AnchorLink offset={50} href="#contact">
              CONTACT ME
            </AnchorLink>
            <RiContactsLine className="text-[19px] ml-2" />
          </div>
          <div className="hero-resume ">
              <a href="/Nivedita_Patle_Resume_2024.pdf"  target="_blank" rel="noopener noreferrer" className="flex">
              GET RESUME <IoMdDownload className="text-[19px] ml-2" />
              </a>
          </div>
        </div>
      </div>
      <div className="profile rounded-lg">
        <img src={SideImg} alt="profile " className="profile-img rounded-lg shadow-lg shadow-stone-800" />
      </div>
    </div>
  );
};

export default Hero;
