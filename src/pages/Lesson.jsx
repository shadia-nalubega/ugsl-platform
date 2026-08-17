import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { LESSONS } from "../data/lessons.js";
import Navbar from "../components/Navbar.jsx";

export default function Lesson() {
  const { id } = useParams();
  const lesson = LESSONS.find((l) => l.id === id);

  const [stage, setStage] = useState("overview");

  if (!lesson) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="px-8 py-20 text-center">
          <p className="text-xl font-semibold">Lesson not found.</p>

          <Link
            to="/courses"
            className="text-indigo-600 font-medium mt-4 inline-block"
          >
            ← Back to all courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {stage === "overview" ? (
        <LessonOverview
          lesson={lesson}
          onContinue={() => setStage("content")}
        />
      ) : (
        <LessonContent lesson={lesson} />
      )}
    </div>
  );
}

function LessonOverview({ lesson, onContinue }) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      <Link
        to="/courses"
        className="inline-flex items-center gap-1 text-gray-600 text-sm font-medium hover:text-indigo-600 transition"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to courses
      </Link>

      <div className="text-center mt-12">
        <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase">
          Lesson Overview
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-900">
          {lesson.title}
        </h1>

        <p className="text-gray-500 mt-3">
          {lesson.description}
        </p>
      </div>

      <div className="border-t mt-10 pt-8">
        <p className="text-gray-600">
          In this lesson, you will learn:
        </p>

        <div className="mt-6">
          <p className="text-indigo-600 font-semibold">
            Signs
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {lesson.signs.map((sign) => (
              <span
                key={sign}
                className="bg-indigo-50 text-indigo-700 px-3 py-2 rounded-lg text-sm"
              >
                {sign}
              </span>
            ))}
          </div>
        </div>

        {lesson.phrases?.length > 0 && (
          <div className="mt-7">
            <p className="text-indigo-600 font-semibold">
              Phrases
            </p>

            <div className="mt-3 space-y-2">
              {lesson.phrases.map((phrase) => (
                <div
                  key={phrase}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-medium px-10 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Start Lesson
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function LessonContent({ lesson }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /*
   * Temporary captions.
   *
   * These will eventually come from the backend
   * together with the actual lesson video.
   */
  const captions = lesson.captions || [
    {
      start: 0,
      end: 3,
      text: "Hello",
    },
    {
      start: 3,
      end: 6,
      text: "Good morning",
    },
    {
      start: 6,
      end: 9,
      text: "How are you?",
    },
  ];

  const currentCaption =
    captions.find(
      (caption) =>
        currentTime >= caption.start &&
        currentTime < caption.end
    ) || null;

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;

    setDuration(videoRef.current.duration);
  };

  const handleSeek = (event) => {
    if (!videoRef.current) return;

    const newTime = Number(event.target.value);

    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;

    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const currentCaptionIndex = captions.findIndex(
    (caption) =>
      currentTime >= caption.start &&
      currentTime < caption.end
  );

  const currentSignIndex =
    currentCaptionIndex >= 0
      ? Math.min(currentCaptionIndex, lesson.signs.length - 1)
      : 0;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Back to courses */}
      <Link
        to="/courses"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-indigo-600 transition mb-6"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to courses
      </Link>

      {/* Main lesson workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">

        {/* ================= VIDEO AREA ================= */}
        <section>
          <div className="relative overflow-hidden rounded-2xl bg-gray-950 aspect-video">

            {lesson.video ? (
              <>
                <video
                  ref={videoRef}
                  src={lesson.video}
                  poster={lesson.thumbnail}
                  className="w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />

                {/* Subtitle */}
                {currentCaption && (
                  <div className="absolute bottom-24 left-4 right-4 flex justify-center pointer-events-none">
                    <div className="bg-black/80 text-white px-5 py-3 rounded-xl text-center text-base sm:text-lg font-medium max-w-xl backdrop-blur-sm shadow-lg">
                      {currentCaption.text}
                    </div>
                  </div>
                )}

                {/* Video controls */}
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/90 to-transparent">

                  {/* Progress bar */}
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full accent-indigo-500 cursor-pointer"
                    aria-label="Video progress"
                  />

                  <div className="flex items-center justify-between text-white mt-2">

                    <div className="flex items-center gap-4">

                      <button
                        onClick={togglePlay}
                        aria-label={
                          isPlaying
                            ? "Pause video"
                            : "Play video"
                        }
                        className="hover:text-indigo-300 transition"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 fill-current" />
                        )}
                      </button>

                      <button
                        onClick={toggleMute}
                        aria-label={
                          isMuted
                            ? "Unmute video"
                            : "Mute video"
                        }
                        className="hover:text-indigo-300 transition"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>

                      <span className="text-xs text-gray-300">
                        {formatTime(currentTime)} /{" "}
                        {formatTime(duration)}
                      </span>

                    </div>

                    <button
                      onClick={handleFullscreen}
                      aria-label="Fullscreen"
                      className="hover:text-indigo-300 transition"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>

                  </div>
                </div>
              </>
            ) : (
              /*
               * VIDEO PLACEHOLDER
               *
               * We don't have actual lesson videos yet,
               * so we simply display the clean thumbnail.
               *
               * No fake play button is added here.
               */
              <div className="relative w-full h-full">

                <img
                  src={lesson.thumbnail}
                  alt={lesson.title}
                  className="w-full h-full object-cover object-top opacity-80"
                />

                <div className="absolute inset-0 bg-black/10" />

                {/* <div className="absolute bottom-5 left-5">
                  <span className="inline-flex items-center bg-black/60 text-white text-xs font-medium px-3 py-2 rounded-lg backdrop-blur-sm">
                    Video coming soon
                  </span>
                </div> */}

              </div>
            )}
          </div>
        </section>

        {/* ================= LESSON INFORMATION ================= */}
        <aside className="border border-gray-100 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between gap-4">

            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              {lesson.level}
            </span>

            <span className="text-sm text-gray-400">
              ⏱ {lesson.duration}
            </span>

          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-5">
            {lesson.title}
          </h1>

          <p className="text-gray-500 mt-2 leading-relaxed">
            {lesson.description}
          </p>

          {/* Currently learning */}
          <div className="mt-7 p-5 bg-indigo-50 rounded-xl">

            <p className="text-xs uppercase tracking-wide text-indigo-500 font-semibold">
              Currently learning
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              {lesson.signs[currentSignIndex]}
            </h2>

            {currentCaption && (
              <p className="text-sm text-gray-600 mt-1">
                {currentCaption.text}
              </p>
            )}

          </div>

          {/* Signs */}
          <div className="mt-7">

            <div className="flex items-center justify-between mb-3">

              <p className="text-sm font-semibold text-gray-800">
                Signs in this lesson
              </p>

              <span className="text-xs text-gray-400">
                {lesson.signs.length} signs
              </span>

            </div>

            <div className="space-y-2">

              {lesson.signs.map((sign, index) => (
                <div
                  key={sign}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                    index === currentSignIndex
                      ? "bg-indigo-100 text-indigo-700 font-medium"
                      : "text-gray-600 bg-gray-50"
                  }`}
                >

                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      index === currentSignIndex
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </span>

                  {sign}

                </div>
              ))}

            </div>
          </div>

        </aside>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row gap-3">

        <Link
          to={`/lesson/${lesson.id}/quiz`}
          className="inline-flex justify-center items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Try  out  →
        </Link>

        <Link
          to="/courses"
          className="inline-flex justify-center items-center border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-medium hover:bg-indigo-50 transition"
        >
          Browse More Lessons
        </Link>

      </div>

    </main>
  );
}