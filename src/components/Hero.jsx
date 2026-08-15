import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";


export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center px-8 py-16">
      {/* Left: text content */}
      <div>
        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
          Learn. Connect. Include.
        </span>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          Learn Ugandan
          <br />
          <span className="text-indigo-600">Sign Language</span>
        </h1>

        <p className="text-xl font-medium mt-2">
          Communicate. Connect. Create Inclusion.
        </p>

        <p className="text-gray-500 mt-4 max-w-md">
          UgSL is an interactive platform that helps you learn Ugandan Sign
          Language through easy video lessons, practice, and real-life
          conversations.
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            to="/auth/signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Start Learning Now →
          </Link>
          <Link
            to="/dictionary"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50"
          >
            Explore Dictionary
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Join <span className="text-indigo-600 font-semibold">1,200+</span>{" "}
          learners already learning UgSL
        </p>
      </div>

      {/* Right: photo + floating info cards */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Learner signing"
          className="rounded-2xl w-full"
        />

       
      </div>
    </section>
  );
}

// Small helper for the three floating cards — same shape, different content/position
function HeroBadge({ className, icon, title, subtitle }) {
  return (
    <div
      className={`absolute bg-white shadow-md rounded-xl p-3 w-56 flex gap-3 ${className}`}
    >
      <span className="bg-indigo-100 rounded-full p-2 h-fit">{icon}</span>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}