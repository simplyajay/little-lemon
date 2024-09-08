import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between align-center py-5 px-36">
      <img className="w-56" src={logo} alt="little-lemon-logo" />
      <ul className="flex flex-1 justify-evenly items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservation">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
