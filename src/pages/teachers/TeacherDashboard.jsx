import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. Import your custom logo asset here (adjust path to match your project structure)
import logo from "../../assets/logo.png"; // or logo.svg / logo.jpeg

import {
  Plus,
  ChevronRight,
  Search,
  Bell,
  Menu,
  X,
  LayoutDashboard,
  Video,
  BookOpen,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function TeacherDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef2f6] flex flex-col text-slate-800 font-sans">
      {/* ================= UNIFIED TOP HEADER ================= */}
      <header className="h-16 bg-white border-b border-slate-200/80 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
        {/* Left: Mobile Toggle + Imported Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-slate-500 hover:text-slate-900 lg:hidden rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* IMPORTED LOGO CONTAINER */}
          <div 
            className="flex items-center gap-3 cursor-pointer select-none" 
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Portal Logo"
              className="h-9 w-auto max-w-[140px] object-contain"
            />
          </div>
        </div>

        {/* Center: Quick Search Bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search lessons, students, or signs..."
              className="w-full bg-slate-50 text-xs text-slate-800 pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Right: Actions & User Avatar */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
          </button>

          <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs border border-indigo-200">
              TR
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-800 leading-tight">
                Teacher Profile
              </p>
              <p className="text-[10px] text-slate-400">Instructor Mode</p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= BODY WRAPPER ================= */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ================= UNIFIED SIDEBAR ================= */}
        <aside
          className={`fixed lg:static top-16 left-0 z-40 h-[calc(100vh-4rem)] w-60 bg-white border-r border-slate-200/80 flex flex-col justify-between p-4 transition-transform duration-200 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          {/* Navigation Links */}
          <nav className="space-y-1">
            <NavItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              active={activeTab === "Dashboard"}
              onClick={() => setActiveTab("Dashboard")}
            />
            <NavItem
              icon={<Video size={18} />}
              label="Live Sessions"
              active={activeTab === "Live Sessions"}
              onClick={() => setActiveTab("Live Sessions")}
            />
            <NavItem
              icon={<BookOpen size={18} />}
              label="Course Modules"
              active={activeTab === "Course Modules"}
              onClick={() => setActiveTab("Course Modules")}
            />
            <NavItem
              icon={<Users size={18} />}
              label="Students & Marks"
              active={activeTab === "Students & Marks"}
              onClick={() => setActiveTab("Students & Marks")}
            />
            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
              active={activeTab === "Settings"}
              onClick={() => setActiveTab("Settings")}
            />
          </nav>

          {/* Bottom Sidebar Controls */}
          <div className="pt-4 border-t border-slate-100">
            <button className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition flex items-center gap-3 cursor-pointer">
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column (Schedule & Timetable) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  UgSL Timetable & Live Sessions
                </h2>
                <button
                  onClick={() => navigate("/teacher/create-lesson")}
                  className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer shadow-xs"
                >
                  <Plus size={15} /> Add Session
                </button>
              </div>

              {/* Date Selector Row */}
              <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl mb-6 text-xs text-slate-500 font-medium">
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Mon 07</span>
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Tue 08</span>
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Wed 09</span>
                <span className="bg-indigo-600 text-white font-bold px-3 py-1.5 rounded-lg shadow-xs">
                  Thu 10
                </span>
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Fri 11</span>
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Sat 12</span>
                <span className="cursor-pointer px-2 py-1 hover:text-slate-900">Sun 13</span>
              </div>

              {/* Timetable Items List */}
              <div className="space-y-3.5">
                <TimetableRow
                  level="UG1"
                  title="UgSL Greetings & Basics"
                  room="Video Studio 1"
                  time="8:00 am - 10:00 am"
                  tag="ASSIGNMENT"
                  tagBg="bg-amber-100 text-amber-700"
                />
                <TimetableRow
                  level="UG2"
                  title="Family & Kinship Signs"
                  room="Lab 2 (Practice)"
                  time="11:00 am - 12:00 pm"
                  tag="LIVE DEMO"
                  tagBg="bg-indigo-100 text-indigo-700"
                />
                <TimetableRow
                  level="UG1"
                  title="Ugandan Numbers & Currency"
                  room="Online Classroom"
                  time="02:00 pm - 03:00 pm"
                  tag="HOMEWORK"
                  tagBg="bg-purple-100 text-purple-700"
                />
                <TimetableRow
                  level="UG2"
                  title="Deaf Culture & History in Uganda"
                  room="Main Hall"
                  time="03:00 pm - 04:00 pm"
                  tag="ASSIGNMENT"
                  tagBg="bg-amber-100 text-amber-700"
                />
                <TimetableRow
                  level="ST"
                  title="Department Sign Review"
                  room="Conference Room"
                  time="04:00 pm - 05:00 pm"
                  tag="MEETING"
                  tagBg="bg-slate-100 text-slate-700"
                />
              </div>
            </div>

            {/* Right Column (Indicators & Tasks) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* KEY INDICATORS */}
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">Key Indicators</h2>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    This Week
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-4 rounded-xl shadow-xs">
                    <p className="text-xs font-semibold text-orange-100 uppercase tracking-wider">
                      Pending Review
                    </p>
                    <p className="text-3xl font-black mt-2">3</p>
                    <p className="text-[11px] text-orange-100 mt-1">-12% from last week</p>
                  </div>

                  <div className="bg-gradient-to-br from-rose-500 to-red-600 text-white p-4 rounded-xl shadow-xs">
                    <p className="text-xs font-semibold text-rose-100 uppercase tracking-wider">
                      Needs Correction
                    </p>
                    <p className="text-3xl font-black mt-2">1</p>
                    <p className="text-[11px] text-rose-100 mt-1">+25% last week</p>
                  </div>
                </div>
              </div>

              {/* TASKS QUEUE */}
              <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200/80 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900">UgSL Tasks & Modules</h2>
                  <div className="flex gap-2 text-xs font-medium text-slate-400">
                    <span className="text-indigo-600 font-bold underline cursor-pointer">
                      Assignments
                    </span>
                    <span>•</span>
                    <span className="hover:text-slate-600 cursor-pointer">Drafts</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <TaskItem
                    code="UG1"
                    title="Alphabet & Fingerspelling Quiz"
                    date="Monday, Dec 7th"
                    status="DONE"
                    statusBg="bg-indigo-100 text-indigo-700"
                  />
                  <TaskItem
                    code="UG2"
                    title="Review Emergency & Health Signs"
                    date="Today"
                    status="IN REVIEW"
                    statusBg="bg-amber-100 text-amber-700"
                  />
                  <TaskItem
                    code="UG2"
                    title="Record Common Expressions Video"
                    date="Today"
                    status="PENDING"
                    statusBg="bg-slate-100 text-slate-600"
                  />
                  <TaskItem
                    code="UG1"
                    title="UgSL Sentence Structure Intro"
                    date="Tomorrow"
                    status="DRAFT"
                    statusBg="bg-rose-100 text-rose-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

/* Helper Components */
function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold transition flex items-center gap-3 cursor-pointer ${
        active
          ? "bg-indigo-50 text-indigo-600"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <span className={active ? "text-indigo-600" : "text-slate-400"}>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function TimetableRow({ level, title, room, time, tag, tagBg }) {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-xl hover:bg-slate-50 transition border-l-4 border-indigo-600 bg-white border border-slate-100 shadow-2xs">
      <div className="flex items-center gap-3">
        <span className="font-bold text-slate-400 text-xs w-8">{level}</span>
        <div>
          <h4 className="font-bold text-slate-800 text-sm leading-snug">{title}</h4>
          <p className="text-xs text-slate-400">{room}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-semibold text-slate-600">{time}</p>
        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-1 ${tagBg}`}>
          {tag}
        </span>
      </div>
    </div>
  );
}

function TaskItem({ code, title, date, status, statusBg }) {
  return (
    <div className="flex items-center justify-between pt-2 pb-2 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-3">
        <span className="font-bold text-slate-400 text-xs">{code}</span>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${statusBg}`}>
              {status}
            </span>
          </div>
          <p className="text-xs text-slate-400">{date}</p>
        </div>
      </div>
      <ChevronRight size={16} className="text-slate-300 hover:text-indigo-600 cursor-pointer" />
    </div>
  );
}