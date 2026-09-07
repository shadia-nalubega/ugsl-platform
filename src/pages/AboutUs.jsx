import { Link } from "react-router-dom";

/*
  AboutUgsl.jsx — public "About the project" marketing page.

  NOTE ON NAMING: your onboarding form already lives at pages/about.jsx
  ("Tell us about you"). This is a DIFFERENT page — the public story/mission
  page you'd link from the Navbar. I named it AboutUgsl.jsx on purpose so it
  can't get swapped with the onboarding file the way App.jsx/page files did
  before. Route it as:

    import AboutUgsl from "./pages/AboutUgsl";
    <Route path="/about" element={<AboutUgsl />} />

  COLOR SYSTEM (copied from Hero.jsx, nothing new introduced):
    violet-600 / indigo-600  -> primary gradient, links, headline accent
    violet-100 / indigo-50   -> soft backgrounds
    gray-700 / gray-500      -> body text, muted text

  Everywhere you see [ ... ] below is a placeholder — real copy you should
  swap in (team bio, contact info, etc). Everything else is real content
  pulled from what you've told me about the project.
*/

export default function AboutUgsl() {
  return (
    <div className="bg-white">
      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-violet-100 via-indigo-50 to-white overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center px-8 py-24">
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

        {/* same decorative wave device as Hero.jsx, kept subtle here */}
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
            <h2 className="text-3xl font-bold mb-6">Why UgSL</h2>
            <p className="text-gray-700 mb-4">
              This started with one friendship. During COVID, a Deaf friend
              offered to teach me sign language — we had the time, and she had
              the patience. When she moved away, I lost my only way to keep
              learning.
            </p>
            <p className="text-gray-700 mb-4">
              Years later, wanting to pick it back up to help in
              disability-inclusion spaces, I looked for a way back in.
              Existing courses were scattered and inconsistent, and the one
              Ugandan Sign Language app I could find no longer worked on
              modern phones.
            </p>
            <p className="text-gray-700">
              UgSL is the platform I wished existed — starting on the web,
              built with and for the Deaf community, not around it.
            </p>
          </div>

          {/* decorative panel, matches Hero.jsx's blur-circle + wave device
              instead of a stock photo */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="relative bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm border border-violet-100">
              <p className="text-lg font-medium text-gray-800">
                "Communicate. Connect. Create Inclusion."
              </p>
              <p className="text-sm text-gray-500 mt-4">— UgSL's founding idea</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MISSION + PILLARS ---------- */}
      <section className="bg-violet-50 rounded-none py-20">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold mb-6">Our mission</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            To make Uganda Sign Language learnable, practical, and
            community-led — so it stops being the reason someone can't make a
            friend or help someone in need.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <PillarCard
              title="Deaf-led design"
              body="Lessons are shaped with input from the Deaf community, not guessed at from the outside."
            />
            <PillarCard
              title="Real situations, not vocab lists"
              body="Every lesson teaches you to actually perform a conversation — greeting someone, introducing yourself — not memorize isolated signs."
            />
            <PillarCard
              title="Learn at your pace"
              body="Try a lesson before you sign up. Track your own progress and streaks as you go."
            />
          </div>
        </div>
      </section>

      {/* ---------- HOW WE'RE BUILDING THIS (replaces SynthMind's stat block) ---------- */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How we're building this
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <PrincipleStat
              label="Content workflow"
              detail="Teachers draft lessons, Admins review and approve before anything publishes"
            />
            <PrincipleStat
              label="Lesson structure"
              detail="Real-life situation → Learn → Practice → Interact → Perform"
            />
            <PrincipleStat
              label="Community input"
              detail="Reaching out to Deaf creators and organizations to shape content"
            />
            <PrincipleStat
              label="Status"
              detail="[ e.g. Early access — MVP in active development ]"
            />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Want to help build UgSL?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Whether you're Deaf, hearing, a developer, or someone who's just
            curious — there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/onboarding"
              className="bg-white text-violet-600 font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Start learning →
            </Link>
            <a
              href="mailto:[ your contact email ]"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- small local components, kept in-file for simplicity ---------- */

function PillarCard({ title, body }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-left">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{body}</p>
    </div>
  );
}

function PrincipleStat({ label, detail }) {
  return (
    <div>
      <div className="text-violet-400 font-semibold mb-2">{label}</div>
      <div className="text-gray-300 text-sm">{detail}</div>
    </div>
  );
}