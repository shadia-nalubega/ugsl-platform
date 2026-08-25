import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Clock,
  CheckCircle,
  FileText,
  Plus,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  // Placeholder data for now.
  // Later this will come from the backend/database.
  const [lessons] = useState([
    {
      id: 1,
      title: "Greetings",
      category: "Greetings",
      level: "Beginner",
      status: "Published",
      learners: 42,
    },
    {
      id: 2,
      title: "Family",
      category: "Family",
      level: "Beginner",
      status: "Published",
      learners: 31,
    },
    {
      id: 3,
      title: "Numbers",
      category: "Numbers",
      level: "Beginner",
      status: "Pending Review",
      learners: 0,
    },
    {
      id: 4,
      title: "Introduction",
      category: "Greetings",
      level: "Beginner",
      status: "Draft",
      learners: 0,
    },
  ]);

  const publishedLessons = lessons.filter(
    (lesson) => lesson.status === "Published"
  ).length;

  const pendingLessons = lessons.filter(
    (lesson) => lesson.status === "Pending Review"
  ).length;

  const draftLessons = lessons.filter(
    (lesson) => lesson.status === "Draft"
  ).length;

  const totalLearners = lessons.reduce(
    (total, lesson) => total + lesson.learners,
    0
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <GraduationCap
                size={26}
                className="text-purple-600"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Teacher Dashboard
              </h1>

              <p className="text-gray-500 mt-1">
                Create, manage, and track your UgSL lessons.
              </p>
            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* QUICK ACTION */}
        {/* ========================= */}

        <section className="mb-8">

          <button
            onClick={() => navigate("/teacher/create-lesson")}
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
          >
            <Plus size={19} />
            Create New Lesson
          </button>

        </section>

        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {/* Total Lessons */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  My Lessons
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {lessons.length}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <BookOpen
                  size={24}
                  className="text-purple-600"
                />
              </div>

            </div>

          </div>

          {/* Published */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Published
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {publishedLessons}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle
                  size={24}
                  className="text-green-600"
                />
              </div>

            </div>

          </div>

          {/* Pending */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Pending Review
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {pendingLessons}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <Clock
                  size={24}
                  className="text-orange-600"
                />
              </div>

            </div>

          </div>

          {/* Learners */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Learners Reached
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {totalLearners}
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <GraduationCap
                  size={24}
                  className="text-blue-600"
                />
              </div>

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* MY LESSONS */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

          <div className="p-6 border-b border-gray-100">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  My Lessons
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Lessons you have created and their current status.
                </p>
              </div>

              <button
                onClick={() => navigate("/teacher/create-lesson")}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
              >
                Create Lesson
                <Plus size={16} />
              </button>

            </div>

          </div>

          {/* Lesson List */}

          <div className="divide-y divide-gray-100">

            {lessons.map((lesson) => (

              <div
                key={lesson.id}
                className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-50 transition"
              >

                {/* Lesson Information */}

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                    <FileText
                      size={21}
                      className="text-purple-600"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900">
                      {lesson.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {lesson.category} • {lesson.level}
                    </p>

                  </div>

                </div>

                {/* Status + Learners */}

                <div className="flex items-center gap-6">

                  <div className="text-sm text-gray-500">
                    {lesson.learners > 0
                      ? `${lesson.learners} learners`
                      : "No learners yet"}
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${
                      lesson.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : lesson.status === "Pending Review"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >

                    {lesson.status === "Published" && (
                      <CheckCircle size={13} />
                    )}

                    {lesson.status === "Pending Review" && (
                      <Clock size={13} />
                    )}

                    {lesson.status === "Draft" && (
                      <FileText size={13} />
                    )}

                    {lesson.status}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* DRAFTS */}
        {/* ========================= */}

        <section className="mt-8 bg-white border border-gray-100 rounded-2xl shadow-sm p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-bold text-gray-900">
                Draft Lessons
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Lessons that are still being prepared.
              </p>

            </div>

            <span className="text-2xl font-bold text-gray-900">
              {draftLessons}
            </span>

          </div>

          <button
            onClick={() => navigate("/teacher/create-lesson")}
            className="inline-flex items-center gap-2 mt-5 text-sm font-medium text-purple-600 hover:text-purple-700"
          >
            Continue Creating
            <ArrowRight size={16} />
          </button>

        </section>

      </main>
    </>
  );
}