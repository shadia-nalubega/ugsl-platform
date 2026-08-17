import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";

const CATEGORIES = ["Greetings", "Family", "Numbers"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export default function CreateLesson() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [level, setLevel] = useState(LEVELS[0]);
  const [videoFile, setVideoFile] = useState(null);
  const [overview, setOverview] = useState("");
  const [signsText, setSignsText] = useState("");
  const [phrasesText, setPhrasesText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Turn the textareas into clean arrays — split by line,
    // trim whitespace, and drop any empty lines.
    const signs = signsText.split("\n").map((s) => s.trim()).filter(Boolean);
    const phrases = phrasesText.split("\n").map((p) => p.trim()).filter(Boolean);

    const newLesson = {
      title,
      category,
      level,
      videoFile, // TODO: upload to cloud storage (S3/R2), store the resulting URL
      overview,
      signs,
      phrases,
      status: "pending_approval", // matches your workflow: draft → submitted → admin review
    };

    // TODO: POST /api/lessons (create draft), then POST /api/lessons/{id}/submit
    console.log("Lesson submitted for review:", newLesson);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <Navbar />
        <div className="max-w-lg mx-auto px-8 py-20 text-center">
          <p className="text-2xl font-bold">Lesson submitted!</p>
          <p className="text-gray-500 mt-2">
            An admin will review "{title}" before it's published.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700"
          >
            Create Another Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold">Create Lesson</h1>
        <p className="text-gray-500 mt-1">
          This lesson will be sent for admin review before it's published.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="text-sm font-medium block mb-2">Lesson Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
              >
                {LEVELS.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Lesson Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="w-full text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Overview</label>
            <textarea
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              rows={3}
              placeholder="Briefly describe what this lesson covers..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Signs <span className="text-gray-400 font-normal">(one per line)</span>
            </label>
            <textarea
              value={signsText}
              onChange={(e) => setSignsText(e.target.value)}
              rows={4}
              placeholder={"Hello\nGood morning\nGoodbye"}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Phrases <span className="text-gray-400 font-normal">(one per line, optional)</span>
            </label>
            <textarea
              value={phrasesText}
              onChange={(e) => setPhrasesText(e.target.value)}
              rows={3}
              placeholder={"How are you?"}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700"
          >
            Submit for Review
          </button>
        </form>
      </div>
    </div>
  );
}