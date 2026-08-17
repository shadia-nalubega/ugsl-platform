import { Globe, HeartHandshake, Landmark, Rocket } from "lucide-react";

// Edit this array to change the four reasons
const REASONS = [
  { icon: Globe, title: "Break Barriers", text: "Communicate without limits" },
  { icon: HeartHandshake, title: "Build Inclusion", text: "Support equality and accessibility" },
  { icon: Landmark, title: "Preserve Culture", text: "Keep Ugandan Sign Language alive" },
  { icon: Rocket, title: "Create Opportunities", text: "Open doors in education and careers" },
];

export default function Why() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-8 mb-5 mx-8 rounded-2xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <HeartHandshake className="w-8 h-8" />
        <h2 className="text-2xl font-bold mt-2">
          Why learn Ugandan Sign Language?
        </h2>
        <p className="text-indigo-100 mt-2">
          Because every sign you learn brings us closer to an inclusive and
          connected society.
        </p>
      </div>

      <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
        {REASONS.map((reason) => {
          const Icon = reason.icon;
          return (
            <div key={reason.title}>
              <Icon className="w-6 h-6" />
              <p className="font-semibold mt-2">{reason.title}</p>
              <p className="text-sm text-indigo-100">{reason.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}