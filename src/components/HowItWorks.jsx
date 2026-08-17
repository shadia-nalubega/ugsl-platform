// Edit this array to change the steps
const STEPS = [
  {
    icon: "🗂️",
    title: "Choose a Category",
    description: "Pick a topic you want to learn.",
  },
  {
    icon: "▶️",
    title: "Watch & Learn",
    description: "Watch short videos and learn the signs.",
  },
  {
    icon: "📷",
    title: "Practice",
    description: "Practice using your camera and build confidence.",
  },
  {
    icon: "📊",
    title: "Track Progress",
    description: "Take quizzes and track your improvement.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-8 py-12 text-center">
      <h2 className="text-3xl font-bold">How UgSL Works</h2>
      <p className="text-gray-500 mt-2">
        Simple steps to start your sign language journey.
      </p>

      <div className="grid md:grid-cols-4 gap-8 mt-10 relative">
        {STEPS.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center">
            <span className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">
              {step.icon}
            </span>

            <div className="flex items-center gap-2 mt-4">
              <span className="text-indigo-600 font-bold text-sm">
                {index + 1}
              </span>
              <p className="font-semibold">{step.title}</p>
            </div>

            <p className="text-sm text-gray-500 mt-1 max-w-[180px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}