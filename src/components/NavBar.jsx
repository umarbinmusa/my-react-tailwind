import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./images/back.png"
            alt="Devstack Logo"
            className="h-10 w-auto"
          />
          <span className="font-extrabold text-xl tracking-wide">
            DEVSTACK<span className="text-gray-500">ICT</span>
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex space-x-10 font-semibold">
          <li className="hover:text-green-500 transition">
            <Link to="/Home">Home</Link>
          </li>
          <li className="hover:text-green-500 transition">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:text-green-500 transition">
            <Link to="/Services">Services</Link>
          </li>
          <li className="hover:text-green-500 transition">
            <Link to="/Mission">Mission</Link>
          </li>
          <li className="hover:text-green-500 transition">
            <Link to="/Staffs">Staffs</Link>
          </li>
          <li className="hover:text-green-500 transition">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <Link
          to="/Contact"
          className="hidden md:inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
