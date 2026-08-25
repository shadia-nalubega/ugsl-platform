import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export default function LessonCard({ lesson }) {
  if (!lesson) return null;

  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-md hover:border-indigo-100 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-900 overflow-hidden">
          <img
            src={
              lesson.thumbnail ||
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            }
            alt={lesson.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Dynamic Card Content */}
        <div className="p-4 space-y-1">
          <h3 className="font-bold text-base text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {lesson.title}
          </h3>

          {lesson.description && (
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {lesson.description}
            </p>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-4 pb-4 pt-2 flex items-center justify-between text-xs border-t border-gray-50 mt-auto">
        <span className="text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-lg">
          {lesson.level || "Beginner"}
        </span>
        <span className="flex items-center gap-1 text-gray-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          {lesson.duration || "12 min"}
        </span>
      </div>
    </Link>
  );
}