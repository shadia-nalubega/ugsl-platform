import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-lg">UgSL</p>
          <p className="text-sm mt-2 max-w-xs">
            Helping Uganda communicate, connect, and include — one sign at a
            time.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-2">Explore</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/dictionary">Dictionary</Link></li>
            <li><Link to="/community">Community</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-2">Account</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/auth/login">Log in</Link></li>
            <li><Link to="/auth/signup">Sign up</Link></li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} UgSL. All rights reserved.
      </p>
    </footer>
  );
}