import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, CheckCircle2, ArrowRight } from "lucide-react";

import Navbar from "../../components/Navbar.jsx";
import { categories } from "../../data/categories.js";
import { SIGN_EMOJIS } from "../../data/signEmojis.js";

export default function Lesson() {
  const { lessonId } = useParams();

  const [currentSignIndex, setCurrentSignIndex] = useState(0);

  // Find lesson inside all categories
  let lesson = null;

  for (const category of categories) {
    const found = category.lessons.find(
      (item) => item.id === lessonId
    );

    if (found) {
      lesson = found;
      break;
    }
  }

  // If lesson does not exist
  if (!lesson) {
    return (
      <>
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-gray-700">
            Lesson not found.
          </p>

          <Link
            to="/courses"
            className="inline-block mt-4 text-purple-600 font-medium"
          >
            ← Back to Courses
          </Link>
        </div>
      </>
    );
  }

  const signs = lesson.signs || [];

  const currentSign =
    signs.length > 0
      ? signs[currentSignIndex]
      : null;

  // Emoji is used only in the preview window
  const currentEmoji = currentSign
    ? SIGN_EMOJIS[currentSign] || ""
    : "";

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* BACK TO COURSES */}
        {/* ========================= */}

        <Link
          to="/courses"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
        >
          <ChevronLeft size={16} />
          Back to courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">

          {/* ========================= */}
          {/* SIGN PREVIEW */}
          {/* ========================= */}

          <section>
            <div className="relative aspect-video bg-purple-50 rounded-2xl overflow-hidden shadow-sm flex flex-col items-center justify-center">

              {/* Level */}
              <span className="absolute top-4 left-4 bg-white/90 text-purple-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                {lesson.level}
              </span>

              {/* Sign Emoji */}
              <div className="text-8xl mb-4 select-none">
                {currentEmoji}
              </div>

              {/* Current Sign Meaning */}
              {currentSign && (
                <>
                  <p className="text-xs uppercase tracking-wide text-purple-500 font-semibold">
                    Sign
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {currentSign}
                  </h2>

                  <p className="text-sm text-gray-400 mt-2">
                    Sign media coming soon
                  </p>
                </>
              )}
            </div>
          </section>

          {/* ========================= */}
          {/* LESSON INFORMATION */}
          {/* ========================= */}

          <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

            {/* Level + Duration */}
            <div className="flex items-center justify-between">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                {lesson.level}
              </span>

              {lesson.duration && (
                <span className="text-sm text-gray-400">
                  ⏱ {lesson.duration}
                </span>
              )}
            </div>

            {/* Lesson Title */}
            <h1 className="text-3xl font-bold text-gray-900 mt-5">
              {lesson.title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 mt-2 leading-relaxed">
              {lesson.description}
            </p>

            {/* ========================= */}
            {/* CURRENTLY LEARNING */}
            {/* ========================= */}

            {currentSign && (
              <div className="mt-7 p-5 bg-purple-50 rounded-xl">

                <p className="text-xs uppercase tracking-wide text-purple-500 font-semibold">
                  Currently Learning
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  {currentSign}
                </h2>

              </div>
            )}

            {/* ========================= */}
            {/* SIGNS IN THIS LESSON */}
            {/* ========================= */}

            {signs.length > 0 && (
              <div className="mt-7">

                <div className="flex items-center justify-between mb-3">

                  <p className="text-sm font-semibold text-gray-800">
                    Signs in this lesson
                  </p>

                  <span className="text-xs text-gray-400">
                    {signs.length} signs
                  </span>

                </div>

                <div className="space-y-2">

                  {signs.map((sign, index) => (
                    <button
                      key={sign}
                      onClick={() =>
                        setCurrentSignIndex(index)
                      }
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm text-left transition ${
                        index === currentSignIndex
                          ? "bg-purple-100 text-purple-700 font-medium"
                          : "bg-gray-50 text-gray-600 hover:bg-purple-50"
                      }`}
                    >

                      {/* Number */}
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                          index === currentSignIndex
                            ? "bg-purple-600 text-white"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {index + 1}
                      </span>

                      {/* Sign Meaning */}
                      <span className="flex-1 font-medium">
                        {sign}
                      </span>

                      {/* Selected Indicator */}
                      {index === currentSignIndex && (
                        <CheckCircle2
                          size={17}
                          className="text-purple-600 flex-shrink-0"
                        />
                      )}

                    </button>
                  ))}

                </div>
              </div>
            )}

          </aside>
        </div>

        {/* ========================= */}
        {/* PHRASES */}
        {/* ========================= */}

        {lesson.phrases?.length > 0 && (
          <section className="mt-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">

            <h2 className="text-lg font-bold text-gray-900">
              Phrases you'll learn
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">

              {lesson.phrases.map((phrase) => (
                <div
                  key={phrase}
                  className="flex items-center gap-2 text-gray-700 bg-gray-50 rounded-lg px-4 py-3"
                >

                  <CheckCircle2
                    size={17}
                    className="text-purple-500 flex-shrink-0"
                  />

                  <span>
                    {phrase}
                  </span>

                </div>
              ))}

            </div>
          </section>
        )}

        {/* ========================= */}
        {/* START QUIZ */}
        {/* ========================= */}

        <div className="mt-8 flex justify-end">

          <Link
            to={`/lesson/${lesson.id}/quiz`}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
          >
            Try the Quiz

            <ArrowRight size={18} />
          </Link>

        </div>

      </main>
    </>
  );
}