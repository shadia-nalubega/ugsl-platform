import { NavLink, Link } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Video,
  Users,
  Calendar,
  Settings,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import logo from "../assets/logo.png";

const MAIN_NAV = [
  { label: "Dashboard", path: "/teacher/dashboard", icon: LayoutDashboard },
  { label: "My Lessons", path: "/teacher/lessons", icon: BookOpen },
  { label: "UgSL Dictionary", path: "/dictionary", icon: Video },
  { label: "Learners & Classes", path: "/teacher/learners", icon: Users },
  { label: "Live Timetable", path: "/teacher/timetable", icon: Calendar },
  { label: "Pending Reviews", path: "/teacher/reviews", icon: FileCheck },
];

const SECONDARY_NAV = [
  { label: "Settings", path: "/teacher/settings", icon: Settings },
  { label: "Help & Guides", path: "/teacher/help", icon: HelpCircle },
];

// Inside components/TeacherSidebar.jsx

export default function TeacherSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Light Sidebar Container */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo / Header area */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                U
              </div>
              <span className="font-bold text-slate-900 text-lg">UgSL Portal</span>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            <SidebarItem label="Dashboard" active />
            <SidebarItem label="Live Sessions" />
            <SidebarItem label="Course Modules" />
            <SidebarItem label="Students & Marks" />
            <SidebarItem label="Settings" />
          </nav>
        </div>

        {/* Optional User profile footer at bottom of sidebar */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm">
            TR
          </div>
          <div className="text-xs">
            <p className="font-bold text-slate-800">Teacher Portal</p>
            <p className="text-slate-400">Instructor Mode</p>
          </div>
        </div>
      </aside>
    </>
  );
}

/* Helper Item with Light Theme Styling */
function SidebarItem({ label, active }) {
  return (
    <button
      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between ${
        active
          ? "bg-indigo-50 text-indigo-600"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <span>{label}</span>
    </button>
  );
}