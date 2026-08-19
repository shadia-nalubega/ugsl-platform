import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Dictionary", path: "/dictionary" },
  { label: "Practice", path: "/practice" },
  { label: "About Us", path: "/about" },
  { label: "Community", path: "/community" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="UgSL logo" className="w-15 h-12" />
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          to="/auth/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700"
        >
          GET STARTED
        </Link>
      </div>
    </nav>
  );
}