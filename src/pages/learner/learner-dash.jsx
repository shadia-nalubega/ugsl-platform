import Navbar from "../../components/Navbar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Check } from "lucide-react";

export default function LearnerDash() {
  const navigate = useNavigate();

  const lesson = {
    title: "Hello / Good Morning",
    category: "Daily Greetings",
    videoId: "gE13r4Gwkog",
  };

  const signsMastered = 4;
  const totalSigns = 26;

  const steps = [
    { label: "Fundamentals", locked: false },
    { label: "Greetings", locked: false },
    { label: "Practice", locked: true },
    { label: "Quiz", locked: true },
    { label: "Next Lesson", locked: true },
  ];

  const [activeStep, setActiveStep] = useState("Greetings");

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold mb-6">
          Welcome Back, Learner!
        </h1>

        {/* Video */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              className="w-full aspect-video rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p className="mt-3 text-sm text-gray-600">
              Current Lesson: {lesson.title} ({lesson.category})
            </p>
          </div>
        </div>

        {/* Test button — remove once real completion trigger exists */}
        <button
          onClick={() => navigate("/lesson-complete", { state: { lessonTitle: lesson.title, streak: 3 } })}
          className="mt-6 text-sm text-purple-600 underline"
        >
          (Test) Mark lesson complete
        </button>

        {/* Progress Path */}
        <div className="flex items-center gap-3 mt-10 flex-wrap">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-3">

              <button
                onClick={() => !step.locked && setActiveStep(step.label)}
                disabled={step.locked}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${step.locked
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : step.label === activeStep
                      ? "bg-purple-600 text-white"
                      : "bg-green-100 text-green-700 hover:bg-green-200 cursor-pointer"
                  }`}
              >
                <span className="flex items-center gap-1">
                  {step.locked && <Lock size={14} />}
                  {!step.locked && step.label !== activeStep && <Check size={14} />}
                  {step.label}
                </span>
              </button>

              {index < steps.length - 1 && (
                <div className="h-0.5 bg-gray-300 w-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Lesson Steps */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Lesson Steps</h2>
          <div className="flex gap-4 overflow-x-auto">

            <div className="min-w-[200px] bg-white rounded-xl shadow p-3">
              <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-xs text-purple-600 font-medium">Beginner</p>
              <p className="text-sm font-medium">Get Started with Lesson 1</p>
            </div>

            <div className="min-w-[200px] bg-white rounded-xl shadow p-3">
              <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
              <p className="text-xs text-purple-600 font-medium">Beginner</p>
              <p className="text-sm font-medium">Get Started with Lesson 1</p>
            </div>

          </div>
        </div>

        {/* Overall Progress */}
        <div className="mt-10">
          <p className="font-semibold">
            UgSL Beginner Path: {Math.round((signsMastered / totalSigns) * 100)}% Complete
            ({signsMastered} / {totalSigns} signs mastered)
          </p>

          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              className="h-2 bg-purple-600 rounded-full"
              style={{ width: `${(signsMastered / totalSigns) * 100}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Progress saved to your account.
          </p>
        </div>

      </div>
    </>
  );
}