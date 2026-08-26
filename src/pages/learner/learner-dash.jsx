import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Check, Sparkles, Play, ArrowRight, Award, Hand, Video } from "lucide-react";
import Navbar from "../../components/Navbar.jsx";
import { LESSONS } from "../../data/lessons.js";

export default function LearnerDash() {
  const navigate = useNavigate();

  // Active lesson selected from your data file
  const currentLesson = LESSONS[0] || {
    id: "introducing-yourself",
    title: "Introducing Yourself to Someone New",
    category: "Social Foundations",
    videoId: "gE13r4Gwkog",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    canDoStatement: "Introduce yourself, share your name, and ask for someone else's name in UgSL."
  };

  const signsMastered = 4;
  const totalSigns = 26;
  const progressPercent = Math.round((signsMastered / totalSigns) * 100);

  // Updated 4-step wizard sequence to match Lesson.jsx
  const learningSteps = [
    { id: 1, label: "1. Situation Exchange", status: "completed" },
    { id: 2, label: "2. Key Building Blocks", status: "active" },
    { id: 3, label: "3. Practice Turn", status: "locked" },
    { id: 4, label: "4. Self-Assessment", status: "locked" },
  ];

  const [activeStepId, setActiveStepId] = useState(2);

  return (
    <div className="min-h-screen bg-[#faf9ff]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        
        {/* Welcome Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Learner Dashboard
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome Back, Learner!
            </h1>
          </div>

          {/* <Link
            to={`/lesson/${currentLesson.id}`}
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg shadow-indigo-500/20 transition-all text-sm cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            Resume Active Scenario
          </Link> */}
        </div>

        {/* Updated Grid: Main Video occupies 2/3 (col-span-2), Sidebar occupies 1/3 (col-span-1) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-10">
          
          {/* MAIN VIDEO SPEC (Occupies 2 Columns / Greater Space) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                    {currentLesson.category || "UgSL Practice"}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
                    {currentLesson.title}
                  </h2>
                </div>
                <button
                  onClick={() => navigate("/lesson-complete", { state: { lessonTitle: currentLesson.title, streak: 3 } })}
                  className="text-xs text-gray-400 hover:text-indigo-600 underline"
                >
                  (Test Complete)
                </button>
              </div>

              {/* Responsive Video Embed */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-sm border border-gray-200">
                <iframe
                  src={`https://www.youtube.com/embed/${currentLesson.videoId}`}
                  title={currentLesson.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Goal Highlight */}
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex items-start gap-3">
                <Hand className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-indigo-950 font-medium leading-relaxed">
                  <strong className="font-semibold text-indigo-900">Scenario Goal: </strong>
                  {currentLesson.canDoStatement}
                </p>
              </div>
            </div>
          </div>

          {/* SIDEBAR CARD (Occupies 1 Column / Compact Right Card) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Steps Progress Module */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm sticky top-6 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-600" />
                  Scenario Steps
                </h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  4 Steps Total
                </span>
              </div>

              <div className="space-y-2.5">
                {learningSteps.map((step) => {
                  const isLocked = step.status === "locked";
                  const isCompleted = step.status === "completed";
                  const isActive = step.id === activeStepId;

                  return (
                    <button
                      key={step.id}
                      onClick={() => !isLocked && setActiveStepId(step.id)}
                      disabled={isLocked}
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between text-left ${
                        isLocked
                          ? "bg-gray-50 text-gray-400 border border-gray-100 cursor-not-allowed"
                          : isActive
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                          : "bg-emerald-50 text-emerald-900 border border-emerald-200/60 hover:bg-emerald-100 cursor-pointer"
                      }`}
                    >
                      <span>{step.label}</span>
                      {isLocked && <Lock className="w-4 h-4 text-gray-400" />}
                      {isCompleted && <Check className="w-4 h-4 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => navigate(`/lesson/${currentLesson.id}`)}
                className="w-full bg-indigo-600 text-white font-semibold h-11 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer mt-2"
              >
                Launch Interactive Wizard <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Available Scenario Modules Grid */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-indigo-600" />
            Available Scenario Lessons
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {LESSONS.map((item) => (
              <Link
                key={item.id}
                to={`/lesson/${item.id}`}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-3 relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {item.category || "Beginner"}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-2 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>Interactive Flow</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

       
        {/* Overall Progress Tracker */}
<Link
  to="/progress"
  className="block bg-white rounded-3xl p-6 border border-gray-100 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all cursor-pointer group"
>
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
    <p className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
      UgSL Beginner Path: <span className="text-indigo-600">{progressPercent}% Complete</span>
    </p>
    <span className="text-xs text-gray-500 font-medium">
      {signsMastered} of {totalSigns} signs mastered
    </span>
  </div>

  <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
    <div
      className="h-full bg-indigo-600 rounded-full transition-all duration-500"
      style={{ width: `${progressPercent}%` }}
    />
  </div>

  <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
    <span>Progress is saved to your account automatically.</span>
    <span className="font-medium text-indigo-600 group-hover:underline">View Detailed Progress &rarr;</span>
  </div>
</Link>

      </main>
    </div>
  );
}