import { useEffect } from "react";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  Flame,
  Hand,
  Lock,
  Sparkles,
  Trophy,
  TrendingUp,
  Zap,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

export default function Progress() {
  const navigate = useNavigate();

  // Intersection Observer for scroll fly-in effect
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const animatedElements = Array.from(document.querySelectorAll(".fly-in"));

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // =========================
  // PLACEHOLDER PROGRESS DATA
  // =========================

  const progress = {
    overall: 62,
    lessonsCompleted: 8,
    totalLessons: 13,
    signsMastered: 26,
    totalSigns: 40,
    quizzesCompleted: 7,
    averageScore: 84,
    learningStreak: 5,
  };

  // =========================
  // BADGES
  // =========================

  const badges = [
    {
      id: 1,
      title: "First Step",
      description: "Complete your first lesson.",
      icon: Sparkles,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      earned: true,
    },
    {
      id: 2,
      title: "Greeting Master",
      description: "Complete the Greetings lesson.",
      icon: Hand,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
      earned: true,
    },
    {
      id: 3,
      title: "Quiz Starter",
      description: "Complete your first quiz.",
      icon: Zap,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      earned: true,
    },
    {
      id: 4,
      title: "Five Day Streak",
      description: "Learn for five days in a row.",
      icon: Flame,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      earned: true,
    },
    {
      id: 5,
      title: "Sign Collector",
      description: "Master 30 UgSL signs.",
      icon: Hand,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      earned: false,
    },
    {
      id: 6,
      title: "Learning Champion",
      description: "Complete 10 lessons.",
      icon: Trophy,
      iconColor: "text-yellow-500",
      bgColor: "bg-yellow-50",
      earned: false,
    },
  ];

  // =========================
  // CERTIFICATES
  // =========================

  const certificates = [
    {
      id: 1,
      title: "UgSL Beginner Certificate",
      description:
        "Complete the Beginner UgSL learning path to unlock this certificate.",
      progress: 62,
      unlocked: false,
    },
    {
      id: 2,
      title: "Greetings Certificate",
      description:
        "Complete all lessons and quizzes in the Greetings category.",
      progress: 100,
      unlocked: true,
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50/50 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 relative">
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8 fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-5"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shadow-sm">
              <TrendingUp size={25} className="text-purple-600" />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                My Progress
              </h1>

              <p className="text-gray-500 mt-1">
                Track your learning progress, achievements, and certificates.
              </p>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* OVERALL PROGRESS */}
        {/* ========================= */}

        <section className="fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-6 mb-8 hover:scale-[1.01] hover:shadow-md">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Progress Circle */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <svg
                  className="w-40 h-40 -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    className="text-gray-100"
                  />

                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${progress.overall * 3.14} 314`}
                    className="text-purple-600 transition-all duration-1000 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">
                    {progress.overall}%
                  </span>

                  <span className="text-xs text-gray-500">
                    Complete
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Information */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                Beginner UgSL Path
              </h2>

              <p className="text-gray-500 mt-2">
                You are making good progress. Keep learning consistently to
                complete your Beginner path.
              </p>

              <div className="mt-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">
                    Learning progress
                  </span>

                  <span className="font-semibold text-purple-600">
                    {progress.overall}%
                  </span>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600 rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${progress.overall}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="fly-in opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-5 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
              <BookOpen size={20} className="text-purple-600" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Lessons Completed
            </p>

            <p className="text-2xl font-bold text-gray-900 mt-1">
              {progress.lessonsCompleted}
              <span className="text-sm text-gray-400 font-normal">
                {" "}
                / {progress.totalLessons}
              </span>
            </p>
          </div>

          <div className="fly-in opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-5 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Hand size={20} className="text-indigo-600" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Signs Mastered
            </p>

            <p className="text-2xl font-bold text-gray-900 mt-1">
              {progress.signsMastered}
              <span className="text-sm text-gray-400 font-normal">
                {" "}
                / {progress.totalSigns}
              </span>
            </p>
          </div>

          <div className="fly-in opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-5 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
              <Trophy size={20} className="text-amber-500" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Average Quiz Score
            </p>

            <p className="text-2xl font-bold text-gray-900 mt-1">
              {progress.averageScore}%
            </p>
          </div>

          <div className="fly-in opacity-0 translate-y-10 transition-all duration-700 delay-400 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-5 hover:scale-105 hover:shadow-md cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Flame size={20} className="text-orange-500" />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Learning Streak
            </p>

            <p className="text-2xl font-bold text-gray-900 mt-1">
              {progress.learningStreak} days
            </p>
          </div>
        </section>

        {/* ========================= */}
        {/* BADGES */}
        {/* ========================= */}

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5 fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Award size={23} className="text-yellow-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Badges
              </h2>

              <p className="text-sm text-gray-500">
                Achievements you have earned and goals you can unlock.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.id}
                  style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
                  className={`fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white/80 backdrop-blur-md border rounded-2xl p-6 shadow-sm hover:scale-[1.03] hover:shadow-md cursor-pointer ${
                    badge.earned
                      ? "border-yellow-100"
                      : "border-gray-100 opacity-60 bg-gray-50/50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        badge.earned ? badge.bgColor : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          badge.earned ? badge.iconColor : "text-gray-400"
                        }
                      />
                    </div>

                    {badge.earned ? (
                      <CheckCircle
                        size={20}
                        className="text-green-500"
                      />
                    ) : (
                      <Lock
                        size={18}
                        className="text-gray-400"
                      />
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 mt-5">
                    {badge.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {badge.description}
                  </p>

                  <p
                    className={`text-xs font-medium mt-4 ${
                      badge.earned
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {badge.earned ? "Badge Earned" : "Locked"}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================= */}
        {/* CERTIFICATES */}
        {/* ========================= */}

        <section>
          <div className="flex items-center gap-3 mb-5 fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
              <Trophy size={23} className="text-blue-600" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Certificates
              </h2>

              <p className="text-sm text-gray-500">
                Complete learning paths to earn certificates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {certificates.map((certificate, idx) => (
              <div
                key={certificate.id}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className="fly-in opacity-0 translate-y-10 transition-all duration-700 ease-out bg-white/80 backdrop-blur-md border border-gray-100/80 rounded-2xl shadow-sm p-6 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Trophy size={24} className="text-blue-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">
                      {certificate.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                      {certificate.description}
                    </p>
                  </div>
                </div>

                {/* Certificate Progress */}
                <div className="mt-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">
                      Progress
                    </span>

                    <span className="font-semibold text-blue-600">
                      {certificate.progress}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{
                        width: `${certificate.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Certificate Button */}
                {certificate.unlocked ? (
                  <button
                    onClick={() =>
                      alert(
                        `Certificate download for "${certificate.title}" will be available when certificates are connected to the backend.`
                      )
                    }
                    className="inline-flex items-center gap-2 mt-5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Download size={16} />
                    Download Certificate
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 mt-5 text-sm text-gray-400">
                    <Lock size={15} />
                    Complete the learning path to unlock
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}