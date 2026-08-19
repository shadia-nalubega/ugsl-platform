import Navbar from "../../components/Navbar.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Flame, ArrowRight } from "lucide-react";
import celebrationImg from "../../assets/celebration.png"; // TEMP — swap for a signed celebration video later

const PARTICLE_COLORS = ["bg-purple-400", "bg-pink-400", "bg-yellow-400", "bg-teal-400", "bg-orange-400"];

export default function LessonComplete() {
  const location = useLocation();
  const navigate = useNavigate();

  const lessonTitle = location.state?.lessonTitle || "your lesson";
  const streak = location.state?.streak || 1;

  const particles = Array.from({ length: 30 }, (_, i) => {
    const angle = Math.random() * Math.PI - Math.PI / 2; // upward spread
    const distance = 100 + Math.random() * 150;
    return {
      id: i,
      tx: Math.cos(angle) * distance,
      ty: -Math.abs(Math.sin(angle) * distance) - 80,
      delay: Math.random() * 1.4,
      color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
    };
  });

  return (
    <>
      <Navbar />

      <div className="relative max-w-2xl mx-auto px-6 py-20 text-center overflow-hidden">

        {/* Burst layer — particles shoot up from center and fade */}
        <div className="absolute left-1/2 bottom-1/2 pointer-events-none">
          {particles.map((p) => (
            <span
              key={p.id}
              className={`absolute w-2 h-2 rounded-full ${p.color} animate-burst`}
              style={{
                "--tx": `${p.tx}px`,
                "--ty": `${p.ty}px`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* TEMP — swap for a real signed celebration video later */}
        <img
          src={celebrationImg}
          alt="Celebration"
          className="w-32 h-32 mx-auto mb-6 relative animate-bounce-gentle"
        />

        <h1 className="text-3xl font-bold mb-3 relative">Nice work!</h1>
        <p className="text-gray-500 text-lg mb-8 relative">
          You just finished <span className="font-medium text-gray-700">{lessonTitle}</span>
        </p>

        <div className="flex items-center justify-center gap-2 bg-orange-50 rounded-full py-3 px-6 mb-10 w-fit mx-auto relative">
          <Flame className="text-orange-500" size={20} />
          <span className="font-medium text-orange-600">
            {streak}-day streak — keep it going!
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center relative">
          <button
            onClick={() => navigate("/courses")}
            className="bg-purple-600 text-white rounded-full py-3 px-8 font-medium flex items-center justify-center gap-2 hover:bg-purple-700 transition"
          >
            Continue Learning
            <ArrowRight size={18} />
          </button>

          <Link
            to="/dashboard"
            className="text-purple-600 font-medium py-3 px-8"
          >
            Back to Dashboard
          </Link>
        </div>

      </div>
    </>
  );
}