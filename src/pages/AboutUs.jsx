import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import {
  FileText,
  BookOpen,
  Users,
  Rocket,
  MessageCircle,
  Target,
  Sparkles,
} from "lucide-react";

export default function AboutUgsl() {
  return (
    <>
      <Navbar />
      
      <div className="bg-white">
        {/* ---------- HERO (Clean with violet/indigo) ---------- */}
        <section className="relative bg-gradient-to-br from-violet-100 via-indigo-50 to-white overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center px-8 py-16">
            <span className="inline-block bg-violet-100 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full">
              Our story
            </span>
            <h1 className="text-5xl font-bold mt-4 leading-tight">
              Built to close a
              <br />
              <span className="text-violet-600">communication gap</span>
            </h1>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">
              UgSL exists because learning Uganda Sign Language shouldn't be
              harder than it needs to be — for Deaf learners, hearing learners,
              and everyone in between.
            </p>
          </div>

          {/* Decorative wave */}
          <svg
            className="absolute bottom-0 left-0 w-full h-24 opacity-30 -z-0"
            viewBox="0 0 440 100"
            fill="none"
          >
            <path d="M0 60 Q 110 20 220 60 T 440 60" stroke="#a78bfa" strokeWidth="2" />
          </svg>
        </section>

        {/* ---------- OUR STORY ---------- */}
        <section className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why UgSL</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                This started with one friendship. During COVID, a Deaf friend
                offered to teach me sign language — we had the time, and she had
                the patience. When she moved away, I lost my only way to keep
                learning.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Years later, wanting to pick it back up to help in
                disability-inclusion spaces, I looked for a way back in.
                Existing courses were scattered and inconsistent, and the one
                Ugandan Sign Language app I could find no longer worked on
                modern phones.
              </p>
              <p className="text-gray-600 leading-relaxed">
                UgSL is the platform I wished existed — starting on the web,
                built with and for the Deaf community, not around it.
              </p>
            </div>

            {/* Decorative panel */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-60 -z-10" />
              <div className="relative bg-white rounded-lg shadow-xl p-10 w-full max-w-sm border border-violet-100">
                <p className="text-lg font-medium text-gray-800">
                  "Communicate. Connect. Create Inclusion."
                </p>
                <p className="text-sm text-gray-500 mt-4">— UgSL's founding idea</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- MISSION + PILLARS ---------- */}
        <section className="bg-violet-50 py-20">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our mission</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              To make Uganda Sign Language learnable, practical, and
              community-led — so it stops being the reason someone can't make a
              friend or help someone in need.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <PillarCard
                icon={Users}
                title="Deaf-led design"
                body="Lessons are shaped with input from the Deaf community, not guessed at from the outside."
              />
              <PillarCard
                icon={MessageCircle}
                title="Real situations, not vocab lists"
                body="Every lesson teaches you to actually perform a conversation — greeting someone, introducing yourself — not memorize isolated signs."
              />
              <PillarCard
                icon={Target}
                title="Learn at your pace"
                body="Try a lesson before you sign up. Track your own progress and streaks as you go."
              />
            </div>
          </div>
        </section>

        {/* ---------- HOW WE'RE BUILDING THIS ---------- */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              How we're building this
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Our approach to creating an accessible, community-driven learning platform
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                icon={FileText}
                label="Content workflow"
                detail="Teachers draft lessons, Admins review and approve before anything publishes"
              />
              <StatCard
                icon={BookOpen}
                label="Lesson structure"
                detail="Real-life situation → Learn → Practice → Interact → Perform"
              />
              <StatCard
                icon={Users}
                label="Community input"
                detail="Reaching out to Deaf creators and organizations to shape content"
              />
              <StatCard
                icon={Rocket}
                label="Status"
                detail="Early access — MVP in active development"
              />
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="max-w-4xl mx-auto px-8 py-20 text-center">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg shadow-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Want to help build UgSL?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Whether you're Deaf, hearing, a developer, or someone who's just
              curious — there's a place for you here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/onboarding"
                className="bg-white text-violet-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all shadow-md"
              >
                Start learning →
              </Link>
              <a
                href="mailto:info@ugsl.org"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------- Local Components ---------- */

function PillarCard({ icon: Icon, title, body }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-left">
      <div className="bg-violet-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-violet-600" />
      </div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{body}</p>
    </div>
  );
}

function StatCard({ icon: Icon, label, detail }) {
  return (
    <div className="bg-violet-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center">
      <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
        <Icon className="w-7 h-7 text-violet-600" />
      </div>
      <div className="text-violet-700 font-semibold mb-2">{label}</div>
      <div className="text-gray-600 text-sm leading-relaxed">{detail}</div>
    </div>
  );
}