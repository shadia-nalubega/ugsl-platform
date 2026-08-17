import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import heroImg from "../../assets/hero.jpg";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const LANGUAGES = ["English", "Luganda", "Swahili"];

export default function About() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [videoDone, setVideoDone] = useState(false);
  const [level, setLevel] = useState("Beginner");
  const [language, setLanguage] = useState("English");
  const [location, setLocation] = useState("");

  function handlePlay() {
    videoRef.current?.play();
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No account is created here — this just captures learning
    // preferences before the first lesson. Account creation happens
    // later, if/when the learner wants to save their progress.
    // TODO: store { level, language, location } (e.g. localStorage or
    // React context) so the lesson and later signup can use them.
    console.log({ level, language, location });
    navigate("/lesson/greetings");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-6">
      {/* Contained card instead of edge-to-edge */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left: video only */}
        <div className="relative bg-indigo-600 min-h-[400px] md:min-h-[520px]">
          <video
            ref={videoRef}
            poster={heroImg}
            onEnded={() => setVideoDone(true)}
            className="w-full h-full object-cover"
          >
            {/* TODO: replace poster + add a real source once your
                signing video is hosted, e.g.:
            <source src="/videos/tell-us-about-yourself.mp4" type="video/mp4" />
            */}
          </video>

          {!videoDone && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 m-auto w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
            >
              <Play className="w-6 h-6 text-indigo-600 fill-indigo-600 ml-1" />
            </button>
          )}
        </div>

        {/* Right: form — fades in once the video finishes */}
        <div className="relative flex items-center justify-center p-8">
          <div
            className={`w-full max-w-sm transition-opacity duration-700 ${
              videoDone ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <h2 className="text-2xl font-bold">Tell us about you</h2>
            <p className="text-gray-500 text-sm mt-1">
              This helps us personalize your learning.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium mb-2">Choose your level</p>
                <div className="flex gap-2">
                  {LEVELS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setLevel(option)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium border transition-colors ${
                        level === option
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-gray-600 border-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Preferred Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Location <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Select your location"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700"
              >
                Start Learning →
              </button>
            </form>
          </div>

          {!videoDone && (
            <button
              onClick={() => setVideoDone(true)}
              className="absolute bottom-4 right-8 text-sm text-gray-400 underline"
            >
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
}