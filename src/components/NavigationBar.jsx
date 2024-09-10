import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";

const NavigationBar = () => {
  const [isNavbarVisible, setisNavbarVisible] = useState(true);
  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setisNavbarVisible(false);
      } else {
        // Scrolling up
        setisNavbarVisible(true);
      }

      if (currentScrollY === 0) {
        setIsNavbarOnTop(true);
      } else {
        setIsNavbarOnTop(false);
      }

      // Update lastScrollY to current window.scrollY
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();

  //when user is on another page and will click menu, home, or about, this will navigate the user the the mainlayout and
  //scrolls to the section afterwards
  const handleNavigation = (link) => {
    if (link.startsWith("#")) {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(link);
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          const middlePosition =
            sectionRect.top +
            window.scrollY -
            window.innerHeight / 2 +
            sectionRect.height / 2;
          window.scrollTo({ top: middlePosition, behavior: "smooth" });
        }
      }, 0);
    } else {
      navigate(link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const links = [
    { title: "Home", link: "#home" },
    { title: "About", link: "#about" },
    { title: "Menu", link: "#menu" },
    { title: "Reservations", link: "/reservation" },
    { title: "Order Online", link: "/order" },
    { title: "Log in", link: "/login" },
  ];

  return (
    <nav
      className={`${isNavbarVisible ? "show" : "hide"} ${isNavbarOnTop ? "bg-transparent" : "bg-navbarcolor shadow-md"} 
      sticky-nav flex flex-col md:flex-row items-center 
      justify-between py-5 md:px-36 w-full font-karla`}
    >
      <img className="md:w-56 w-44 h-auto" src={logo} alt="little-lemon-logo" />
      <ul className="flex flex-col flex-1 md:flex-row justify-evenly items-center">
        {links.map((link, key) => (
          <li key={key}>
            <a
              href={link.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.link);
              }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
