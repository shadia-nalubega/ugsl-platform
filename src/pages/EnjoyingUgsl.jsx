import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

export default function EnjoyingUgSL() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Signing character */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-3xl bg-indigo-50 flex items-center justify-center overflow-hidden">
              
              {/* Temporary placeholder */}
              <div className="text-center px-8">
                <div className="text-8xl mb-6">
                  👋
                </div>

                <p className="text-indigo-600 font-semibold text-lg">
                  Your signing character goes here
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  A fun UgSL signing moment
                </p>
              </div>

            </div>
          </div>

          {/* Message */}
          <div className="text-center md:text-left">

            <p className="text-indigo-600 font-semibold uppercase tracking-wide text-sm">
              You made it this far!
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 leading-tight">
              Are you enjoying UgSL?
            </h1>

            <p className="text-gray-500 text-lg mt-5 leading-relaxed max-w-lg">
              You've already learned your first signs.
              Why not keep going?
            </p>

            <p className="text-gray-500 mt-3 leading-relaxed max-w-lg">
              Create an account to save your progress, keep track of what
              you've learned, and continue your UgSL journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start">

              {/* Create account */}
              <Link
                to="/auth/signup"
                className="bg-indigo-600 text-white px-7 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition inline-flex items-center justify-center gap-2"
              >
                Create Your Account

                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Continue without account */}
              <Link
                to="/courses"
                className="inline-flex justify-center items-center border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Maybe Later
              </Link>

            </div>

            <p className="text-gray-400 text-sm mt-5">
              You can keep exploring UgSL without an account.
            </p>

          </div>

        </div>
      </main>
    </div>
  );
}