import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";
import { SIGN_EMOJIS } from "../../data/signEmojis.js";

const PRACTICE_QUESTIONS = [
  {
    question: "Which meaning does this sign represent?",
    sign: "Hello",
    options: ["Hello", "Good morning", "Goodbye", "How are you?"],
  },
  {
    question: "Which meaning does this sign represent?",
    sign: "Good morning",
    options: ["Goodbye", "Good morning", "Hello", "How are you?"],
  },
  {
    question: "Which meaning does this sign represent?",
    sign: "How are you?",
    options: ["Hello", "Goodbye", "How are you?", "Good morning"],
  },
  {
    question: "Which meaning does this sign represent?",
    sign: "Goodbye",
    options: ["Good morning", "Hello", "How are you?", "Goodbye"],
  },
  {
    question: "Which meaning does this sign represent?",
    sign: "Nice to meet you",
    options: [
      "Goodbye",
      "Nice to meet you",
      "Hello",
      "How are you?",
    ],
  },
];

export default function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = PRACTICE_QUESTIONS[currentIndex];

  const emoji = SIGN_EMOJIS[currentQuestion.sign] || "";

  function handleAnswer(answer) {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answer);

    if (answer === currentQuestion.sign) {
      setScore((currentScore) => currentScore + 1);
    }
  }

  function handleNext() {
    if (currentIndex === PRACTICE_QUESTIONS.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
  }

  function restartPractice() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setCompleted(false);
  }

  if (completed) {
    return (
      <>
        <Navbar />

        <main className="max-w-3xl mx-auto px-6 py-12">

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
              <CheckCircle2
                size={34}
                className="text-purple-600"
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mt-5">
              Practice Complete!
            </h1>

            <p className="text-gray-500 mt-2">
              You completed all the practice questions.
            </p>

            <div className="mt-6 bg-purple-50 rounded-xl p-5">

              <p className="text-sm text-purple-600 font-medium">
                Your Score
              </p>

              <p className="text-4xl font-bold text-purple-700 mt-1">
                {score} / {PRACTICE_QUESTIONS.length}
              </p>

            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">

              <button
                onClick={restartPractice}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
              >
                <RotateCcw size={17} />
                Practice Again
              </button>

              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
              >
                Back to Dashboard
              </Link>

            </div>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* Back */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        {/* Header */}
        <section className="mb-8">

          <p className="text-sm font-semibold text-purple-600">
            UgSL Practice
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-1">
            Practice Your Signs
          </h1>

          <p className="text-gray-500 mt-2">
            Look at the sign and choose the meaning you think is correct.
          </p>

        </section>

        {/* Progress */}
        <div className="flex items-center justify-between mb-3">

          <span className="text-sm text-gray-500">
            Question {currentIndex + 1} of {PRACTICE_QUESTIONS.length}
          </span>

          <span className="text-sm font-medium text-purple-600">
            Score: {score}
          </span>

        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
          <div
            className="h-2 bg-purple-600 rounded-full transition-all"
            style={{
              width: `${
                ((currentIndex + 1) /
                  PRACTICE_QUESTIONS.length) *
                100
              }%`,
            }}
          />
        </div>

        {/* Practice Card */}
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">

          {/* Question */}
          <h2 className="text-xl font-bold text-gray-900 text-center">
            {currentQuestion.question}
          </h2>

          {/* Sign Preview */}
          <div className="mt-8 bg-purple-50 rounded-2xl min-h-[230px] flex flex-col items-center justify-center">

            {emoji && (
              <div className="text-8xl select-none">
                {emoji}
              </div>
            )}

            <p className="text-sm text-gray-400 mt-4">
              Identify this sign
            </p>

          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            {currentQuestion.options.map((option) => {

              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.sign;

              let buttonStyle =
                "border-gray-200 bg-white hover:border-purple-300 hover:bg-purple-50";

              if (selectedAnswer !== null) {

                if (isCorrect) {
                  buttonStyle =
                    "border-green-300 bg-green-50 text-green-700";
                } else if (isSelected) {
                  buttonStyle =
                    "border-red-300 bg-red-50 text-red-700";
                } else {
                  buttonStyle =
                    "border-gray-100 bg-gray-50 text-gray-400";
                }
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full border-2 rounded-xl p-4 text-left transition ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">

                    <span className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold">
                      {String.fromCharCode(
                        65 +
                          currentQuestion.options.indexOf(
                            option
                          )
                      )}
                    </span>

                    <span className="font-medium">
                      {option}
                    </span>

                  </div>
                </button>
              );
            })}

          </div>

          {/* Feedback */}
          {selectedAnswer !== null && (
            <div className="mt-6">

              {selectedAnswer === currentQuestion.sign ? (
                <div className="bg-green-50 text-green-700 rounded-xl p-4">
                  <p className="font-semibold">
                    Correct!
                  </p>

                  <p className="text-sm mt-1">
                    Great job. You identified the sign correctly.
                  </p>
                </div>
              ) : (
                <div className="bg-red-50 text-red-700 rounded-xl p-4">
                  <p className="font-semibold">
                    Not quite.
                  </p>

                  <p className="text-sm mt-1">
                    The correct meaning is{" "}
                    <strong>{currentQuestion.sign}</strong>.
                  </p>
                </div>
              )}

            </div>
          )}

          {/* Next */}
          {selectedAnswer !== null && (
            <div className="flex justify-end mt-6">

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
              >
                {currentIndex ===
                PRACTICE_QUESTIONS.length - 1
                  ? "Finish Practice"
                  : "Next"}

                <ArrowRight size={18} />
              </button>

            </div>
          )}

        </section>

      </main>
    </>
  );
}