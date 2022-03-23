import { React, useState } from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaCommentDots, FaUser } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active': ''}>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active': ''}>
        <FaUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active': ''}>
        <MdWork />
      </a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active': ''}>
        <AiFillHome />
      </a>
      <a href="#reviews" onClick={() => setActiveNav('#reviews')} className={activeNav === "#reviews" ? 'active': ''}>
        <FaCommentDots />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active': ''}>
        <MdSendToMobile />
      </a>
    </nav>
  );
};

export default Nav;
