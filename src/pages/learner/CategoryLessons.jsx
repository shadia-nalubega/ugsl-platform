import Navbar from "../../components/Navbar.jsx";
import { useParams, useLocation, Link } from "react-router-dom";
import { categories } from "../../data/categories.js";

export default function CategoryLessons() {
  const { categoryId } = useParams();
  const location = useLocation();
  const highlightId = location.state?.highlightLessonId;

  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p>Category not found.</p>
          <Link to="/courses" className="text-purple-600 font-medium">← Back to Courses</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link to="/courses" className="text-sm text-purple-600 font-medium">← Back to Courses</Link>

        <h1 className="text-3xl font-bold mt-3 mb-8">{category.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {category.lessons.map((lesson) => {
            const isHighlighted = lesson.id === highlightId;

            return (
              <Link
                key={lesson.id}
                to={`/lesson/${lesson.id}`}
                className={`bg-white rounded-xl shadow p-3 relative block hover:shadow-md transition
                  ${isHighlighted ? "border-2 border-purple-600" : ""}`}
              >
                {isHighlighted && (
                  <span className="absolute -top-3 left-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Continue Learning
                  </span>
                )}
                <img
                  src="/src/assets/numbers.jpg"
                  alt={lesson.title}
                  className="aspect-video w-full object-cover rounded-lg mb-2"
                />
                <p className="text-xs text-purple-600 font-medium">{lesson.level}</p>
                <p className="text-sm font-medium">{lesson.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}