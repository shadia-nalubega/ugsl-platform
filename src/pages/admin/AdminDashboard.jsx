import { useNavigate } from "react-router-dom";

import {
  Users,
  GraduationCap,
  BookOpen,
  Clock,
  CheckCircle,
  FileText,
  UserPlus,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

export default function AdminDashboard() {
  const navigate = useNavigate();

  // =========================
  // PLACEHOLDER ADMIN DATA
  // =========================

  const stats = [
    {
      title: "Total Learners",
      value: 128,
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Teachers",
      value: 12,
      icon: GraduationCap,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Total Lessons",
      value: 36,
      icon: BookOpen,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Pending Review",
      value: 5,
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const recentLessons = [
    {
      title: "Greetings",
      teacher: "Teacher Sarah",
      status: "Published",
    },
    {
      title: "Family",
      teacher: "Teacher John",
      status: "Published",
    },
    {
      title: "Numbers",
      teacher: "Teacher Grace",
      status: "Pending Review",
    },
    {
      title: "Introduction",
      teacher: "Teacher Mary",
      status: "Draft",
    },
  ];

  const activities = [
    {
      title: "New learner registered",
      description: "A new learner joined the platform.",
      time: "10 minutes ago",
    },
    {
      title: "Lesson submitted",
      description: "A teacher submitted a lesson for review.",
      time: "30 minutes ago",
    },
    {
      title: "Lesson approved",
      description: "The Greetings lesson was approved.",
      time: "1 hour ago",
    },
    {
      title: "Quiz activity recorded",
      description: "Learners completed a new quiz.",
      time: "2 hours ago",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="mb-8">

          <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
            <ShieldCheck size={18} />
            Admin Dashboard
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Welcome back, Admin!
          </h1>

          <p className="text-gray-500 mt-2">
            Manage learners, teachers, lessons, and platform activity.
          </p>

        </section>

        {/* ========================= */}
        {/* STATISTICS */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      {stat.title}
                    </p>

                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg}`}
                  >
                    <Icon
                      size={24}
                      className={stat.iconColor}
                    />
                  </div>

                </div>

              </div>
            );
          })}

        </section>

        {/* ========================= */}
        {/* LESSON MANAGEMENT */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Lesson Management
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Review and manage lessons submitted by teachers.
              </p>
            </div>

            {/* View All Lessons */}

            <button
              onClick={() => navigate("/admin/lessons")}
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
            >
              View All Lessons
              <ArrowRight size={16} />
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b border-gray-100">

                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">
                    Lesson
                  </th>

                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">
                    Teacher
                  </th>

                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">
                    Status
                  </th>

                </tr>
              </thead>

              <tbody>

                {recentLessons.map((lesson) => (

                  <tr
                    key={lesson.title}
                    className="border-b border-gray-50 last:border-0"
                  >

                    <td className="py-4 px-3">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center">
                          <FileText
                            size={18}
                            className="text-purple-600"
                          />
                        </div>

                        <span className="font-medium text-gray-900">
                          {lesson.title}
                        </span>

                      </div>

                    </td>

                    <td className="py-4 px-3 text-sm text-gray-500">
                      {lesson.teacher}
                    </td>

                    <td className="py-4 px-3">

                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
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

                        {lesson.status}

                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

        {/* ========================= */}
        {/* USER MANAGEMENT */}
        {/* ========================= */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Learners */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">
                <Users
                  size={22}
                  className="text-purple-600"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Learners
                </h2>

                <p className="text-sm text-gray-500">
                  Manage registered learners.
                </p>
              </div>

            </div>

            <div className="flex items-end justify-between mt-6">

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  128
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Registered learners
                </p>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700">
                Manage
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

          {/* Teachers */}

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <GraduationCap
                  size={22}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Teachers
                </h2>

                <p className="text-sm text-gray-500">
                  Manage teachers and their lessons.
                </p>
              </div>

            </div>

            <div className="flex items-end justify-between mt-6">

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  12
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Registered teachers
                </p>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700">
                Manage
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </section>

        {/* ========================= */}
        {/* RECENT ACTIVITY */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center">
              <Clock
                size={22}
                className="text-green-600"
              />
            </div>

            <div>

              <h2 className="text-xl font-bold text-gray-900">
                Recent Activity
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Recent activity across the platform.
              </p>

            </div>

          </div>

          <div className="space-y-5">

            {activities.map((activity) => (

              <div
                key={activity.title}
                className="flex gap-4"
              >

                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />

                <div className="flex-1">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">

                    <h3 className="font-medium text-gray-900">
                      {activity.title}
                    </h3>

                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {activity.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ========================= */}
        {/* QUICK ACTIONS */}
        {/* ========================= */}

        <section>

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Add Lesson */}

            <button
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <BookOpen
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Add Lesson
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Create a new lesson for the platform.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

            {/* Manage Users */}

            <button
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <UserPlus
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Manage Users
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                View and manage platform users.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

            {/* Review Lessons */}

            <button
              onClick={() => navigate("/admin/lessons")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >

              <Clock
                size={24}
                className="text-purple-600"
              />

              <h3 className="font-semibold text-gray-900 mt-3">
                Review Lessons
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Review lessons waiting for approval.
              </p>

              <ArrowRight
                size={18}
                className="text-purple-600 mt-4"
              />

            </button>

          </div>

        </section>

      </main>
    </>
  );
}