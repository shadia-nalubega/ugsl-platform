import Navbar from "../../components/Navbar.jsx";
import { useParams, useLocation, Link } from "react-router-dom";
import { categories } from "../../data/categories.js";

export default function CategoryLessons() {
  const { categoryId } = useParams();
  const location = useLocation();

  const highlightId = location.state?.highlightLessonId;

  const category = categories.find(
    (category) => category.id === categoryId
  );

  if (!category) {
    return (
      <>
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-gray-700">Category not found.</p>

          <Link
            to="/courses"
            className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-800"
          >
            ← Back to Courses
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Back button */}
        <Link
          to="/courses"
          className="inline-flex items-center text-sm text-purple-600 font-medium hover:text-purple-800 transition"
        >
          ← Back to Courses
        </Link>

        {/* Category heading */}
        <div className="mt-5 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {category.name}
          </h1>

          <p className="text-gray-500 mt-2 max-w-2xl">
            {category.description}
          </p>
        </div>

        {/* Lessons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {category.lessons.map((lesson) => {
            const isHighlighted = lesson.id === highlightId;

            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className={`group bg-white rounded-xl shadow p-3 relative block
                  hover:shadow-lg transition
                  ${
                    isHighlighted
                      ? "border-2 border-purple-600"
                      : "border border-transparent"
                  }`}
              >
                {/* Continue Learning badge */}
                {isHighlighted && (
                  <span className="absolute z-10 -top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    Continue Learning
                  </span>
                )}

                {/* Lesson thumbnail */}
                <div className="overflow-hidden rounded-lg mb-3">
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className="aspect-video w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Lesson information */}
                <p className="text-xs text-purple-600 font-medium">
                  {lesson.level}
                </p>

                <h2 className="text-sm font-semibold text-gray-900 mt-1">
                  {lesson.title}
                </h2>

                {lesson.description && (
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {lesson.description}
                  </p>
                )}

                {lesson.duration && (
                  <p className="text-xs text-gray-400 mt-3">
                    ⏱ {lesson.duration}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}