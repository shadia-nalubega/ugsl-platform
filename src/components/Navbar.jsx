import { useState } from "react";
import { Link } from "react-router-dom";

// Edit this array to add/remove/reorder nav links
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
        <img src="/logo.svg" alt="UgSL logo" className="w-8 h-8" />
        <div>
          <p className="font-bold text-lg leading-none">UgSL</p>
          <p className="text-xs text-gray-500 leading-none">
            Ugandan Sign Language
          </p>
        </div>
      </Link>

      {/* Nav links — mapped from NAV_LINKS above */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-gray-700 hover:text-indigo-600 font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side: search + auth buttons */}
      <div className="flex items-center gap-4">
        <button aria-label="Search">🔍</button>
        <Link to="/auth/login" className="text-indigo-600 font-medium">
          Log in
        </Link>
        <Link
          to="/auth/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}