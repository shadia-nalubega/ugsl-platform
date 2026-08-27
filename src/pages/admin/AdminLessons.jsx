import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function AdminLessons() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Placeholder lesson data.
  // This will later come from the backend/database.
  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: "Greetings",
      teacher: "Teacher Sarah",
      level: "Beginner",
      status: "Published",
    },
    {
      id: 2,
      title: "Family",
      teacher: "Teacher John",
      level: "Beginner",
      status: "Published",
    },
    {
      id: 3,
      title: "Numbers",
      teacher: "Teacher Grace",
      level: "Beginner",
      status: "Pending Review",
    },
    {
      id: 4,
      title: "Introduction",
      teacher: "Teacher Mary",
      level: "Beginner",
      status: "Draft",
    },
    {
      id: 5,
      title: "Communication",
      teacher: "Teacher David",
      level: "Intermediate",
      status: "Pending Review",
    },
  ]);

  // =========================
  // APPROVE LESSON
  // =========================

  const approveLesson = (id) => {
    setLessons((currentLessons) =>
      currentLessons.map((lesson) =>
        lesson.id === id
          ? {
              ...lesson,
              status: "Published",
            }
          : lesson
      )
    );
  };

  // =========================
  // REJECT LESSON
  // =========================

  const rejectLesson = (id) => {
    setLessons((currentLessons) =>
      currentLessons.map((lesson) =>
        lesson.id === id
          ? {
              ...lesson,
              status: "Rejected",
            }
          : lesson
      )
    );
  };

  // =========================
  // SEARCH LESSONS
  // =========================

  const filteredLessons = lessons.filter((lesson) => {
    const searchTerm = search.toLowerCase();

    return (
      lesson.title.toLowerCase().includes(searchTerm) ||
      lesson.teacher.toLowerCase().includes(searchTerm) ||
      lesson.status.toLowerCase().includes(searchTerm) ||
      lesson.level.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <button
            onClick={() => navigate("/admin/dashboard")}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-5"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <FileText
                size={25}
                className="text-purple-600"
              />
            </div>

            <div>

              <h1 className="text-3xl font-bold text-gray-900">
                Lesson Management
              </h1>

              <p className="text-gray-500 mt-1">
                Review, approve, and manage lessons submitted by teachers.
              </p>

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* SEARCH */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 mb-6">

          <div className="relative max-w-lg">

            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by lesson, teacher, level, or status..."
              className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            />

          </div>

        </section>

        {/* ========================= */}
        {/* LESSON TABLE */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

          {/* Table Header */}

          <div className="p-6 border-b border-gray-100">

            <h2 className="text-lg font-bold text-gray-900">
              All Lessons
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {filteredLessons.length} lessons found
            </p>

          </div>

          {/* Table */}

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-gray-50">

                <tr>

                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Lesson
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Teacher
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Level
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredLessons.map((lesson) => (

                  <tr
                    key={lesson.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition"
                  >

                    {/* Lesson */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                          <FileText
                            size={19}
                            className="text-purple-600"
                          />
                        </div>

                        <span className="font-medium text-gray-900">
                          {lesson.title}
                        </span>

                      </div>

                    </td>

                    {/* Teacher */}

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {lesson.teacher}
                    </td>

                    {/* Level */}

                    <td className="px-6 py-5">

                      <span className="inline-flex px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                        {lesson.level}
                      </span>

                    </td>

                    {/* Status */}

                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          lesson.status === "Published"
                            ? "bg-green-100 text-green-700"
                            : lesson.status === "Pending Review"
                              ? "bg-orange-100 text-orange-700"
                              : lesson.status === "Rejected"
                                ? "bg-red-100 text-red-700"
                                : "bg-gray-100 text-gray-600"
                        }`}
                      >

                        {lesson.status === "Published" && (
                          <CheckCircle size={13} />
                        )}

                        {lesson.status === "Pending Review" && (
                          <Clock size={13} />
                        )}

                        {lesson.status === "Rejected" && (
                          <XCircle size={13} />
                        )}

                        {lesson.status}

                      </span>

                    </td>

                    {/* Actions */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 flex-wrap">

                        {/* View */}

                        <button
                          onClick={() => {
                            alert(
                              `Viewing lesson: ${lesson.title}`
                            );
                          }}
                          className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200 transition"
                        >
                          <Eye size={14} />
                          View
                        </button>

                        {/* Approve */}

                        {lesson.status === "Pending Review" && (
                          <button
                            onClick={() =>
                              approveLesson(lesson.id)
                            }
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-green-100 text-green-700 text-xs font-medium hover:bg-green-200 transition"
                          >
                            <CheckCircle size={14} />
                            Approve
                          </button>
                        )}

                        {/* Reject */}

                        {lesson.status === "Pending Review" && (
                          <button
                            onClick={() =>
                              rejectLesson(lesson.id)
                            }
                            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-red-100 text-red-700 text-xs font-medium hover:bg-red-200 transition"
                          >
                            <XCircle size={14} />
                            Reject
                          </button>
                        )}

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* ========================= */}
          {/* NO RESULTS */}
          {/* ========================= */}

          {filteredLessons.length === 0 && (
            <div className="py-12 text-center">

              <FileText
                size={35}
                className="mx-auto text-gray-300"
              />

              <p className="text-gray-500 mt-3">
                No lessons found.
              </p>

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mt-3 text-sm text-purple-600 hover:text-purple-700"
                >
                  Clear search
                </button>
              )}

            </div>
          )}

        </section>

      </main>
    </>
  );
}