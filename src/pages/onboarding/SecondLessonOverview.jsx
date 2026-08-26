import React from "react";
import { Sparkles, BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx"; 

export default function SecondLessonOverview() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Top Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-purple-600 mb-6 transition cursor-pointer"
        >
          <ArrowLeft size={14} /> Back
        </button>

        {/* Lesson Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">
          <Sparkles size={14} />
          <span>Lesson 2 Overview</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Basic Greetings
        </h1>

        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
          Before you can introduce yourself, you need the core greeting signs every conversation starts with. This lesson covers just that.
        </p>

        {/* Core Topics Card Stack */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <BookOpen size={20} className="text-purple-600" />
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-xl space-y-1">
              <span className="font-bold text-purple-900 text-sm block">1. Hello</span>
              <p className="text-xs text-gray-600 leading-relaxed">
                The core sign for greeting someone at any time of day.
              </p>
            </div>

            <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-xl space-y-1">
              <span className="font-bold text-purple-900 text-sm block">2. Time-of-Day Greetings</span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Good morning, good afternoon, and good evening.
              </p>
            </div>

            <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-xl space-y-1">
              <span className="font-bold text-purple-900 text-sm block">3. Reading a Greeting Back</span>
              <p className="text-xs text-gray-600 leading-relaxed">
                Recognizing these signs when someone greets you first.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions: Back & Start Lesson 2 */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-white border border-gray-200 hover:border-purple-300 text-gray-700 font-medium py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            onClick={() => navigate("/lesson/basic-greetings")}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-sm text-sm active:scale-95 cursor-pointer"
          >
            Start Lesson 2 <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}