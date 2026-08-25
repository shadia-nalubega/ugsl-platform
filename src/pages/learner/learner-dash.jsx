import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Check,
  BookOpen,
  Trophy,
  Flame,
  Target,
  ArrowRight,
  Play,
  Award,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function LearnerDash() {
  const navigate = useNavigate();

  // =========================
  // CURRENT LESSON
  // =========================

  const lesson = {
    title: "Hello / Good Morning",
    category: "Daily Greetings",
    videoId: "gE13r4Gwkog",
    progress: 75,
  };

  // =========================
  // PROGRESS DATA
  // =========================

  const lessonsCompleted = 3;
  const signsMastered = 4;
  const totalSigns = 26;
  const quizAverage = 85;
  const streak = 3;
  const badgesEarned = 2;

  const overallProgress = Math.round(
    (signsMastered / totalSigns) * 100
  );

  // =========================
  // LEARNING PATH
  // =========================

  const steps = [
    {
      label: "Fundamentals",
      locked: false,
      completed: true,
    },
    {
      label: "Greetings",
      locked: false,
      completed: false,
    },
    {
      label: "Practice",
      locked: true,
      completed: false,
    },
    {
      label: "Quiz",
      locked: true,
      completed: false,
    },
    {
      label: "Next Lesson",
      locked: true,
      completed: false,
    },
  ];

  const [activeStep, setActiveStep] = useState("Greetings");

  // =========================
  // LESSON STEPS
  // =========================

  const lessonSteps = [
    {
      title: "Get Started",
      level: "Beginner",
      completed: true,
    },
    {
      title: "Learn the Signs",
      level: "Beginner",
      completed: false,
    },
    {
      title: "Practice",
      level: "Beginner",
      completed: false,
    },
    {
      title: "Take the Quiz",
      level: "Beginner",
      completed: false,
    },
  ];

  // =========================
  // ACHIEVEMENTS
  // =========================

  const achievements = [
    {
      title: "First Lesson",
      description: "Completed your first lesson",
      icon: "🏆",
    },
    {
      title: "Quiz Starter",
      description: "Completed your first quiz",
      icon: "⭐",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <p className="text-sm text-purple-600 font-semibold">
            Learner Dashboard
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
            Welcome Back, Learner!
          </h1>

          <p className="text-gray-500 mt-2">
            Continue your Ugandan Sign Language learning journey.
          </p>

        </section>

        {/* ========================= */}
        {/* PROGRESS SUMMARY */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          {/* Lessons Completed */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Lessons Completed
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {lessonsCompleted}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                <BookOpen
                  size={22}
                  className="text-purple-600"
                />
              </div>

            </div>

          </div>

          {/* Signs Mastered */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Signs Mastered
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {signsMastered}
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
                <Target
                  size={22}
                  className="text-green-600"
                />
              </div>

            </div>

          </div>

          {/* Quiz Average */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Quiz Average
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {quizAverage}%
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Trophy
                  size={22}
                  className="text-yellow-600"
                />
              </div>

            </div>

          </div>

          {/* Streak */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Current Streak
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  {streak} days
                </p>
              </div>

              <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center">
                <Flame
                  size={22}
                  className="text-orange-600"
                />
              </div>

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* CONTINUE LEARNING */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <p className="text-sm text-purple-600 font-semibold">
                Continue Learning
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {lesson.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {lesson.category}
              </p>

            </div>

            <button
              onClick={() => navigate("/courses")}
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
            >
              <Play size={18} />
              Continue Learning
            </button>

          </div>

          {/* Progress */}
          <div className="mt-6">

            <div className="flex justify-between text-sm mb-2">

              <span className="text-gray-500">
                Lesson progress
              </span>

              <span className="font-semibold text-gray-700">
                {lesson.progress}%
              </span>

            </div>

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">

              <div
                className="h-full bg-purple-600 rounded-full transition-all"
                style={{
                  width: `${lesson.progress}%`,
                }}
              />

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* CURRENT LESSON VIDEO */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Current Lesson
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Continue where you left off.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">

            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              className="w-full aspect-video rounded-xl"
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            <p className="mt-3 text-sm text-gray-600">
              {lesson.title} — {lesson.category}
            </p>

          </div>

        </section>

        {/* ========================= */}
        {/* LEARNING PATH */}
        {/* ========================= */}

        <section className="mb-8">

          <h2 className="text-xl font-bold text-gray-900">
            Your Learning Path
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Follow the path to continue progressing.
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">

            {steps.map((step, index) => (

              <div
                key={step.label}
                className="flex items-center gap-3"
              >

                <button
                  onClick={() =>
                    !step.locked &&
                    setActiveStep(step.label)
                  }
                  disabled={step.locked}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    step.locked
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : step.label === activeStep
                        ? "bg-purple-600 text-white"
                        : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >

                  <span className="flex items-center gap-1">

                    {step.locked && (
                      <Lock size={14} />
                    )}

                    {!step.locked &&
                      step.label !== activeStep && (
                        <Check size={14} />
                      )}

                    {step.label}

                  </span>

                </button>

                {index < steps.length - 1 && (
                  <div className="h-0.5 bg-gray-200 w-8" />
                )}

              </div>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* LESSON STEPS */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Lesson Steps
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Complete each step to progress.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {lessonSteps.map((step, index) => (

              <div
                key={step.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4"
              >

                <div className="aspect-video bg-purple-50 rounded-xl flex items-center justify-center mb-4">

                  {step.completed ? (
                    <Check
                      size={38}
                      className="text-green-500"
                    />
                  ) : (
                    <BookOpen
                      size={38}
                      className="text-purple-300"
                    />
                  )}

                </div>

                <p className="text-xs text-purple-600 font-medium">
                  {step.level}
                </p>

                <h3 className="text-sm font-semibold text-gray-900 mt-1">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {step.completed
                    ? "Completed"
                    : `Step ${index + 1}`}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* OVERALL PROGRESS */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-xl font-bold text-gray-900">
                UgSL Beginner Path
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {signsMastered} of {totalSigns} signs mastered
              </p>

            </div>

            <span className="text-2xl font-bold text-purple-600">
              {overallProgress}%
            </span>

          </div>

          <div className="w-full h-3 bg-gray-100 rounded-full mt-5 overflow-hidden">

            <div
              className="h-full bg-purple-600 rounded-full transition-all"
              style={{
                width: `${overallProgress}%`,
              }}
            />

          </div>

          <p className="text-sm text-gray-500 mt-3">
            Progress saved to your account.
          </p>

        </section>

        {/* ========================= */}
        {/* ACHIEVEMENTS */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Achievements
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Keep learning to unlock more badges.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Award size={18} />
              {badgesEarned} earned
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {achievements.map((achievement) => (

              <div
                key={achievement.title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex items-center gap-4"
              >

                <div className="text-4xl">
                  {achievement.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {achievement.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* QUICK ACTIONS */}
        {/* ========================= */}

        <section>

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <button
              onClick={() => navigate("/courses")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <BookOpen
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Browse Courses
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Explore more UGSL lessons.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

            <button
              onClick={() => navigate("/practice")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <Target
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Practice
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Practice the signs you have learned.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

            <button
              onClick={() => navigate("/dictionary")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <BookOpen
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Dictionary
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Look up UGSL signs and meanings.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

          </div>

        </section>

      </main>
    </>
  );
}