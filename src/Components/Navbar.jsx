import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-scroll";
import menu_icon from "../assets/menu-icon.png"

export const Navbar = () => {
  const [mobileMenu, setMobileMenu]= useState(false)
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = ()=>{

    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />

      {sticky}

      <ul className= {mobileMenu ? "":"hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>HOME</Link>
        </li>

        <li>
        <Link to="programs" smooth={true} offset={-260} duration={500}>OUR SERVICES</Link>
        </li>

        <li>
        <Link to="about" smooth={true} offset={-130} duration={500}>ABOUT US</Link>
        </li>


        <li>
        <Link to="campus" smooth={true} offset={-260} duration={500}>PORTFOLIO</Link>
        </li>


        <li>
        <Link to="testimonials" smooth={true} offset={-260} duration={500}>TESTIMONIALS</Link>
        </li>

        <li className="btn" >
        <Link to="contact" smooth={true} offset={-260} duration={500} >Contact</Link>
        </li>


      </ul>
          <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};
