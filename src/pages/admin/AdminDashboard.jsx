import { useNavigate } from "react-router-dom";

import {
  Users,
  GraduationCap,
  BookOpen,
  Clock,
  CheckCircle,
  FileText,
  Pencil,
  Trash2,
  UserPlus,
  FolderPlus,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

// Shared badge styling — mirrors the teacher dashboard/lesson detail so
// status colors never drift between the two sides of the app.
const STATUS_META = {
  Published: { icon: CheckCircle, text: "text-green-700", bg: "bg-green-100" },
  "Pending Review": { icon: Clock, text: "text-orange-700", bg: "bg-orange-100" },
  Draft: { icon: FileText, text: "text-gray-600", bg: "bg-gray-100" },
};

// Small icon+label for a pending edit/delete request on an
// already-published lesson — distinct from a brand-new submission.
const PENDING_CHANGE_META = {
  edit: { icon: Pencil, label: "Edit requested", text: "text-orange-700", bg: "bg-orange-50" },
  delete: { icon: Trash2, label: "Delete requested", text: "text-red-700", bg: "bg-red-50" },
};

export default function AdminDashboard() {
  const navigate = useNavigate();

  // =========================
  // PLACEHOLDER ADMIN DATA
  // =========================

  const totalLearners = 128;
  const totalTeachers = 12;
  const totalLessons = 36;

  const recentLessons = [
    { id: 1, title: "Greetings", teacher: "Teacher Sarah", status: "Published", pendingChange: null },
    { id: 2, title: "Family", teacher: "Teacher John", status: "Published", pendingChange: { type: "edit" } },
    { id: 3, title: "Numbers", teacher: "Teacher Grace", status: "Pending Review", pendingChange: null },
    { id: 4, title: "Introduction", teacher: "Teacher Mary", status: "Draft", pendingChange: null },
    { id: 5, title: "Colors", teacher: "Teacher John", status: "Published", pendingChange: { type: "delete" } },
  ];

  // Everything that needs an Admin decision: new submissions AND
  // pending edit/delete requests on already-published lessons.
  const needsReviewCount =
    recentLessons.filter((l) => l.status === "Pending Review").length +
    recentLessons.filter((l) => l.pendingChange).length;

  const stats = [
    {
      title: "Total Learners",
      value: totalLearners,
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      onClick: () => navigate("/admin/learners"),
    },
    {
      title: "Total Teachers",
      value: totalTeachers,
      icon: GraduationCap,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      onClick: () => navigate("/admin/teachers"),
    },
    {
      title: "Total Lessons",
      value: totalLessons,
      icon: BookOpen,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      onClick: () => navigate("/admin/lessons"),
    },
    {
      title: "Needs Review",
      value: needsReviewCount,
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      onClick: () => navigate("/admin/review-queue"),
    },
  ];

  const activities = [
    { title: "New learner registered", description: "A new learner joined the platform.", time: "10 minutes ago" },
    { title: "Lesson submitted", description: "A teacher submitted a lesson for review.", time: "30 minutes ago" },
    { title: "Lesson approved", description: "The Greetings lesson was approved.", time: "1 hour ago" },
    { title: "Quiz activity recorded", description: "Learners completed a new quiz.", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/60 via-slate-50 to-slate-50">
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
        {/* STATISTICS  →  now clickable */}
        {/* ========================= */}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <button
                key={stat.title}
                onClick={stat.onClick}
                className="text-left bg-white border border-gray-100 rounded-2xl shadow-sm p-5 hover:border-purple-300 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.iconBg}`}
                  >
                    <Icon size={24} className={stat.iconColor} />
                  </div>
                </div>
              </button>
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
                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">Lesson</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">Teacher</th>
                  <th className="py-3 px-3 text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentLessons.map((lesson) => {
                  const meta = STATUS_META[lesson.status];
                  const StatusIcon = meta.icon;
                  const changeMeta = lesson.pendingChange
                    ? PENDING_CHANGE_META[lesson.pendingChange.type]
                    : null;
                  const ChangeIcon = changeMeta?.icon;

                  return (
                    <tr
                      key={lesson.id}
                      onClick={() => navigate(`/admin/lessons/${lesson.id}`)}
                      className="border-b border-gray-50 last:border-0 cursor-pointer hover:bg-gray-50 transition"
                    >
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                            <FileText size={18} className="text-purple-600" />
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
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.text}`}
                          >
                            <StatusIcon size={13} />
                            {lesson.status}
                          </span>

                          {changeMeta && (
                            <span
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${changeMeta.bg} ${changeMeta.text}`}
                            >
                              <ChangeIcon size={13} />
                              {changeMeta.label}
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
                <Users size={22} className="text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Learners</h2>
                <p className="text-sm text-gray-500">Manage registered learners.</p>
              </div>
            </div>

            <div className="flex items-end justify-between mt-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">{totalLearners}</p>
                <p className="text-sm text-gray-500 mt-1">Registered learners</p>
              </div>

              <button
                onClick={() => navigate("/admin/learners")}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
              >
                Manage
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Teachers */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center">
                <GraduationCap size={22} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Teachers</h2>
                <p className="text-sm text-gray-500">Manage teachers and their lessons.</p>
              </div>
            </div>

            <div className="flex items-end justify-between mt-6">
              <div>
                <p className="text-3xl font-bold text-gray-900">{totalTeachers}</p>
                <p className="text-sm text-gray-500 mt-1">Registered teachers</p>
              </div>

              <button
                onClick={() => navigate("/admin/teachers")}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700"
              >
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
              <Clock size={22} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <p className="text-sm text-gray-500 mt-1">
                Recent activity across the platform.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {activities.map((activity) => (
              <div key={activity.title} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-medium text-gray-900">{activity.title}</h3>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================= */}
        {/* QUICK ACTIONS */}
        {/* ========================= */}
        {/* Only genuinely new actions here — browsing/reviewing already
            has a home above (stat cards + View All Lessons), so this
            section no longer repeats them. */}

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/admin/lessons/new")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >
              <BookOpen size={24} className="text-purple-600" />
              <h3 className="font-semibold text-gray-900 mt-3">Add Lesson</h3>
              <p className="text-sm text-gray-500 mt-1">
                Create a new lesson for the platform.
              </p>
              <ArrowRight size={18} className="text-purple-600 mt-4" />
            </button>

            <button
              onClick={() => navigate("/admin/categories/new")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >
              <FolderPlus size={24} className="text-purple-600" />
              <h3 className="font-semibold text-gray-900 mt-3">Add Category</h3>
              <p className="text-sm text-gray-500 mt-1">
                Create a new lesson category.
              </p>
              <ArrowRight size={18} className="text-purple-600 mt-4" />
            </button>

            <button
              onClick={() => navigate("/admin/teachers/invite")}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-left hover:border-purple-200 hover:shadow-md transition"
            >
              <UserPlus size={24} className="text-purple-600" />
              <h3 className="font-semibold text-gray-900 mt-3">Invite Teacher</h3>
              <p className="text-sm text-gray-500 mt-1">
                Create a new Teacher account.
              </p>
              <ArrowRight size={18} className="text-purple-600 mt-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}