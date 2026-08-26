import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

export default function EnjoyingUgSL() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-2xl text-center">
          
          <p className="text-indigo-600 font-semibold uppercase tracking-wide text-xs sm:text-sm">
            You made it this far!
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Are you enjoying UgSL?
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed max-w-lg mx-auto">
            You've already learned your first signs. Why not keep going?
          </p>

          <p className="text-gray-500 text-sm sm:text-base mt-2 leading-relaxed max-w-lg mx-auto">
            Create an account to save your progress, keep track of what
            you've learned, and continue your UgSL journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
            <Link
              to="/auth/signup"
              className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              Create Your Account
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/courses"
              className="inline-flex justify-center items-center border border-gray-200 text-gray-600 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition cursor-pointer"
            >
              Maybe Later
            </Link>
          </div>

          <p className="text-gray-400 text-xs sm:text-sm mt-5">
            You can keep exploring UgSL without an account.
          </p>

        </div>
      </main>
    </div>
  );
}