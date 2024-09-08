import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const NavigationBar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Menu", link: "/menu" },
    { title: "Reservations", link: "/reservation" },
    { title: "Order Online", link: "/order" },
    { title: "Log in", link: "/login" },
  ];

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-5 md:px-36">
      <img className="md:w-56 w-44" src={logo} alt="little-lemon-logo" />
      <ul className="flex flex-col flex-1 md:flex-row justify-evenly items-center">
        {links.map((link, key) => (
          <li key={key}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
