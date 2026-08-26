import React from "react";
import { useNavigate } from "react-router-dom";

export default function IntroVideoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Welcome to UgSL
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            Understanding Ugandan Sign Language
          </h1>
          <p className="text-slate-600 mt-2">
            Watch this brief introduction to learn how sign language functions, the importance of facial expressions, and the unique structure of UgSL.
          </p>
        </div>

        {/* Video Player Placeholder */}
        <div className="relative aspect-video w-full bg-slate-900 rounded-xl overflow-hidden shadow-inner flex items-center justify-center mb-8">
          <div className="text-center text-white p-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-white/30 transition">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-white border-b-8 border-b-transparent ml-1" />
            </div>
            <p className="font-medium text-slate-300">Introductory UgSL Video Player</p>
            <span className="text-xs text-slate-400">(Replace with your video player or iframe)</span>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-semibold text-slate-800 text-sm mb-1">Visual Grammar</h4>
            <p className="text-xs text-slate-600">UgSL has its own distinct grammatical rules separate from spoken English.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-semibold text-slate-800 text-sm mb-1">Non-Manual Markers</h4>
            <p className="text-xs text-slate-600">Facial expressions and head movements carry essential grammatical meaning.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
            <h4 className="font-semibold text-slate-800 text-sm mb-1">Fingerspelling</h4>
            <p className="text-xs text-slate-600">Used for proper nouns, proper names, and specialized vocabulary.</p>
          </div>
        </div>

        {/* Navigation Action */}
        <div className="flex justify-end pt-4 border-t border-slate-100">
          <button
            onClick={() => navigate("/lesson/greetings/overview")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition flex items-center gap-2 shadow-sm"
          >
            Next: Lesson Overview
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}