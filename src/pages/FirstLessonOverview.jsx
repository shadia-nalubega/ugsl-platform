import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export default function FirstLessonOverview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#faf9ff]">
      {/* Back Button */}
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      </div>

      {/* Centered Content */}
      <div className="max-w-xl mx-auto px-6 pt-10 pb-16 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Overview:
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Introduction to Sign Language
        </h1>

        <hr className="border-gray-200 mt-6 mb-8" />

        <div className="text-left">
          <p className="text-gray-700 mb-6">
            In this lesson, you will learn the following:
          </p>

          <p className="font-semibold text-gray-900 mb-1">Key Facts</p>
          <p className="text-gray-700 mb-6">
            What sign language really is, how UgSL differs from other sign languages, and the true role of fingerspelling.
          </p>

          <p className="font-semibold text-gray-900 mb-1">Common Myths</p>
          <p className="text-gray-700">
            Why sign language isn't universal, and why it isn't just hand gestures.
          </p>
        </div>

        <button
          onClick={() => navigate("/lesson/introduction")}
          className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-10 py-3 rounded-xl transition cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}