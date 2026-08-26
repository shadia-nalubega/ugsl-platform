import React from "react";
import { useNavigate } from "react-router-dom";

export default function LessonOverviewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        
        {/* Topic Tag & Title */}
        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Scenario-Based Lesson
          </span>
          <h1 className="text-3xl font-bold text-slate-900 mt-3">
            Introducing Yourself
          </h1>
          <p className="text-slate-600 mt-2">
            In this lesson, you will practice exchanging basic greetings and introducing your name to a Deaf individual using UgSL.
          </p>
        </div>

        {/* Lesson Metadata */}
        <div className="flex gap-6 p-4 bg-slate-50 rounded-xl mb-6 border border-slate-100 text-sm text-slate-700">
          <div>
            <span className="block text-xs text-slate-500 font-medium">ESTIMATED TIME</span>
            <span className="font-semibold text-slate-800">5 Mins</span>
          </div>
          <div className="border-l border-slate-200 pl-6">
            <span className="block text-xs text-slate-500 font-medium">DIFFICULTY</span>
            <span className="font-semibold text-slate-800">Beginner</span>
          </div>
          <div className="border-l border-slate-200 pl-6">
            <span className="block text-xs text-slate-500 font-medium">STEPS</span>
            <span className="font-semibold text-slate-800">4 Modules</span>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-3">
            What You'll Achieve
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-slate-700 text-sm">
              <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <span>Greet someone naturally using standard UgSL signs (<code>HELLO</code>, <code>NICE MEET YOU</code>).</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700 text-sm">
              <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <span>Fingerspell your name smoothly step-by-step.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-700 text-sm">
              <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
              <span>Understand conversational turn-taking during initial introductions.</span>
            </li>
          </ul>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            onClick={() => navigate("/")}
            className="text-slate-500 hover:text-slate-800 text-sm font-medium transition"
          >
            ← Back to UgSL Intro
          </button>
          
          <button
            onClick={() => navigate("/lesson/greetings")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition shadow-sm"
          >
            Start Lesson →
          </button>
        </div>

      </div>
    </div>
  );
}