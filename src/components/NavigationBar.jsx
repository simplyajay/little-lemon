import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";

const NavigationBar = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY - lastScrollY > 10) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else if (lastScrollY - currentScrollY > 10) {
        // Scrolling up
        setIsHeaderVisible(true);
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
          section.scrollIntoView({ behavior: "smooth", block: "start" });
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
      className={`sticky-nav ${isHeaderVisible ? "show" : "hide"} flex flex-col md:flex-row items-center justify-between py-5 md:px-36 z-50 shadow-md w-full`}
    >
      <img className="md:w-56 w-44" src={logo} alt="little-lemon-logo" />
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
