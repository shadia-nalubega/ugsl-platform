import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  CheckCircle2,
  Play,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Video,
  Camera,
  Square,
  RotateCcw,
  X,
  BookOpen,
  MessageCircle,
  Sparkles,
  Bell,
  User,
} from "lucide-react";

import logo from "../../assets/logo.png";
import { LESSONS } from "../../data/lessons";
import "./Learner-dash.css";


/* =========================================================
   TEMPORARY COURSE STRUCTURE
   We are using the existing LESSONS file.
   No backend is required yet.
========================================================= */

const COURSE_ORDER = ["Beginner"];


/* =========================================================
   YOUTUBE HELPER

   Turns a normal YouTube watch/share URL into the embeddable
   iframe URL. Returns null if the URL isn't a YouTube link,
   so we know to fall back to the native <video> player.
========================================================= */

const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;

  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};


/*
  Groups a level's lessons by their `category` field, preserving
  the order categories first appear in. Used to render the
  Category > Lesson nesting in the sidebar.
*/

const groupLessonsByCategory = (lessons) => {
  const map = new Map();

  lessons.forEach((lesson) => {
    if (!map.has(lesson.category)) {
      map.set(lesson.category, []);
    }

    map.get(lesson.category).push(lesson);
  });

  return Array.from(map.entries()).map(
    ([category, categoryLessons]) => ({
      category,
      lessons: categoryLessons,
    })
  );
};


/*
  Access is determined by CATEGORY, not lesson position:

  - "Getting Started" and "0. Foundations"    → FREE, no account needed
  - "A. Meeting Someone"                       → LOGIN required (free account)
  - Everything from "B. Family & Friends" on  → PAID (subscription)

  Update this map whenever a new category is added.
*/

const CATEGORY_ACCESS = {
  "Getting Started": "free",
  "0. Foundations": "free",
  "A. Meeting Someone": "login",
  "B. Family & Friends": "paid",
  "C. Everyday Needs": "paid",
  "D. Getting Help in Public": "paid",
  "E. School & Work": "paid",
  "F. Grammar in Context": "paid",
  "G. Deaf Culture": "paid",
};

const buildCourses = () => {
  return COURSE_ORDER.map((level) => {
    const levelLessons = LESSONS.filter(
      (lesson) => lesson.level === level
    );

    const lessons = levelLessons.map((lesson) => ({
      ...lesson,
      access: lesson.isIntro
        ? "free"
        : CATEGORY_ACCESS[lesson.category] || "paid",
    }));

    return {
      id: level.toLowerCase(),
      title: level,
      lessons,
    };
  });
};


/* =========================================================
   MAIN DASHBOARD
========================================================= */

function LearnerDashboard() {
  const navigate = useNavigate();

  const courses = buildCourses();

  /*
    TEMPORARY AUTH STATE

    These will eventually come from your backend.
  */

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);

  const [activeCourse, setActiveCourse] = useState(
    courses[0]?.id || "beginner"
  );

  const [activeLessonId, setActiveLessonId] = useState(
    courses[0]?.lessons[0]?.id || null
  );

  const [openCourses, setOpenCourses] = useState({
    beginner: true,
    intermediate: true,
    advanced: true,
  });

  // Tracks open/closed state per category. Categories start
  // closed — the learner taps a category to reveal its lessons.
  const [openCategories, setOpenCategories] = useState({});

  const [activeTab, setActiveTab] = useState("overview");

  // Controls whether we're showing the "before you start" overview
  // in place of the video, or the actual video + activities.
  // Every lesson opens on "overview" first, and only moves to
  // "video" once the learner clicks Start Lesson.
  const [lessonPhase, setLessonPhase] = useState("overview");

  const [completedLessons, setCompletedLessons] = useState([]);

  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const [selfAssessment, setSelfAssessment] = useState("");


  /* -------------------------------------------------------
     Current lesson
  ------------------------------------------------------- */

  const currentCourse =
    courses.find((course) => course.id === activeCourse) ||
    courses[0];

  const currentLesson =
    currentCourse?.lessons.find(
      (lesson) => lesson.id === activeLessonId
    ) ||
    currentCourse?.lessons[0] ||
    null;


  /* -------------------------------------------------------
     Access control
  ------------------------------------------------------- */

  const canAccessLesson = (lesson) => {
    if (!lesson) return false;

    if (lesson.access === "free") {
      return true;
    }

    if (lesson.access === "login") {
      return isLoggedIn;
    }

    if (lesson.access === "paid") {
      return isLoggedIn && hasPaid;
    }

    return false;
  };


  /* -------------------------------------------------------
     Open lesson
  ------------------------------------------------------- */

  const openLesson = (course, lesson) => {
    if (!lesson) return;

    if (canAccessLesson(lesson)) {
      setActiveCourse(course.id);
      setActiveLessonId(lesson.id);

      setActiveTab("overview");
      setLessonPhase("overview"); // every newly opened lesson starts on the overview

      setQuizAnswer("");
      setQuizSubmitted(false);
      setSelfAssessment("");

      return;
    }

    // Login-required and paid lessons both route to the
    // "Enjoying UgSL" page instead of showing a pop-up.
    if (lesson.access === "login" || lesson.access === "paid") {
      navigate("/enjoying-ugsl");
      return;
    }
  };


  /* -------------------------------------------------------
     Complete lesson
  ------------------------------------------------------- */

  const markLessonComplete = () => {
    if (!currentLesson) return;

    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons((previous) => [
        ...previous,
        currentLesson.id,
      ]);
    }
  };


  /* -------------------------------------------------------
     Progress

     Intro lessons are excluded from the total, since they
     have no "Mark Complete" step.
  ------------------------------------------------------- */

  const totalLessons = courses.reduce(
    (total, course) =>
      total + course.lessons.filter((lesson) => !lesson.isIntro).length,
    0
  );

  const progress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessons.length / totalLessons) * 100
        );


  /* -------------------------------------------------------
     Navigation
  ------------------------------------------------------- */

  const goToNextLesson = () => {
    if (!currentCourse || !currentLesson) return;

    const index = currentCourse.lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    );

    if (index === currentCourse.lessons.length - 1) {
      return;
    }

    const nextLesson = currentCourse.lessons[index + 1];

    openLesson(currentCourse, nextLesson);
  };


  const goToPreviousLesson = () => {
    if (!currentCourse || !currentLesson) return;

    const index = currentCourse.lessons.findIndex(
      (lesson) => lesson.id === currentLesson.id
    );

    if (index <= 0) {
      return;
    }

    const previousLesson = currentCourse.lessons[index - 1];

    openLesson(currentCourse, previousLesson);
  };


  if (!currentLesson) {
    return (
      <div className="learner-empty">
        <BookOpen size={40} />

        <h2>Your learning space is ready</h2>

        <p>
          Lessons will appear here once they are added.
        </p>
      </div>
    );
  }


  return (
    <div className="learner-dashboard">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="learning-sidebar">

        {/* Brand */}

        <div className="sidebar-brand">

          <img
            src={logo}
            alt="UgSL logo"
            className="ugsl-logo"
          />

        </div>


        {/* Dashboard link */}

        <div className="sidebar-dashboard-label">
          <span>MY LEARNING</span>
        </div>


        {/* Progress */}

        <div className="sidebar-progress">

          <div className="sidebar-progress-top">

            <span>Course progress</span>

            <strong>{progress}%</strong>

          </div>

          <div className="sidebar-progress-bar">

            <div
              className="sidebar-progress-fill"
              style={{ width: `${progress}%` }}
            />

          </div>

          <small>
            {completedLessons.length} of {totalLessons} lessons completed
          </small>

        </div>


        {/* Course navigation */}

        <div className="course-navigation">

          {courses.map((course) => (

            <div
              className="course-section"
              key={course.id}
            >

              <button
                className="course-title"
                onClick={() =>
                  setOpenCourses((previous) => ({
                    ...previous,
                    [course.id]: !previous[course.id],
                  }))
                }
              >

                <div className="course-title-left">

                  <span className="course-dot" />

                  <span>{course.title}</span>

                </div>

                {openCourses[course.id] ? (
                  <ChevronDown size={17} />
                ) : (
                  <ChevronRight size={17} />
                )}

              </button>


              {openCourses[course.id] && (

                <div className="lesson-list">

                  {course.lessons.length > 0 ? (

                    groupLessonsByCategory(course.lessons).map(
                      ({ category, lessons: categoryLessons }) => {

                        const categoryKey = `${course.id}-${category}`;
                        const categoryOpen =
                          openCategories[categoryKey] ?? false;

                        return (

                          <div
                            className="lesson-category"
                            key={categoryKey}
                          >

                            <button
                              className="lesson-category-title"
                              onClick={() =>
                                setOpenCategories((previous) => ({
                                  ...previous,
                                  [categoryKey]: !categoryOpen,
                                }))
                              }
                            >

                              <span>{category}</span>

                              {categoryOpen ? (
                                <ChevronDown size={14} />
                              ) : (
                                <ChevronRight size={14} />
                              )}

                            </button>


                            {categoryOpen && (

                              <div className="lesson-category-list">

                                {categoryLessons.map((lesson) => {

                                  // Continuous numbering across the
                                  // whole level, not restarted per
                                  // category.
                                  const globalIndex =
                                    course.lessons.findIndex(
                                      (item) => item.id === lesson.id
                                    );

                                  const accessible =
                                    canAccessLesson(lesson);

                                  const completed =
                                    completedLessons.includes(
                                      lesson.id
                                    );

                                  const active =
                                    currentLesson.id === lesson.id &&
                                    activeCourse === course.id;

                                  return (

                                    <button
                                      key={lesson.id}
                                      className={`
                                        sidebar-lesson
                                        ${active ? "active" : ""}
                                        ${!accessible ? "locked" : ""}
                                      `}
                                      onClick={() =>
                                        openLesson(course, lesson)
                                      }
                                    >

                                      <div className="lesson-status">

                                        {completed ? (
                                          <CheckCircle2 size={17} />
                                        ) : !accessible ? (
                                          <Lock size={15} />
                                        ) : (
                                          <span className="lesson-number">
                                            {globalIndex + 1}
                                          </span>
                                        )}

                                      </div>


                                      <div className="sidebar-lesson-info">

                                        <strong>
                                          {lesson.title}
                                        </strong>

                                        <small>

                                          {lesson.access === "free" &&
                                            "Free"}

                                          {lesson.access === "login" &&
                                            "Account required"}

                                          {lesson.access === "paid" &&
                                            "Premium"}

                                        </small>

                                      </div>

                                    </button>

                                  );

                                })}

                              </div>

                            )}

                          </div>

                        );

                      }
                    )

                  ) : (

                    <div className="empty-course">

                      <Lock size={14} />

                      <span>
                        More lessons coming soon
                      </span>

                    </div>

                  )}

                </div>

              )}

            </div>

          ))}

        </div>


        {/* Sidebar footer */}

        <div className="sidebar-footer">

          <div className="sidebar-tip">

            <Sparkles size={16} />

            <div>

              <strong>Keep learning</strong>

              <span>
                Complete lessons to track your progress.
              </span>

            </div>

          </div>

        </div>

      </aside>


      {/* =====================================================
          MAIN WORKSPACE
      ===================================================== */}

      <main className="lesson-workspace">


        {/* Workspace top bar */}

        <header className="workspace-topbar">

          <button
            className="topbar-back-button"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={16} />
            Back
          </button>


          <div className="workspace-topbar-main">

            <div>

              <span className="workspace-kicker">
                {currentCourse.title} Course
              </span>

              <h1>
                {currentLesson.title}
              </h1>

            </div>


            <div className="workspace-icons">

              <button
                className="icon-button"
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className="icon-dot" />
              </button>

              <button
                className="icon-button"
                onClick={() => navigate("/enjoying-ugsl")}
                aria-label="Account"
              >
                <User size={18} />
              </button>

            </div>

          </div>

        </header>


        {/* =================================================
            OVERVIEW  →  VIDEO

            The overview sits in the exact spot the video
            occupies. Clicking Start Lesson flips lessonPhase
            to "video", which swaps in the real player.
        ================================================= */}

        {lessonPhase === "overview" ? (

          <section className="lesson-video-section">

            <div className="lesson-overview-panel">

              <span className="overview-eyebrow">
                Overview:
              </span>

              <h2 className="overview-title">
                {currentLesson.title}
              </h2>

              <hr className="overview-divider" />

              <div className="overview-body">

                <p className="overview-intro">
                  In this lesson, you will learn the following:
                </p>

                <p className="overview-section-label">
                  What You'll Learn
                </p>

                <p className="overview-text">
                  {currentLesson.canDoStatement}
                </p>

                {currentLesson.breakdownItems?.length > 0 && (

                  <>
                    <p className="overview-section-label">
                      Key Signs
                    </p>

                    <ul className="overview-signs-list">

                      {currentLesson.breakdownItems.map((item, index) => (

                        <li key={index}>
                          <strong>{item.sign}</strong> — {item.description}
                        </li>

                      ))}

                    </ul>
                  </>

                )}

              </div>

              <button
                className="overview-continue-button"
                onClick={() => setLessonPhase("video")}
              >
                Start Lesson
              </button>

            </div>

          </section>

        ) : (

          <section className="lesson-video-section">

            <div className="lesson-video-wrapper">

              {currentLesson.videoUrl ? (

                getYouTubeEmbedUrl(currentLesson.videoUrl) ? (

                  <iframe
                    className="lesson-video"
                    src={getYouTubeEmbedUrl(currentLesson.videoUrl)}
                    title={currentLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                ) : (

                  <video
                    controls
                    src={currentLesson.videoUrl}
                    className="lesson-video"
                  />

                )

              ) : (

                <div className="lesson-video-placeholder">

                  <div className="video-placeholder-icon">

                    <Play
                      size={30}
                      fill="currentColor"
                    />

                  </div>

                  <h2>
                    Your UgSL lesson video
                  </h2>

                  <p>
                    The signing video for this lesson
                    will appear here.
                  </p>

                </div>

              )}

            </div>

          </section>

        )}


        {/* =================================================
            LESSON INTRO

            Recap shown alongside the video once the learner
            has moved past the overview.
        ================================================= */}

        {lessonPhase === "video" && (

          <section className="lesson-introduction">

            <div className="lesson-intro-main">

              <span className="section-eyebrow">
                WHAT YOU'LL LEARN
              </span>

              <h2>
                {currentLesson.canDoStatement}
              </h2>

            </div>


            <div className="lesson-intro-tag">

              <BookOpen size={17} />

              <span>
                {currentLesson.category}
              </span>

            </div>

          </section>

        )}


        {/* =================================================
            PRACTICE AREA

            Breakdown / dialogue (via the "Lesson" tab), Quiz,
            Self Assessment, and Tryout. Skipped for intro
            lessons, and only shown once the learner has moved
            past the overview into the video.
        ================================================= */}

        {!currentLesson.isIntro && lessonPhase === "video" && (

          <section className="practice-section">

            <div className="practice-heading">

              <div>

                <span className="section-eyebrow">
                  LESSON ACTIVITIES
                </span>

                <h2>
                  Practice what you learned
                </h2>

              </div>


              <button
                className={
                  completedLessons.includes(currentLesson.id)
                    ? "complete-button completed"
                    : "complete-button"
                }
                onClick={markLessonComplete}
              >

                <CheckCircle2 size={17} />

                {completedLessons.includes(currentLesson.id)
                  ? "Completed"
                  : "Mark Complete"}

              </button>

            </div>


            {/* Activity tabs */}

            <div className="practice-tabs">

              <button
                className={
                  activeTab === "overview"
                    ? "practice-tab active"
                    : "practice-tab"
                }
                onClick={() => setActiveTab("overview")}
              >
                <MessageCircle size={16} />
                Lesson
              </button>


              <button
                className={
                  activeTab === "quiz"
                    ? "practice-tab active"
                    : "practice-tab"
                }
                onClick={() => setActiveTab("quiz")}
              >
                Quiz
              </button>


              <button
                className={
                  activeTab === "assessment"
                    ? "practice-tab active"
                    : "practice-tab"
                }
                onClick={() => setActiveTab("assessment")}
              >
                Self Assessment
              </button>


              <button
                className={
                  activeTab === "tryout"
                    ? "practice-tab active"
                    : "practice-tab"
                }
                onClick={() => setActiveTab("tryout")}
              >
                <Video size={16} />
                Tryout
              </button>

            </div>


            {/* =================================================
                LESSON TAB
            ================================================= */}

            {activeTab === "overview" && (

              <LessonContent
                lesson={currentLesson}
              />

            )}


            {/* =================================================
                QUIZ
            ================================================= */}

            {activeTab === "quiz" && (

              <Quiz
                lesson={currentLesson}
                quizAnswer={quizAnswer}
                setQuizAnswer={setQuizAnswer}
                quizSubmitted={quizSubmitted}
                setQuizSubmitted={setQuizSubmitted}
              />

            )}


            {/* =================================================
                SELF ASSESSMENT
            ================================================= */}

            {activeTab === "assessment" && (

              <SelfAssessment
                value={selfAssessment}
                setValue={setSelfAssessment}
              />

            )}


            {/* =================================================
                TRYOUT
            ================================================= */}

            {activeTab === "tryout" && (

              <Tryout
                referenceVideo={currentLesson.videoUrl}
                lesson={currentLesson}
              />

            )}

          </section>

        )}


        {/* =================================================
            BOTTOM NAVIGATION
        ================================================= */}

        <div className="lesson-navigation">

          <button
            className="secondary-button"
            onClick={goToPreviousLesson}
          >
            ← Previous
          </button>


          <button
            className="primary-button"
            onClick={goToNextLesson}
          >

            Next Lesson

            <ChevronRight size={18} />

          </button>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   LESSON CONTENT
========================================================= */

function LessonContent({ lesson }) {

  return (

    <div className="lesson-content">


      {/* Dialogue */}

      {lesson.dialogue?.length > 0 && (

        <div className="content-card">

          <div className="content-card-header">

            <MessageCircle size={18} />

            <div>

              <span className="section-eyebrow">
                REAL-LIFE CONVERSATION
              </span>

              <h3>
                See how the conversation works
              </h3>

            </div>

          </div>


          <div className="dialogue">

            {lesson.dialogue.map((line, index) => (

              <div
                className={
                  line.speaker.includes("Learner")
                    ? "dialogue-line learner"
                    : "dialogue-line"
                }
                key={index}
              >

                <div className="dialogue-speaker">
                  {line.speaker}
                </div>

                <div className="dialogue-text">
                  {line.text}
                </div>

                {line.ugslGloss && (

                  <div className="dialogue-gloss">
                    {line.ugslGloss}
                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      )}


      {/* Breakdown */}

      {lesson.breakdownItems?.length > 0 && (

        <div className="content-card">

          <div className="content-card-header">

            <BookOpen size={18} />

            <div>

              <span className="section-eyebrow">
                SIGN BREAKDOWN
              </span>

              <h3>
                Learn the important signs
              </h3>

            </div>

          </div>


          <div className="breakdown-list">

            {lesson.breakdownItems.map(
              (item, index) => (

                <div
                  className="breakdown-item"
                  key={index}
                >

                  <div className="breakdown-number">
                    {index + 1}
                  </div>

                  <div>

                    <strong>
                      {item.sign}
                    </strong>

                    <p>
                      {item.description}
                    </p>

                    {item.tip && (

                      <span className="breakdown-tip">
                        Tip: {item.tip}
                      </span>

                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      )}


      {/* Tryout prompt */}

      {lesson.prompt && (

        <div className="prompt-card">

          <div className="prompt-icon">
            <Sparkles size={20} />
          </div>

          <div>

            <span className="section-eyebrow">
              YOUR PRACTICE CHALLENGE
            </span>

            <h3>
              {lesson.prompt.learnerTask}
            </h3>

            <p>
              {lesson.prompt.partnerInstruction}
            </p>

          </div>

        </div>

      )}

    </div>

  );
}


/* =========================================================
   QUIZ

   Your current lessons.js doesn't have a quiz object,
   so this component safely creates a simple quiz from
   the existing lesson data.
========================================================= */

function Quiz({
  lesson,
  quizAnswer,
  setQuizAnswer,
  quizSubmitted,
  setQuizSubmitted,
}) {

  const correctAnswer =
    lesson.category || lesson.title;

  const options = [
    correctAnswer,
    lesson.level,
    "Alphabet",
    "Numbers",
  ].filter(
    (value, index, array) =>
      value &&
      array.indexOf(value) === index
  ).slice(0, 4);


  const correct =
    quizAnswer === correctAnswer;


  return (

    <div className="activity-card">

      <div className="activity-label">
        QUICK QUIZ
      </div>

      <h3>
        What is the main focus of this lesson?
      </h3>

      <p className="activity-description">
        Choose the answer that best describes
        what you are learning in this lesson.
      </p>


      <div className="quiz-options">

        {options.map((option) => (

          <label
            key={option}
            className={
              `quiz-option ${
                quizAnswer === option
                  ? "selected"
                  : ""
              }`
            }
          >

            <input
              type="radio"
              name={`quiz-${lesson.id}`}
              value={option}
              checked={quizAnswer === option}
              onChange={(event) =>
                setQuizAnswer(event.target.value)
              }
            />

            <span>
              {option}
            </span>

          </label>

        ))}

      </div>


      <button
        className="primary-button"
        disabled={!quizAnswer}
        onClick={() =>
          setQuizSubmitted(true)
        }
      >
        Check Answer
      </button>


      {quizSubmitted && (

        <div
          className={
            `quiz-result ${
              correct
                ? "correct"
                : "incorrect"
            }`
          }
        >

          {correct
            ? "✓ Correct! Great job."
            : `Not quite. The best answer is "${correctAnswer}".`}

        </div>

      )}

    </div>

  );
}


/* =========================================================
   SELF ASSESSMENT
========================================================= */

function SelfAssessment({
  value,
  setValue,
}) {

  const levels = [
    {
      id: "needs-practice",
      emoji: "😕",
      title: "I need more practice",
      text: "I'm still learning these signs.",
    },
    {
      id: "getting-there",
      emoji: "😐",
      title: "I'm getting there",
      text: "I can sign with some practice.",
    },
    {
      id: "confident",
      emoji: "😊",
      title: "I feel confident",
      text: "I can use these signs comfortably.",
    },
  ];


  return (

    <div className="activity-card">

      <div className="activity-label">
        SELF ASSESSMENT
      </div>

      <h3>
        How confident are you with this lesson?
      </h3>

      <p className="activity-description">
        Be honest with yourself. This is about
        tracking your learning, not getting a
        perfect score.
      </p>


      <div className="assessment-options">

        {levels.map((level) => (

          <button
            key={level.id}
            className={
              `assessment-option ${
                value === level.id
                  ? "selected"
                  : ""
              }`
            }
            onClick={() =>
              setValue(level.id)
            }
          >

            <span className="assessment-emoji">
              {level.emoji}
            </span>

            <strong>
              {level.title}
            </strong>

            <small>
              {level.text}
            </small>

          </button>

        ))}

      </div>

    </div>

  );
}


/* =========================================================
   TRYOUT
========================================================= */

function Tryout({
  referenceVideo,
  lesson,
}) {

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const recorderRef = useRef(null);

  const [cameraOn, setCameraOn] =
    useState(false);

  const [recording, setRecording] =
    useState(false);

  const [recordedUrl, setRecordedUrl] =
    useState(null);


  const startCamera = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCameraOn(true);

    } catch (error) {

      console.error(
        "Camera error:",
        error
      );

      alert(
        "We could not access your camera. Please allow camera permission and try again."
      );

    }

  };


  const stopCamera = () => {

    if (streamRef.current) {

      streamRef.current
        .getTracks()
        .forEach((track) =>
          track.stop()
        );

    }

    setCameraOn(false);

  };


  const startRecording = () => {

    if (!streamRef.current) {
      return;
    }

    const recorder =
      new MediaRecorder(
        streamRef.current
      );

    const chunks = [];


    recorder.ondataavailable =
      (event) => {

        if (event.data.size > 0) {
          chunks.push(event.data);
        }

      };


    recorder.onstop = () => {

      const blob = new Blob(
        chunks,
        {
          type: "video/webm",
        }
      );

      const url =
        URL.createObjectURL(blob);

      setRecordedUrl(url);

    };


    recorderRef.current = recorder;

    recorder.start();

    setRecording(true);

  };


  const stopRecording = () => {

    if (recorderRef.current) {
      recorderRef.current.stop();
    }

    setRecording(false);

  };


  const resetTryout = () => {

    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl);
    }

    setRecordedUrl(null);

  };


  useEffect(() => {

    return () => {

      if (streamRef.current) {

        streamRef.current
          .getTracks()
          .forEach((track) =>
            track.stop()
          );

      }

      if (recordedUrl) {
        URL.revokeObjectURL(recordedUrl);
      }

    };

  }, [recordedUrl]);


  return (

    <div className="activity-card tryout-card">

      <div className="activity-label">
        TRYOUT
      </div>

      <h3>
        Now you try it!
      </h3>

      <p className="activity-description">
        Watch the reference sign, then use
        your camera to practise it yourself.
      </p>


      {lesson.prompt && (

        <div className="tryout-instruction">

          <strong>
            Your challenge
          </strong>

          <span>
            {lesson.prompt.learnerTask}
          </span>

        </div>

      )}


      <div className="tryout-grid">

        {/* Reference */}

        <div className="tryout-panel">

          <div className="panel-header">

            <span>
              Reference
            </span>

            <span className="panel-badge">
              Watch
            </span>

          </div>


          {referenceVideo ? (

            <video
              controls
              src={referenceVideo}
              className="tryout-video"
            />

          ) : (

            <div className="reference-placeholder">

              <Play size={30} />

              <span>
                Reference sign video
              </span>

              <small>
                Your lesson video will appear here.
              </small>

            </div>

          )}

        </div>


        {/* Camera */}

        <div className="tryout-panel">

          <div className="panel-header">

            <span>
              Your Tryout
            </span>

            {recording && (

              <span className="recording-badge">
                ● Recording
              </span>

            )}

          </div>


          {recordedUrl ? (

            <video
              controls
              src={recordedUrl}
              className="tryout-video"
            />

          ) : (

            <div className="camera-area">

              {cameraOn ? (

                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="camera-video"
                />

              ) : (

                <>
                  <Camera size={38} />

                  <p>
                    Turn on your camera to practise
                  </p>
                </>

              )}

            </div>

          )}

        </div>

      </div>


      <div className="tryout-actions">

        {!cameraOn &&
          !recordedUrl && (

            <button
              className="primary-button"
              onClick={startCamera}
            >

              <Camera size={18} />

              Start Camera

            </button>

          )}


        {cameraOn &&
          !recording && (

            <button
              className="primary-button"
              onClick={startRecording}
            >

              <Play size={18} />

              Start Recording

            </button>

          )}


        {recording && (

          <button
            className="record-button"
            onClick={stopRecording}
          >

            <Square size={16} />

            Stop Recording

          </button>

        )}


        {recordedUrl && (

          <button
            className="secondary-button"
            onClick={resetTryout}
          >

            <RotateCcw size={17} />

            Try Again

          </button>

        )}

      </div>


      {cameraOn &&
        !recording &&
        !recordedUrl && (

          <button
            className="stop-camera-button"
            onClick={stopCamera}
          >
            Turn off camera
          </button>

        )}

    </div>

  );
}


export default LearnerDashboard;