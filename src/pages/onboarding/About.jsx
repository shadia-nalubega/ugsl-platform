import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  GraduationCap,
  Store,
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

const LANGUAGES = ["English", "Luganda", "Swahili"];

export default function About() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [videoDone, setVideoDone] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("friends");
  const [language, setLanguage] = useState("English");
  const [location, setLocation] = useState("");

  function handlePlay() {
    videoRef.current?.play();
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ selectedGoal, language, location });
    navigate("/lesson/greetings");
  }

  return (
    <div className="min-h-screen bg-[#faf9ff] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <main className="max-w-5xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ================= LEFT SIDE (Video/Hero) ================= */}
          <section className="w-full h-full flex flex-col">
            <div className="relative bg-indigo-600 rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full flex items-center justify-center shadow-sm border border-indigo-100">
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
                  aria-label="Play video"
                  className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg shadow-indigo-900/20 hover:scale-105 transition-transform"
                >
                  <Play className="w-6 h-6 text-indigo-600 fill-indigo-600 ml-1" />
                </button>
              )}

              {/* <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 flex items-center gap-3 shadow-sm border border-white/40">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Welcome to UgSL
                  </p>
                  <p className="text-[11px] text-gray-500 leading-tight">
                    Watch the intro or select your main communication goal below.
                  </p>
                </div>
              </div> */}
            </div>
          </section>

          {/* ================= FORM SIDE ================= */}
          <section className="w-full h-full flex flex-col">
            <div className="w-full h-full bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between relative">
              <div>
                <div className="mb-5">
                  <p className="text-indigo-600 text-xs font-semibold uppercase tracking-wide">
                    Personalize your path
                  </p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                    What is your primary goal?
                  </h1>
                  <p className="text-gray-500 mt-1 text-xs leading-relaxed">
                    Choose what you want to achieve first with Ugandan Sign Language.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Goal Cards */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-2">
                      Communication Goal
                    </label>
                    <div className="space-y-2.5">
                      {GOALS.map((goal) => {
                        const selected = selectedGoal === goal.id;
                        const IconComponent = goal.icon;
                        return (
                          <button
                            key={goal.id}
                            type="button"
                            onClick={() => setSelectedGoal(goal.id)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              selected
                                ? "border-indigo-600 bg-indigo-50/70 text-indigo-900"
                                : "border-gray-200 hover:border-indigo-200 text-gray-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                    selected
                                      ? "bg-indigo-600 text-white"
                                      : "bg-gray-100 text-gray-600"
                                  }`}
                                >
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <p className="text-xs font-semibold">
                                    {goal.title}
                                  </p>
                                  <p className="text-[11px] text-gray-500 mt-0.5">
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

                  {/* Language Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Preferred Language
                    </label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50 transition bg-white"
                    >
                      {LANGUAGES.map((lang) => (
                        <option key={lang} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Location{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Kampala, Uganda"
                      className="w-full h-10 px-3.5 rounded-xl border border-gray-200 text-xs text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-50 transition"
                    />
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-11 bg-indigo-600 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                    >
                      Start Learning Scenario
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              {!videoDone && (
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    onClick={() => setVideoDone(true)}
                    className="text-xs text-gray-400 hover:text-indigo-600 underline transition"
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