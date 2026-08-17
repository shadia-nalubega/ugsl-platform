import { Link } from "react-router-dom";
import LessonCard from "./LessonCards.jsx";
import greetings from "../assets/greetings.jpg";
import family from "../assets/family.jpg";
import numbers from "../assets/numbers.jpg";

const POPULAR_LESSONS = [
  {
    id: "greetings",
    title: "1. Greetings",
    level: "Beginner",
    duration: "8 min",
    description: "Learn common greetings",
    thumbnail: greetings,
  },
  {
    id: "family",
    title: "2. Family",
    level: "Beginner",
    duration: "10 min",
    description: "Signs about family members",
    thumbnail: family,
  },
  {
    id: "numbers",
    title: "3. Numbers",
    level: "Beginner",
    duration: "12 min",
    description: "Learn numbers 1 - 20",
    thumbnail: numbers,
  },
];

export default function PopularLessons() {
  return (
    <section className="px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Left: intro text + button */}
        <div className="md:w-1/4 flex-shrink-0">
          <p className="text-indigo-600 font-semibold text-sm">START HERE</p>
          <h2 className="text-3xl font-bold mt-1">Popular Lessons</h2>
          <p className="text-gray-500 mt-2">
            Begin your journey with our most loved lessons for beginners.
          </p>
          {/* <Link
            to="/courses"
            className="inline-flex items-center gap-1 mt-4 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50"
          >
            View All Courses →
          </Link> */}
        </div>

        {/* Right: lesson cards row + arrow */}
        <div className="flex items-center gap-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
            {POPULAR_LESSONS.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
          {/* <button
            aria-label="See more lessons"
            className="hidden md:flex w-9 h-9 bg-white shadow-sm rounded-full items-center justify-center flex-shrink-0"
          >
            →
          </button> */}
        </div>
      </div>
    </section>
  );
}