import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-violet-100 via-indigo-50 to-white overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start px-8 py-5 pb-16">
        <div className="flex py-16 flex-col items-start justify-center gap-2">
          <span className="inline-block bg-violet-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
            Learn. Connect. Include.
          </span>

          <h1 className="text-5xl font-bold mt-3 leading-tight">
            Learn Ugandan
            <br />
            <span className="text-violet-600">Sign Language</span>
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
              to="/onboarding"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Start Learning Now →
            </Link>
            <Link
              to="/dictionary"
              className="border border-violet-600 text-violet-600 px-6 py-3 rounded-lg font-medium hover:bg-violet-50 transition-colors"
            >
              Explore Dictionary
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Join <span className="text-violet-600 font-semibold">1,200+</span>{" "}
            learners already learning UgSL
          </p>
        </div>

        <div className="relative md:py-16 md:mt-8 flex items-center justify-center">
          <div className="absolute w-[420px] h-[420px] bg-violet-200 rounded-full blur-3xl opacity-60 -z-10" />

          <svg
            className="absolute w-[440px] h-[440px] -z-10 opacity-40"
            viewBox="0 0 440 440"
            fill="none"
          >
            <path d="M0 220 Q 110 180 220 220 T 440 220" stroke="#a78bfa" strokeWidth="2" />
            <path d="M0 260 Q 110 220 220 260 T 440 260" stroke="#a78bfa" strokeWidth="2" />
            <path d="M0 300 Q 110 260 220 300 T 440 300" stroke="#a78bfa" strokeWidth="2" />
          </svg>

          <img
            src={heroImg}
            alt="Learner signing"
            className="relative rounded-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
}