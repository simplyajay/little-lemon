import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = ({ sectionRefs }) => {
  const [isNavbarVisible, setisNavbarVisible] = useState(true);
  const [isNavbarOnTop, setIsNavbarOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        const sectionId = link.slice(1);
        const sectionRef = sectionRefs[sectionId];

        if (sectionRef && sectionRef.current) {
          const sectionRect = sectionRef.current.getBoundingClientRect();
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
    { title: "Menu", link: "#menu" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "About", link: "#about" },
    { title: "Reservations", link: "/reservation" },
    { title: "Order Online", link: "/order" },
    { title: "Log in", link: "/login" },
  ];

  const handleMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`${isNavbarVisible ? "show" : "hide"}  bg-navbarcolor ${isNavbarOnTop && "md:bg-transparent"} 
      sticky-nav flex flex-col md:flex-row items-center 
      justify-between gap-4 md:gap-0 py-5 md:px-24 lg:px-36 xl:px-48 w-full font-karla`}
    >
      <span>
        <img
          className="md:w-56 w-44 h-auto hover:cursor-pointer"
          src={logo}
          alt="little-lemon-logo"
          onClick={(e) => handleNavigation("#home")}
        />
      </span>

      <div className="md:hidden flex justify-center">
        <button onClick={handleMenuClick}>
          <GiHamburgerMenu />
        </button>
      </div>
      <ul
        className={`${isMobileMenuOpen ? "visible" : "hidden"} transition-all duration-500 ease-in-out md:flex flex-1 md:flex-row justify-evenly items-center gap-5 md:gap-0`}
      >
        {links.map((link, key) => (
          <li key={key} className="text-center">
            <a
              href={link.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.link);
                setIsMobileMenuOpen(false);
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
