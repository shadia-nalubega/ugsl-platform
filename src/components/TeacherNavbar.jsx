import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  HelpCircle,
  Plus,
  ChevronDown,
  LogOut,
  Menu,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function TeacherNavbar({ onToggleSidebar }) {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200/80 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
      {/* Left: Mobile Toggle, UgSL Logo & Branding */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition lg:hidden cursor-pointer"
        >
          <Menu size={20} />
        </button>

        {/* UgSL Logo */}
        <Link to="/teacher/dashboard" className="flex items-center gap-3">
          <img
            src={logo}
            alt="UgSL logo"
            className="w-40 h-30 object-contain"
          />
          {/* <div className="hidden sm:block border-l border-slate-200 pl-3">
            <span className="text-sm font-bold text-slate-900 tracking-tight block leading-none">
              UgSL Portal
            </span>
            <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wider">
              Teacher Suite
            </span>
          </div> */}
        </Link>
      </div>

      {/* Center: Search Bar */}
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-2.5 text-slate-400" size={15} />
        <input
          type="text"
          placeholder="Search signs, lessons, students..."
          className="bg-slate-100 pl-9 pr-4 py-1.5 rounded-lg text-xs text-slate-700 w-64 lg:w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      </div>

      {/* Right: Actions & Teacher Profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/teacher/create-lesson")}
          className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition shadow-xs cursor-pointer"
        >
          <Plus size={15} />
          <span className="hidden sm:inline">Create Lesson</span>
        </button>

        <div className="h-5 w-px bg-slate-200 mx-1"></div>

        <button
          title="Notifications"
          className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition relative cursor-pointer"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
        </button>

        <button
          title="Help & Support"
          className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition hidden sm:block cursor-pointer"
        >
          <HelpCircle size={18} />
        </button>

        {/* Teacher Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-100 transition cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs border border-indigo-200">
              TR
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50 text-xs">
              <div className="px-4 py-2 border-b border-slate-100">
                <p className="font-bold text-slate-800">UgSL Instructor</p>
                <p className="text-slate-400 text-[11px]">teacher@ugsl.org</p>
              </div>
              <button
                onClick={() => navigate("/teacher/settings")}
                className="w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Account Settings
              </button>
              <button
                onClick={() => navigate("/")}
                className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
              >
                <LogOut size={14} /> Switch to Student View
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}