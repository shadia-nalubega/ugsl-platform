import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import { categories } from "../../data/categories.js";

const OVERVIEW_DURATION = 30; // seconds

export default function Lesson() {
  const { lessonId } = useParams();
  const [showingOverview, setShowingOverview] = useState(true);
  const [currentSignIndex, setCurrentSignIndex] = useState(0);

  // Find the lesson across all categories
  let lesson = null;
  for (const category of categories) {
    const found = category.lessons.find((l) => l.id === lessonId);
    if (found) {
      lesson = found;
      break;
    }
  }

  useEffect(() => {
    setShowingOverview(true);
    const timer = setTimeout(() => setShowingOverview(false), OVERVIEW_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [lessonId]);

  if (!lesson) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p>Lesson not found.</p>
          <Link to="/courses" className="text-purple-600 font-medium">← Back to Courses</Link>
        </div>
      </>
    );
  }

  const signs = lesson.signs || [];

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/courses" className="text-sm text-gray-500 flex items-center gap-1 mb-4">
          ← Back to courses
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Video / Overview area */}
          <div className="md:col-span-2 bg-white rounded-xl shadow overflow-hidden">
            {showingOverview ? (
              <div className="relative aspect-video bg-purple-100 flex items-center justify-center">
                <span className="absolute top-4 left-4 bg-white/90 text-sm font-medium px-3 py-1 rounded-full">
                  {lesson.level}
                </span>
                <p className="text-purple-400 text-sm">Lesson overview — video starts shortly...</p>
              </div>
            ) : lesson.videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${lesson.videoId}?autoplay=1`}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                Video coming soon
              </div>
            )}
          </div>

          {/* Details panel */}
          <div className="bg-white rounded-xl shadow p-5">
            <span className="inline-block bg-purple-100 text-purple-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
              {lesson.level}
            </span>
            {lesson.duration && (
              <span className="text-xs text-gray-400 ml-2">⏱ {lesson.duration}</span>
            )}

            <h1 className="text-2xl font-bold mt-2 mb-1">{lesson.title}</h1>
            {lesson.description && (
              <p className="text-gray-500 text-sm mb-4">{lesson.description}</p>
            )}

            {signs.length > 0 && (
              <>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-purple-600 font-medium mb-1">CURRENTLY LEARNING</p>
                  <p className="font-semibold">{signs[currentSignIndex]}</p>
                </div>

                <p className="text-sm font-medium mb-2">
                  Signs in this lesson <span className="text-gray-400">({signs.length} signs)</span>
                </p>

                <div className="flex flex-col gap-2">
                  {signs.map((sign, index) => (
                    <button
                      key={sign}
                      onClick={() => setCurrentSignIndex(index)}
                      className={`flex items-center gap-3 text-left px-3 py-2 rounded-lg transition
                        ${index === currentSignIndex ? "bg-purple-100" : "hover:bg-gray-50"}`}
                    >
                      <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
                        {index + 1}
                      </span>
                      {sign}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  );
}