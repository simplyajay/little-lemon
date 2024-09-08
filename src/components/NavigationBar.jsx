import React from "react";
import logo from "../assets/Logo.svg";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between align-center py-5 px-36">
      <img className="w-56" src={logo} alt="little-lemon-logo" />
      <ul className="flex flex-1 justify-evenly items-center">
        <li>
          <a className="no-underline" href="">
            Home
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            About
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            Menu
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            Reservations
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            Order Online
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
