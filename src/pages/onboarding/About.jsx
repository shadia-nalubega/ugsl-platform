import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Compass,
  Play,
} from "lucide-react";

import beginnerImg from "../../assets/fundamentals.jpg";
import intermediateImg from "../../assets/culture.jpg";
import advancedImg from "../../assets/public.jpg";

/* =========================================================
   LEARNING LEVEL DATA
========================================================= */

const LEVELS = [
  {
    id: "beginner",
    number: "01",
    title: "Beginner",
    eyebrow: "NEW TO UGSL",
    tagline: "Build your foundation",
    description:
      "Learn the essential signs you need to start communicating in Ugandan Sign Language.",
    topics: [
      "Everyday signs",
      "Greetings",
      "Introductions",
    ],
    icon: Sparkles,
    image: beginnerImg,
  },

  {
    id: "intermediate",
    number: "02",
    title: "Intermediate",
    eyebrow: "BUILD CONFIDENCE",
    tagline: "Start communicating naturally",
    description:
      "Expand your vocabulary and connect signs together through practical conversations.",
    topics: [
      "Vocabulary",
      "Conversations",
      "Everyday situations",
    ],
    icon: BookOpen,
    image: intermediateImg,
  },

  {
    id: "advanced",
    number: "03",
    title: "Advanced",
    eyebrow: "DEVELOP FLUENCY",
    tagline: "Communicate with confidence",
    description:
      "Practice natural conversations, complex expressions, and real-world communication.",
    topics: [
      "Complex expressions",
      "Natural flow",
      "Real-world communication",
    ],
    icon: Compass,
    image: advancedImg,
  },
];


/* =========================================================
   MAIN PAGE
========================================================= */

export default function About() {
  const navigate = useNavigate();

const handleSelectLevel = (level) => {
  if (level === "beginner") {
    navigate("/dashboard");
    return;
  }

  // Intermediate and Advanced dashboards don't exist yet —
  // leaving these as no-ops for now.
};
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      <HeroSection />

      <LearningJourney />

      <LevelSection
        levels={LEVELS}
        onSelectLevel={handleSelectLevel}
      />

      <LearningCTA
        onStart={() => handleSelectLevel("beginner")}
      />

      <Footer
        onSelectLevel={handleSelectLevel}
        onDictionary={() => navigate("/dictionary")}
        onAbout={() => navigate("/about")}
      />

    </div>
  );
}


/* =========================================================
   HERO SECTION
========================================================= */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-indigo-50 to-white">

      {/* Background decoration */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-200/40 rounded-full blur-3xl" />

      <div className="absolute top-20 right-[-120px] w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14">

        {/* Badge */}

        <div className="flex justify-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">

            <Sparkles className="w-4 h-4" />

            Learn Ugandan Sign Language

          </span>

        </div>


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mt-7">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">

            Your UgSL journey

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              starts here.
            </span>

          </h1>


          <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Choose a learning level that feels right for you and start
            building your confidence in Ugandan Sign Language.
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   LEARNING JOURNEY
========================================================= */

function LearningJourney() {
  return (
    <section className="relative -mt-1 bg-white">

      <div className="max-w-3xl mx-auto px-6 py-8">

        <div className="flex items-center justify-center">

          {/* Step 1 */}

          <JourneyStep
            number="1"
            label="Learn"
            active
          />

          <JourneyLine />

          {/* Step 2 */}

          <JourneyStep
            number="2"
            label="Practice"
          />

          <JourneyLine />

          {/* Step 3 */}

          <JourneyStep
            number="3"
            label="Communicate"
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   JOURNEY STEP
========================================================= */

function JourneyStep({ number, label, active = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-medium ${
        active
          ? "text-violet-700"
          : "text-gray-400"
      }`}
    >

      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
          active
            ? "bg-violet-600 text-white"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {number}
      </span>

      <span className="hidden sm:block">
        {label}
      </span>

    </div>
  );
}


/* =========================================================
   JOURNEY LINE
========================================================= */

function JourneyLine() {
  return (
    <div className="w-8 sm:w-16 h-px bg-gray-200 mx-2 sm:mx-4" />
  );
}


/* =========================================================
   LEVEL SECTION
========================================================= */

function LevelSection({ levels, onSelectLevel }) {
  return (
    <section className="relative py-16 sm:py-20">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              onSelect={() => onSelectLevel(level.id)}
            />
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading() {
  return (
    <div className="text-center mb-12">

      <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
        Choose your path
      </p>

      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
        Where would you like to start?
      </h2>

      <p className="mt-4 text-gray-500 max-w-xl mx-auto">
        There is no wrong place to begin. Pick the level that matches
        your current experience.
      </p>

    </div>
  );
}


/* =========================================================
   LEVEL CARD
========================================================= */

function LevelCard({ level, onSelect }) {
  const Icon = level.icon;

  return (
    <article className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-100/70 hover:-translate-y-2 transition-all duration-300">

      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={level.image}
          alt={`${level.title} UgSL learning`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Image overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />


        {/* Number */}

        <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-sm font-bold text-violet-700 shadow-lg">
          {level.number}
        </div>


        {/* Icon */}

        <div className="absolute bottom-5 left-5 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">

          <Icon className="w-5 h-5 text-white" />

        </div>

      </div>


      {/* Content */}

      <div className="p-7">

        <p className="text-xs font-bold tracking-[0.15em] text-violet-600">
          {level.eyebrow}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          {level.title}
        </h3>

        <p className="mt-2 text-lg font-semibold text-gray-700">
          {level.tagline}
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {level.description}
        </p>


        {/* Topics */}

        <div className="flex flex-wrap gap-2 mt-5">

          {level.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
            >
              {topic}
            </span>
          ))}

        </div>


        {/* Button */}

        <button
          type="button"
          onClick={onSelect}
          className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >

          Start {level.title}

          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />

        </button>

      </div>

    </article>
  );
}


/* =========================================================
   CALL TO ACTION
========================================================= */

function LearningCTA({ onStart }) {
  return (
    <section className="px-6 pb-20">

      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-12 sm:px-12 text-white">

        {/* Decorative shapes */}

        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />

        <div className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full bg-white/5" />


        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>

            <div className="flex items-center gap-2 text-violet-200 text-sm font-semibold">

              <Play className="w-4 h-4 fill-current" />

              Learn at your own pace

            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
              Ready to start signing?
            </h2>

            <p className="mt-2 text-violet-100 max-w-xl">
              Choose a level above and take your first step toward
              more confident communication.
            </p>

          </div>


          <button
            type="button"
            onClick={onStart}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-violet-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Start Learning

            <ArrowRight className="w-4 h-4" />

          </button>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FOOTER
========================================================= */

function Footer({
  onSelectLevel,
  onDictionary,
  onAbout,
}) {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}

          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold">
              Ug<span className="text-violet-400">SL</span>
            </h2>

            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Making Ugandan Sign Language easier to learn,
              practice, and use in everyday life.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Learn. Connect. Include.
            </p>

          </div>


          {/* Learning */}

          <FooterColumn title="Learning">

            <FooterButton
              onClick={() => onSelectLevel("beginner")}
            >
              Beginner
            </FooterButton>

            <FooterButton
              onClick={() => onSelectLevel("intermediate")}
            >
              Intermediate
            </FooterButton>

            <FooterButton
              onClick={() => onSelectLevel("advanced")}
            >
              Advanced
            </FooterButton>

          </FooterColumn>


          {/* Platform */}

          <FooterColumn title="Platform">

            <FooterButton onClick={onDictionary}>
              Dictionary
            </FooterButton>

            <FooterButton onClick={onAbout}>
              About UgSL
            </FooterButton>

          </FooterColumn>

        </div>


        {/* Bottom */}

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} UgSL. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Learn. Connect. Include.
          </p>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, children }) {
  return (
    <div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <ul className="mt-4 space-y-3 text-sm text-gray-400">
        {children}
      </ul>

    </div>
  );
}


/* =========================================================
   FOOTER BUTTON
========================================================= */

function FooterButton({ onClick, children }) {
  return (
    <li>

      <button
        type="button"
        onClick={onClick}
        className="hover:text-violet-400 transition"
      >
        {children}
      </button>

    </li>
  );
}