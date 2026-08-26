import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Lock, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Hand, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  ClipboardList
} from "lucide-react";
import Navbar from "../../components/Navbar.jsx";

export default function BasicGreetingsLesson() {
  const navigate = useNavigate();

  const currentLesson = {
    id: "basic-greetings",
    title: "Basic Greetings",
    category: "Social Foundations",
    videoId: "gE13r4Gwkog",
    canDoStatement: "Greet someone using hello and time-of-day greetings, and recognize these signs when someone greets you first."
  };

  const [expandedStepId, setExpandedStepId] = useState(1);
  const [isCompleted, setIsCompleted] = useState(true);

  const handleStepClick = (stepId) => {
    setExpandedStepId((prev) => (prev === stepId ? null : stepId));
  };

  return (
    <div className="min-h-screen bg-[#faf9ff]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-purple-600 mb-4 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lesson Overview
        </button>

        {/* Lesson Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            Lesson 2: Practical Practice
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {currentLesson.title}
          </h1>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-10">
          
          {/* LEFT SIDE: Video Player & Action Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                  {currentLesson.category}
                </span>
                <button
                  onClick={() => setIsCompleted(!isCompleted)}
                  className="text-xs text-gray-400 hover:text-purple-600 underline cursor-pointer"
                >
                  {isCompleted ? "(Reset Review Status)" : "(Mark Review Complete)"}
                </button>
              </div>

              {/* Video Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-sm border border-gray-200">
                <iframe
                  src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
                  title={currentLesson.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Goal Card */}
              <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 flex items-start gap-3">
                <Hand className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-purple-950 font-medium leading-relaxed">
                  <strong className="font-semibold text-purple-900">Scenario Goal: </strong>
                  {currentLesson.canDoStatement}
                </p>
              </div>

              {/* Completion Action Card */}
              {isCompleted && (
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                    <CheckCircle2 size={16} />
                    <span>You've reviewed all core concepts! What would you like to do next?</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => navigate("/lesson/basic-greetings/quiz")}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-sm active:scale-95 text-sm cursor-pointer"
                    >
                      <ClipboardList size={16} />
                      Take the Quiz
                    </button>

                    <button
                      onClick={() => navigate("/enjoying-ugsl")} // <- fill in: overview for "Introducing Yourself" (Lesson 3)
                      className="w-full bg-white border border-gray-200 hover:border-purple-300 text-gray-700 hover:text-purple-700 font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <span>Continue to Next Lesson</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: Accordion Steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5 sticky top-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Lesson Steps
                </h3>
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  4 Steps Total
                </span>
              </div>

              <div className="space-y-3">

                {/* Step 1: Situation */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden bg-emerald-50/40">
                  <button
                    onClick={() => handleStepClick(1)}
                    className="w-full p-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="text-emerald-950">1. Situation Exchange</span>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      {expandedStepId === 1 ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {expandedStepId === 1 && (
                    <div className="p-4 bg-white border-t border-emerald-100 text-xs text-gray-600 space-y-2 animate-in fade-in duration-200">
                      <p className="font-medium text-gray-900">Greeting Context:</p>
                      <p>Observe how UgSL speakers greet each other at the start of a conversation, and how the greeting changes depending on the time of day.</p>
                    </div>
                  )}
                </div>

                {/* Step 2: Key Building Blocks — real greetings content */}
                <div className={`border rounded-2xl overflow-hidden transition-all ${
                  expandedStepId === 2 ? "border-purple-200 shadow-sm bg-purple-50/20" : "border-purple-100 bg-purple-50/40"
                }`}>
                  <button
                    onClick={() => handleStepClick(2)}
                    className="w-full p-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between text-left cursor-pointer text-purple-950"
                  >
                    <span className="flex items-center gap-1.5">
                      2. Key Building Blocks
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    </span>
                    {expandedStepId === 2 ? (
                      <ChevronUp className="w-4 h-4 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-purple-600" />
                    )}
                  </button>

                  {expandedStepId === 2 && (
                    <div className="p-5 bg-white border-t border-purple-100 space-y-5 animate-in fade-in duration-200">
                      
                      <div className="flex items-center justify-between text-[11px] font-bold text-purple-600 tracking-wider uppercase">
                        <span>STEP 1 OF 3</span>
                        <span className="text-gray-400 font-medium">33%</span>
                      </div>

                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-purple-600 h-full w-1/3 rounded-full" />
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                          Hello & Time-of-Day Greetings
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          The core signs you'll use to open almost any conversation.
                        </p>
                      </div>

                      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px] uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>SIGN: HELLO</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Open palm moving outward from the mouth or temple area, with natural eye contact.
                        </p>
                      </div>

                      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-[11px] uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>SIGN: GOOD MORNING / AFTERNOON / EVENING</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Time-of-day greetings follow HELLO, adding a sign for the part of day — used the same way people greet differently in spoken conversation.
                        </p>
                      </div>

                      <button
                        onClick={() => setExpandedStepId(3)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-xs shadow-sm cursor-pointer"
                      >
                        Learn Core Concepts <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                    </div>
                  )}
                </div>

                {/* Step 3: Practice Turn */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
                  <button
                    onClick={() => handleStepClick(3)}
                    className="w-full p-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between text-left cursor-pointer text-gray-700"
                  >
                    <span>3. Practice Turn</span>
                    {expandedStepId === 3 ? (
                      <ChevronUp className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </button>

                  {expandedStepId === 3 && (
                    <div className="p-4 bg-white border-t border-gray-100 text-xs text-gray-600 space-y-2 animate-in fade-in duration-200">
                      <p className="font-semibold text-gray-900">Practice Exercise:</p>
                      <p>Practice signing "Hello" and the time-of-day greeting that matches right now, in front of your camera or the interactive wizard.</p>
                    </div>
                  )}
                </div>

                {/* Step 4: Self-Assessment (Locked) */}
                <div className="border border-gray-100 rounded-2xl bg-gray-50/50 p-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between text-gray-400 cursor-not-allowed">
                  <span>4. Self-Assessment</span>
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}