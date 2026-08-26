import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Video, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar.jsx"; // Adjust path if needed

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Mission Statement */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-3">
          Our Mission
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Bridging the gap between Uganda's Deaf and hearing communities, one real conversation at a time.
        </h1>
      </section>

      {/* The Gap */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Why this exists</h2>
        <p className="text-gray-600 leading-relaxed">
          Most hearing people in Uganda have never had a reason — or a way — to learn Ugandan Sign Language (UgSL). That gap shows up in small, everyday moments: a shopkeeper who can't greet a Deaf customer, a classmate who can't ask a Deaf student their name, a stranger who can't help someone find their way. UgSL exists to close that gap, starting with the situations people actually run into.
        </p>
      </section>

      {/* Our Approach */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">How we approach it</h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
              <Users size={18} className="text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Built with Deaf community input</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                We're building this alongside members of Uganda's Deaf community, not guessing on their behalf.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
              <Video size={18} className="text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Real situations, not vocabulary lists</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every lesson is built around something you'll actually need to do — greet someone, ask for help, introduce yourself — not disconnected words to memorize.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
              <Heart size={18} className="text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Free to start, self-paced</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn on your own schedule, at your own speed — no pressure, no deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who's Building It — honest, not a fake team grid */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Who's building this</h2>
        <p className="text-gray-600 leading-relaxed">
          UgSL is an early-stage project, currently being built by a single developer in partnership with members of the Deaf community. We're growing carefully, with community guidance shaping every lesson — rather than rushing to scale before getting it right.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center border-t border-gray-100">
        <button
          onClick={() => navigate("/onboarding")}
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-sm active:scale-95"
        >
          Start Learning <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}