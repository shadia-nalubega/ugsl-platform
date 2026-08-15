import LessonCard from "./LessonCards.jsx";
import greetings from "../assets/greetings.jpg";
import family from "../assets/family.jpg";
import numbers from "../assets/numbers.jpg";

const POPULAR_LESSONS = [
  {
    title: "1. Greetings",
    level: "Beginner",
    duration: "8 min",
    description: "Learn common greetings",
    thumbnail: greetings,   // ← was "/lessons/greetings.jpg"
  },
  {
    title: "2. Family",
    level: "Beginner",
    duration: "10 min",
    description: "Signs about family members",
    thumbnail: family,      // ← was "/lessons/family.jpg"
  },
  {
    title: "3. Numbers",
    level: "Beginner",
    duration: "12 min",
    description: "Learn numbers 1 - 20",
    thumbnail: numbers,     // ← was "/lessons/numbers.jpg"
  },
];

export default function PopularLessons() {
  return (
    <section className="px-8 py-12">
      <p className="text-indigo-600 font-semibold text-sm">START HERE</p>
      <h2 className="text-3xl font-bold mt-1">Popular Lessons</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        Begin your journey with our most loved lessons for beginners.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {POPULAR_LESSONS.map((lesson) => (
          <LessonCard key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}