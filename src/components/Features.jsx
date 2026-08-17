import { Clapperboard, Target, LineChart } from "lucide-react";

const FEATURES = [
  {
    icon: Clapperboard,
    color: "bg-indigo-100 text-indigo-600",
    title: "Short & Clear Videos",
    description: "Watch native UgSL signers in short, easy-to-follow videos.",
  },
  {
    icon: Target,
    color: "bg-teal-100 text-indigo-600",
    title: "Practice & Improve",
    description: "Practice using your camera and get better every day.",
  },
  {
    icon: LineChart,
    color: "bg-amber-100 text-indigo-600",
    title: "Track Your Progress",
    description: "Stay motivated and track your learning journey.",
  },
];

export default function Features() {
  return (
    <div className="bg-white rounded-2xl shadow-lg grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
      {FEATURES.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="flex items-start gap-2 p-4">
            <span
              className={`w-8 h-10 flex-shrink-0 rounded-lg flex items-center justify-center ${feature.color}`}
            >
              <Icon className="w-5 h-5" />
            </span>
           <div>
  <p className="font-semibold text-indigo-600">{feature.title}</p>
  <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
</div>
          </div>
        );
      })}
    </div>
  );
}