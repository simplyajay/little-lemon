import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const FooterNavigation = ({ sectionRefs }) => {
  const links = [
    { title: "Home", link: "#home" },
    { title: "Menu", link: "#menu" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "About", link: "#about" },
  ];

  const contact = {
    address: "Amsterdam, Netherlands",
    phone: "23424132",
    email: "little-lemon@gmail.com",
  };

  const navigate = useNavigate();

  const handleNavigation = (link) => {
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
  };

  return (
    <div className="flex justify-center w-[full] max-h-80 p-5 bg-navbarcolor">
      <div className="flex-1 flex flex-col md:flex-row justify-evenly self-center max-w-[70%]">
        <div className="flex max-w-full md:max-w-[40%] flex-1 justify-center p-5 md-p-0">
          <img
            className="w-56 md:w-72 cursor-pointer"
            src={Logo}
            alt="logo"
            onClick={(e) => handleNavigation("#home")}
          />
        </div>
        <div className="flex-1 flex">
          <div className="flex flex-1 justify-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-sm md:text-md font-bold">Explore</h1>
              <ul className="no-underline flex flex-col py-1">
                {links.map((child, key) => (
                  <li key={key}>
                    <a
                      className="font-karla text-xs md:text-sm cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(child.link);
                      }}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex flex-col gap-1 ">
              <h1 className="text-sm md:text-md font-bold">Contact</h1>
              <ul className="no-underline flex flex-col gap-1 md:gap-2 py-1">
                {Object.entries(contact).map(([key, val]) => (
                  <li key={key}>
                    <p className="font-karla text-xs md:text-sm">{val}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
