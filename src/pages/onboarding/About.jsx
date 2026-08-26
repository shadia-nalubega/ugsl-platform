import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  ArrowRight,
  CheckCircle2,
  Users,
  GraduationCap,
  Store,
  Sparkles,
  BookOpen,
  MapPin,
  Compass
} from "lucide-react";
import heroImg from "../../assets/hero.jpg";

const GOALS = [
  {
    id: "friends",
    icon: Users,
    title: "Meet Deaf Friends & Community",
    desc: "Connect naturally in social and community settings.",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Work in Education / Classroom",
    desc: "Support students and colleagues in educational environments.",
  },
  {
    id: "business",
    icon: Store,
    title: "Everyday Service & Business",
    desc: "Handle customer interactions and daily transactions smoothly.",
  },
];

const JOURNEYS = [
  {
    id: "beginner",
    title: "Beginner",
    subtitle: "New to UgSL",
    icon: Sparkles,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    subtitle: "Basic Signs",
    icon: BookOpen,
  },
  {
    id: "advanced",
    title: "Advanced",
    subtitle: "Fluent Flow",
    icon: Compass,
  },
];

export default function About() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [videoDone, setVideoDone] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("friends");
  const [journeyLevel, setJourneyLevel] = useState("beginner");
  const [location, setLocation] = useState("");

  function handlePlay() {
    videoRef.current?.play();
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ selectedGoal, journeyLevel, location });
    navigate("/lesson/introduction/overview");
  }

  return (
    <div className="min-h-screen bg-[#faf9ff] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* ================= LEFT SIDE (Video/Hero) ================= */}
          <section className="w-full h-full flex flex-col">
            <div className="relative bg-indigo-600 rounded-3xl overflow-hidden min-h-[340px] lg:min-h-full flex items-center justify-center shadow-sm border border-indigo-100">
              <video
                ref={videoRef}
                poster={heroImg}
                onEnded={() => setVideoDone(true)}
                className="w-full h-full object-cover absolute inset-0"
              />

              {!videoDone && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Play video preview"
                  className="relative z-10 w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl shadow-indigo-950/20 hover:scale-105 transition-all cursor-pointer group"
                >
                  <Play className="w-6 h-6 text-indigo-600 fill-indigo-600 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              )}

              {/* Overlay Badge */}
              {/* <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/50 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-gray-800 tracking-wide uppercase">
                  UgSL Interactive Onboarding
                </span>
              </div> */}
            </div>
          </section>

          {/* ================= RIGHT SIDE (Form) ================= */}
          <section className="w-full h-full flex flex-col">
            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                    Personalize Your Path
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2.5">
                    What is your primary goal?
                  </h1>
                  <p className="text-gray-500 mt-1 text-xs sm:text-sm leading-relaxed">
                    Select your objective and experience level to tailor your UgSL scenarios.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Goal Selection Cards */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      1. Communication Goal
                    </label>
                    <div className="space-y-2">
                      {GOALS.map((goal) => {
                        const selected = selectedGoal === goal.id;
                        const IconComponent = goal.icon;
                        return (
                          <button
                            key={goal.id}
                            type="button"
                            onClick={() => setSelectedGoal(goal.id)}
                            className={`w-full text-left p-3 rounded-2xl border-2 transition-all cursor-pointer ${
                              selected
                                ? "border-indigo-600 bg-indigo-50/50 text-indigo-950 shadow-xs"
                                : "border-gray-100 hover:border-indigo-200 text-gray-700 bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                    selected
                                      ? "bg-indigo-600 text-white"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-900">
                                    {goal.title}
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                                    {goal.desc}
                                  </p>
                                </div>
                              </div>
                              {selected && (
                                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Journey / Experience Level Selection Cards */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                      2. Select Your Journey (Experience Level)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {JOURNEYS.map((item) => {
                        const isSelected = journeyLevel === item.id;
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setJourneyLevel(item.id)}
                            className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                              isSelected
                                ? "border-indigo-600 bg-indigo-50/60 text-indigo-900 shadow-xs"
                                : "border-gray-100 hover:border-indigo-200 text-gray-600 bg-white"
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg mb-1 ${isSelected ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-500"}`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold block text-gray-900 leading-tight">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                              {item.subtitle}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Location Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider mb-1.5">
                      3. Location <span className="text-gray-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Kampala, Uganda"
                        className="w-full h-10 pl-9 pr-3.5 rounded-xl border border-gray-200 text-xs text-gray-800 placeholder-gray-400 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-50 transition bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 active:scale-[0.99] transition-all cursor-pointer"
                    >
                      Start Learning Scenario
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              </div>

              {/* Skip Link */}
              {!videoDone && (
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setVideoDone(true)}
                    className="text-xs text-gray-400 hover:text-indigo-600 underline transition cursor-pointer"
                  >
                    Skip video preview
                  </button>
                </div>
              )}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}