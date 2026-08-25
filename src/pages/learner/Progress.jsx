import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Download,
  Lock,
  Trophy,
  TrendingUp,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

export default function Progress() {
  const navigate = useNavigate();

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
      icon: "🌱",
      earned: true,
    },
    {
      id: 2,
      title: "Greeting Master",
      description: "Complete the Greetings lesson.",
      icon: "👋",
      earned: true,
    },
    {
      id: 3,
      title: "Quiz Starter",
      description: "Complete your first quiz.",
      icon: "📝",
      earned: true,
    },
    {
      id: 4,
      title: "Five Day Streak",
      description: "Learn for five days in a row.",
      icon: "🔥",
      earned: true,
    },
    {
      id: 5,
      title: "Sign Collector",
      description: "Master 30 UgSL signs.",
      icon: "🤟",
      earned: false,
    },
    {
      id: 6,
      title: "Learning Champion",
      description: "Complete 10 lessons.",
      icon: "🏆",
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
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-5"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <TrendingUp
                size={25}
                className="text-purple-600"
              />
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

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">

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
                    className="text-purple-600"
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
                    className="h-full bg-purple-600 rounded-full"
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

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <BookOpen
              size={23}
              className="text-purple-600"
            />

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

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <span className="text-2xl">
              🤟
            </span>

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

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <Trophy
              size={23}
              className="text-orange-500"
            />

            <p className="text-sm text-gray-500 mt-4">
              Average Quiz Score
            </p>

            <p className="text-2xl font-bold text-gray-900 mt-1">
              {progress.averageScore}%
            </p>

          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <span className="text-2xl">
              🔥
            </span>

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

          <div className="flex items-center gap-3 mb-5">

            <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
              <Award
                size={23}
                className="text-yellow-600"
              />
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

            {badges.map((badge) => (

              <div
                key={badge.id}
                className={`bg-white border rounded-2xl p-6 shadow-sm ${
                  badge.earned
                    ? "border-yellow-100"
                    : "border-gray-100 opacity-70"
                }`}
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${
                      badge.earned
                        ? "bg-yellow-50"
                        : "bg-gray-100"
                    }`}
                  >
                    {badge.icon}
                  </div>

                  {badge.earned ? (
                    <CheckCircle
                      size={20}
                      className="text-green-500"
                    />
                  ) : (
                    <Lock
                      size={19}
                      className="text-gray-400"
                    />
                  )}

                </div>

                <h3 className="font-bold text-gray-900 mt-5">
                  {badge.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
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

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* CERTIFICATES */}
        {/* ========================= */}

        <section>

          <div className="flex items-center gap-3 mb-5">

            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
              <Trophy
                size={23}
                className="text-blue-600"
              />
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

            {certificates.map((certificate) => (

              <div
                key={certificate.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6"
              >

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Trophy
                      size={24}
                      className="text-blue-600"
                    />
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
                      className="h-full bg-blue-600 rounded-full"
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
                    className="inline-flex items-center gap-2 mt-5 bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
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

        {/* ========================= */}
        {/* MOTIVATION */}
        {/* ========================= */}

        <section className="mt-10 bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">

          <p className="text-2xl">
            🌟
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-3">
            Keep Going!
          </h2>

          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Every sign you learn brings you one step closer to communicating
            confidently in UgSL.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="mt-5 bg-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-purple-700 transition"
          >
            Continue Learning
          </button>

        </section>

      </main>
    </>
  );
}