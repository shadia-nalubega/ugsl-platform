import React, { useState } from "react";
import { CheckCircle2, XCircle, Sparkles, BookOpen, ClipboardList, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx"; // Adjust path as needed

export default function SignLanguageIntroLesson() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const factsAndMyths = [
    {
      id: 1,
      type: "myth",
      statement: "Sign language is universal across all countries.",
      explanation:
        "Myth! Sign languages develop naturally within local Deaf communities. For example, Ugandan Sign Language (UgSL) has its own distinct grammar and vocabulary compared to ASL or BSL.",
    },
    {
      id: 2,
      type: "fact",
      statement: "Sign language is a complete, natural language with its own visual grammar.",
      explanation:
        "Fact! Sign languages are full linguistic systems with complex rules for syntax, facial expressions, and hand movements—not just manual representations of spoken language.",
    },
    {
      id: 3,
      type: "myth",
      statement: "Sign language is just gesturing or spellings with hands (Fingerspelling).",
      explanation:
        "Myth! Fingerspelling is used primarily for proper names or terms without a specific sign. Most communication relies on unique, full lexical signs.",
    },
  ];

  // Match total steps directly to factsAndMyths length
  const totalSteps = factsAndMyths.length;
  const isComplete = currentStep >= totalSteps;

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Tag */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">
          <Sparkles size={14} />
          <span>Foundational Lesson</span>
        </div>

        {/* Lesson Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Introduction to Sign Language
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Media Player & Action Area */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative bg-purple-50 rounded-2xl overflow-hidden border border-purple-100 aspect-video flex items-center justify-center shadow-sm">
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                Beginner Concept
              </span>
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-gray-600">
                CC
              </span>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg cursor-pointer hover:scale-105 transition">
                  <BookOpen size={28} />
                </div>
                <p className="text-sm font-medium text-purple-900">
                  Video: Understanding What Sign Language Is & Is Not
                </p>
              </div>

              
            </div>

            {/* Lesson Goal Banner */}
            <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-purple-600" />
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Goal:</span> Understand key linguistic facts about Ugandan Sign Language (UgSL) and dispel common misconceptions.
              </p>
            </div>

            {/* Actions below video player — appear once all steps are reviewed */}
            {(
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                  <CheckCircle2 size={16} />
                  <span>You've reviewed all core concepts! What would you like to do next?</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => navigate("/learner/quiz")}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm active:scale-95 text-sm"
                  >
                    <ClipboardList size={16} />
                    Take the Quiz
                  </button>

                  <button
                    onClick={() => navigate("/onboarding/overview")}
                    className="w-full bg-white border border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Continue to Next Lesson</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Step-by-Step Interactive Card */}
          <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-purple-600 tracking-wider uppercase">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-xs text-gray-400">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              What Sign Language Is & Is Not
            </h2>

            <p className="text-xs text-gray-500 mb-5">
              Review these core concepts before moving on to practical signs.
            </p>

            {/* Fact & Myth Cards Stack — Reveals step-by-step */}
            <div className="space-y-4 mb-6">
              {factsAndMyths.slice(0, currentStep).map((item) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border text-sm transition-all ${
                    item.type === "fact"
                      ? "bg-emerald-50/50 border-emerald-100 text-emerald-950"
                      : "bg-amber-50/50 border-amber-100 text-amber-950"
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    {item.type === "fact" ? (
                      <>
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        <span className="text-emerald-700 uppercase text-xs tracking-wider">
                          What It Is (Fact)
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle size={16} className="text-amber-600" />
                        <span className="text-amber-700 uppercase text-xs tracking-wider">
                          What It Is Not (Myth)
                        </span>
                      </>
                    )}
                  </div>
                  <p className="font-medium mb-1">{item.statement}</p>
                  <p className="text-xs opacity-80">{item.explanation}</p>
                </div>
              ))}
            </div>

            {/* Step-through Button */}
            {!isComplete ? (
              <button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps))}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm active:scale-95 text-sm"
              >
                Learn Core Concepts <ArrowRight size={16} />
              </button>
            ) : (
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-center text-xs font-semibold text-emerald-700">
                Step review complete! Check actions under video player.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}