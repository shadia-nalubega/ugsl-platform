import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories.js";
import { BookOpen, MessageCircle, Building2, SpellCheck, Users } from "lucide-react";

const categoryIcons = {
  "language-fundamentals": BookOpen,
  "everyday-communication": MessageCircle,
  "essential-public-communication": Building2,
  "grammar": SpellCheck,
  "deaf-culture": Users,
};

export default function Courses() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Courses</h1>

        <div className="flex flex-col gap-4">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.id];

            return (
              <Link
                key={category.id}
                to={`/courses/${category.id}`}
                className="flex items-center gap-4 bg-white rounded-full shadow p-3 pr-6 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <Icon className="text-purple-400 flex-shrink-0" size={22} />

                <div className="flex-1">
                  <p className="font-semibold">{category.name}</p>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}