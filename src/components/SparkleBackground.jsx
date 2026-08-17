const SPARKLES = [
  { top: "10%", left: "15%", size: 6, delay: "0s", duration: "6s" },
  { top: "25%", left: "80%", size: 4, delay: "1.2s", duration: "5s" },
  { top: "60%", left: "10%", size: 5, delay: "0.6s", duration: "7s" },
  { top: "75%", left: "70%", size: 8, delay: "2s", duration: "6.5s" },
  { top: "40%", left: "50%", size: 4, delay: "1.8s", duration: "5.5s" },
  { top: "85%", left: "30%", size: 6, delay: "0.3s", duration: "6.2s" },
];

export default function SparkleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px 2px rgba(99, 102, 241, 0.6)", // soft indigo glow
            animation: `sparkle-float ${s.duration} ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes sparkle-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-16px) scale(1.4); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}