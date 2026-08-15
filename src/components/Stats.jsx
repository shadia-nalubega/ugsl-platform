// Edit this array to change the numbers/labels
const STATS = [
  { icon: "👥", value: "1,200+", label: "Active Learners" },
  { icon: "🎬", value: "150+", label: "Video Lessons" },
  { icon: "📖", value: "1,000+", label: "Signs in Dictionary" },
  { icon: "🏅", value: "10+", label: "Course Certificates" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 py-10 border-y">
      {STATS.map((stat) => (
        <div key={stat.label} className="flex items-center gap-3">
          <span className="text-2xl bg-indigo-100 rounded-full p-3">
            {stat.icon}
          </span>
          <div>
            <p className="font-bold text-lg">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}