import React, { useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logonp.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleClick = (item) => {
    setMenu(item);
  };

  return (
    <div className="navbar shadow-md shadow-stone-950">
      <img src={Logo} alt="logo" className="logonp" />
      <RiMenu3Fill onClick={openMenu} className="nav-mob-open text-[40px]" />
      <ul ref={menuRef} className="nav-menu">
        <IoClose onClick={closeMenu} className="nav-mob-close text-[40px]" />
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li
          className={menu === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#about">
            About Me
          </AnchorLink>
        </li>
        <li
          className={menu === "qualification" ? "active" : ""}
          onClick={() => handleClick("qualification")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#qualification">
            Experience
          </AnchorLink>
        </li>
        <li
          className={menu === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            Projects
          </AnchorLink>
        </li>
        <li
          className={menu === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      {/* <div className="nav-connect">Hire Me</div> */}
    </div>
  );
};

export default Navbar;
