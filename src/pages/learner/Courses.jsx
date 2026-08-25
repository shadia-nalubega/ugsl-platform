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
    <div className="min-h-screen bg-[#faf9ff]">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Courses</h1>

        <div className="flex flex-col gap-4">
          {categories.map((category) => {
            const Icon = categoryIcons[category.id] || BookOpen;

            return (
              <Link
                key={category.id}
                to={`/courses/${category.id}`}
                className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-xs p-4 hover:shadow-md hover:border-indigo-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {category.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}