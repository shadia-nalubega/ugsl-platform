import { Link } from "react-router-dom";

export default function LessonCard({ lesson }) {
  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className="block bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="relative">
        <img
          src={lesson.thumbnail}
          alt={lesson.title}
          className="w-full h-50 object-cover"
        />
        {/* <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 rounded-full">
          {lesson.level}
        </span> */}
       
      </div>
      {/* <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">{lesson.title}</p>
          <span className="text-xs text-gray-400">⏱ {lesson.duration}</span>
        </div>
        <p className="text-sm text-gray-500">{lesson.description}</p>
      </div> */}
    </Link>
  );
}