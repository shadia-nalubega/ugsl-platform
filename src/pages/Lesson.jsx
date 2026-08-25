import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Sparkles,
  User,
  MessageSquare,
  HelpCircle,
  RefreshCw,
  Hand,
} from "lucide-react";
import { LESSONS } from "../data/lessons.js";
import Navbar from "../components/Navbar.jsx";

export default function Lesson() {
  const { lessonId } = useParams();
  const lesson = LESSONS.find((l) => l.id === lessonId);

  // Step wizard state: 1 = Situation, 2 = Breakdown, 3 = Challenge, 4 = Reflection
  const [step, setStep] = useState(1);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="px-8 py-20 text-center">
          <p className="text-xl font-semibold text-gray-900">Lesson not found.</p>
          <Link
            to="/Enjoying-UgSL"
            className="text-indigo-600 font-medium mt-4 inline-block hover:underline text-sm"
          >
            ← Back to all courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9ff]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Title placed above both columns */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wide mb-1">
            <Sparkles className="w-4 h-4" />
            Scenario-Based Lesson
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {lesson.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT COLUMN: Clean Video Player with Top-Aligned Image */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-sm border border-gray-200">
              <img
                src={lesson.thumbnail}
                alt={lesson.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-start gap-3 shadow-xs">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                <strong className="font-semibold text-indigo-900">Goal: </strong>
                {lesson.canDoStatement}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Sidebar Wizard */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm sticky top-6">
              {step === 1 && (
                <SituationSidebar lesson={lesson} onNext={() => setStep(2)} />
              )}
              {step === 2 && (
                <BreakdownSidebar lesson={lesson} onNext={() => setStep(3)} />
              )}
              {step === 3 && (
                <ChallengeSidebar lesson={lesson} onNext={() => setStep(4)} />
              )}
              {step === 4 && <AssessmentSidebar lesson={lesson} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// STEP 1: CONVERSATION EXCHANGE (Sidebar)
function SituationSidebar({ lesson, onNext }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold mb-1">
          Step 1 of 4
        </p>
        <h2 className="text-xl font-bold text-gray-900">Conversation Exchange</h2>
      </div>

      <div className="space-y-3">
        {lesson.dialogue?.map((item, idx) => {
          const isLearner = item.speaker.includes("You");
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl text-sm transition-all ${
                isLearner
                  ? "bg-indigo-50/70 border border-indigo-100 text-indigo-950 shadow-xs"
                  : "bg-gray-50 border border-gray-100 text-gray-800"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 text-gray-500">
                  <User className="w-3.5 h-3.5 text-indigo-600" />
                  {item.speaker}
                </span>
              </div>
              <p className="font-semibold text-sm sm:text-base text-gray-900 flex items-center gap-2">
                <Hand className="w-4 h-4 text-indigo-600 shrink-0" />
                "{item.text}"
              </p>
              <p className="text-xs text-indigo-600 mt-2 font-mono bg-white/80 px-2 py-1 rounded w-fit border border-indigo-100">
                UgSL: {item.ugslGloss}
              </p>
            </div>
          );
        })}
      </div>

      <button
        onClick={onNext}
        className="w-full bg-indigo-600 text-white font-semibold h-11 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
      >
        Learn the Building Blocks <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// STEP 2: VOCABULARY BREAKDOWN (Sidebar)
function BreakdownSidebar({ lesson, onNext }) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold mb-1">
          Step 2 of 4
        </p>
        <h2 className="text-xl font-bold text-gray-900">Key Building Blocks</h2>
      </div>

      <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
        {lesson.breakdownItems?.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col gap-1.5"
          >
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
              <Hand className="w-3.5 h-3.5 text-indigo-600" />
              {item.sign}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg font-medium border border-indigo-100/60 w-fit">
              <Sparkles className="w-3 h-3 text-indigo-500" /> {item.tip}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-full bg-indigo-600 text-white font-semibold h-11 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
      >
        Try Interactive Turn <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// STEP 3: INTERACTION CHALLENGE (Sidebar)
function ChallengeSidebar({ lesson, onNext }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider text-indigo-600 font-bold mb-1">
          Step 3 of 4
        </p>
        <h2 className="text-xl font-bold text-gray-900">Perform Your Turn</h2>
      </div>

      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          Partner asks:
        </p>
        <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
          <Hand className="w-4 h-4 text-indigo-600 shrink-0" />
          "{lesson.prompt?.partnerText}"
        </p>
      </div>

      <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-center space-y-1.5">
        <MessageSquare className="w-5 h-5 text-indigo-600 mx-auto" />
        <p className="text-xs font-semibold text-indigo-900 uppercase tracking-wider">
          Your Task
        </p>
        <p className="text-xs sm:text-sm font-bold text-gray-900">
          {lesson.prompt?.learnerTask}
        </p>
      </div>

      {revealed ? (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900 space-y-1">
          <p className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Model Answer
          </p>
          <p className="font-mono font-bold text-xs sm:text-sm">
            {lesson.prompt?.modelAnswer}
          </p>
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="w-full border border-indigo-200 text-indigo-600 font-semibold h-10 rounded-xl hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 cursor-pointer text-xs"
        >
          <Eye className="w-4 h-4" /> Reveal Answer
        </button>
      )}

      <button
        onClick={onNext}
        className="w-full bg-indigo-600 text-white font-semibold h-11 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
      >
        Self-Assess <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// STEP 4: SELF-ASSESSMENT (Sidebar)
function AssessmentSidebar({ lesson }) {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div className="space-y-5 text-center">
      <div>
        <div className="w-10 h-10 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 mb-2">
          <Sparkles className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">How did you do?</h2>
        <p className="text-gray-500 text-xs mt-1">
          Be honest! This updates your capability tracker.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <button
          onClick={() => setSelectedRating("confident")}
          className={`p-3 rounded-xl border text-left transition flex items-center gap-3 cursor-pointer ${
            selectedRating === "confident"
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <CheckCircle2
            className={`w-5 h-5 shrink-0 ${
              selectedRating === "confident" ? "text-emerald-500" : "text-gray-400"
            }`}
          />
          <div>
            <p className="font-bold text-xs sm:text-sm">Confident</p>
            <p className="text-[11px] text-gray-500">Ready for real conversations</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedRating("almost")}
          className={`p-3 rounded-xl border text-left transition flex items-center gap-3 cursor-pointer ${
            selectedRating === "almost"
              ? "border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/20"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <HelpCircle
            className={`w-5 h-5 shrink-0 ${
              selectedRating === "almost" ? "text-amber-500" : "text-gray-400"
            }`}
          />
          <div>
            <p className="font-bold text-xs sm:text-sm">Almost there</p>
            <p className="text-[11px] text-gray-500">Just need a little review</p>
          </div>
        </button>

        <button
          onClick={() => setSelectedRating("practice")}
          className={`p-3 rounded-xl border text-left transition flex items-center gap-3 cursor-pointer ${
            selectedRating === "practice"
              ? "border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20"
              : "border-gray-200 hover:bg-gray-50"
          }`}
        >
          <RefreshCw
            className={`w-5 h-5 shrink-0 ${
              selectedRating === "practice" ? "text-rose-500" : "text-gray-400"
            }`}
          />
          <div>
            <p className="font-bold text-xs sm:text-sm">Need practice</p>
            <p className="text-[11px] text-gray-500">Revisit the building blocks</p>
          </div>
        </button>
      </div>

      {selectedRating && (
        <div className="pt-2">
          <Link
            to="/Enjoying-UgSL"
            className="w-full bg-indigo-600 text-white font-semibold h-11 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all inline-flex items-center justify-center gap-2 text-sm"
          >
            <CheckCircle2 className="w-4 h-4" /> Save & Continue
          </Link>
        </div>
      )}
    </div>
  );
}