import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Clock,
  CheckCircle,
  FileText,
  Plus,
  ChevronRight,
  GraduationCap,
  Inbox,
} from "lucide-react";

import Navbar from "../../components/Navbar.jsx";

// Central place to control status colors/icons so the stat cards,
// filter pills, and row badges never drift out of sync with each other.
const STATUS_META = {
  Published: {
    icon: CheckCircle,
    text: "text-green-700",
    bg: "bg-green-100",
    solidBg: "bg-green-600",
  },
  "Pending Review": {
    icon: Clock,
    text: "text-orange-700",
    bg: "bg-orange-100",
    solidBg: "bg-orange-500",
  },
  Draft: {
    icon: FileText,
    text: "text-gray-600",
    bg: "bg-gray-100",
    solidBg: "bg-gray-500",
  },
};

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

  // "All" plus each status is now a real filter, not just a number to look at.
  const [activeFilter, setActiveFilter] = useState("All");

  const counts = useMemo(
    () => ({
      All: lessons.length,
      Published: lessons.filter((l) => l.status === "Published").length,
      "Pending Review": lessons.filter((l) => l.status === "Pending Review")
        .length,
      Draft: lessons.filter((l) => l.status === "Draft").length,
    }),
    [lessons]
  );

  const totalLearners = lessons.reduce(
    (total, lesson) => total + lesson.learners,
    0
  );

  const visibleLessons =
    activeFilter === "All"
      ? lessons
      : lessons.filter((lesson) => lesson.status === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/60 via-slate-50 to-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <GraduationCap size={26} className="text-purple-600" />
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

          <button
            onClick={() => navigate("/teacher/create-lesson")}
            className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-purple-700 transition shrink-0"
          >
            <Plus size={19} />
            Create New Lesson
          </button>
        </section>

        {/* ========================= */}
        {/* STATS  →  now double as filters */}
        {/* ========================= */}

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          role="tablist"
          aria-label="Filter lessons by status"
        >
          <StatFilterCard
            label="My Lessons"
            value={counts.All}
            icon={BookOpen}
            iconBg="bg-purple-100"
            iconColor="text-purple-600"
            active={activeFilter === "All"}
            onClick={() => setActiveFilter("All")}
          />

          <StatFilterCard
            label="Published"
            value={counts.Published}
            icon={CheckCircle}
            iconBg="bg-green-100"
            iconColor="text-green-600"
            active={activeFilter === "Published"}
            onClick={() => setActiveFilter("Published")}
          />

          <StatFilterCard
            label="Pending Review"
            value={counts["Pending Review"]}
            icon={Clock}
            iconBg="bg-orange-100"
            iconColor="text-orange-600"
            active={activeFilter === "Pending Review"}
            onClick={() => setActiveFilter("Pending Review")}
          />

          <StatFilterCard
            label="Learners Reached"
            value={totalLearners}
            icon={GraduationCap}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            // Not a filterable status — shown for context, not clickable as a filter.
            active={false}
            onClick={undefined}
          />
        </section>

        {/* ========================= */}
        {/* LESSON LIST */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {activeFilter === "All" ? "My Lessons" : activeFilter}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {activeFilter === "All"
                    ? "Lessons you have created and their current status."
                    : `${visibleLessons.length} lesson${
                        visibleLessons.length === 1 ? "" : "s"
                      }`}
                </p>
              </div>

              {activeFilter !== "All" && (
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-sm font-medium text-purple-600 hover:text-purple-700"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

          {visibleLessons.length === 0 ? (
            <EmptyState
              activeFilter={activeFilter}
              onCreate={() => navigate("/teacher/create-lesson")}
            />
          ) : (
            <div className="divide-y divide-gray-100">
              {visibleLessons.map((lesson) => {
                const meta = STATUS_META[lesson.status];
                const StatusIcon = meta.icon;

                return (
                  <button
                    key={lesson.id}
                    onClick={() =>
                      navigate(`/teacher/edit-lesson/${lesson.id}`)
                    }
                    className="w-full text-left p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-gray-50 transition group"
                  >
                    {/* Lesson info */}
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                        <FileText size={21} className="text-purple-600" />
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

                    {/* Status + learners + affordance */}
                    <div className="flex items-center gap-6 pl-15 md:pl-0">
                      <div className="text-sm text-gray-500">
                        {lesson.learners > 0
                          ? `${lesson.learners} learners`
                          : "No learners yet"}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium ${meta.bg} ${meta.text}`}
                      >
                        <StatusIcon size={13} />
                        {lesson.status}
                      </span>

                      <ChevronRight
                        size={18}
                        className="text-gray-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition"
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// One card, two jobs: shows a number AND acts as a filter tab.
// aria-pressed communicates the "toggled on" state to screen readers.
function StatFilterCard({
  label,
  value,
  icon: Icon,
  iconBg,
  iconColor,
  active,
  onClick,
}) {
  const clickable = Boolean(onClick);

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      aria-pressed={clickable ? active : undefined}
      className={`text-left bg-white border rounded-2xl shadow-sm p-5 transition ${
        clickable ? "hover:border-purple-300 hover:shadow-md cursor-pointer" : "cursor-default"
      } ${active ? "border-purple-500 ring-1 ring-purple-500" : "border-gray-100"}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>

        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}
        >
          <Icon size={24} className={iconColor} />
        </div>
      </div>
    </button>
  );
}

// Shown when a filter has zero matching lessons — including the
// very first time a teacher lands here with nothing created yet.
function EmptyState({ activeFilter, onCreate }) {
  const isAll = activeFilter === "All";

  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
        <Inbox size={26} className="text-gray-400" />
      </div>

      <h3 className="font-semibold text-gray-900">
        {isAll ? "No lessons yet" : `No lessons ${activeFilter.toLowerCase()}`}
      </h3>

      <p className="text-sm text-gray-500 mt-1 max-w-sm">
        {isAll
          ? "Create your first lesson to see it show up here."
          : "Lessons matching this status will appear here once you have some."}
      </p>

      {isAll && (
        <button
          onClick={onCreate}
          className="inline-flex items-center gap-2 mt-5 bg-purple-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-purple-700 transition"
        >
          <Plus size={16} />
          Create New Lesson
        </button>
      )}
    </div>
  );
}