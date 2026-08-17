export default function MagicalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute"
        style={{
          width: "700px",
          height: "700px",
          top: "-200px",
          left: "-100px",
          background: "radial-gradient(circle, #a5b4fc, transparent 70%)",
          opacity: 0.6,
          filter: "blur(70px)",
          animation: "drift-1 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          top: "10%",
          right: "-150px",
          background: "radial-gradient(circle, #c4b5fd, transparent 70%)",
          opacity: 0.55,
          filter: "blur(70px)",
          animation: "drift-2 7s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(150px, 100px); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-140px, 80px); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="drift"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}