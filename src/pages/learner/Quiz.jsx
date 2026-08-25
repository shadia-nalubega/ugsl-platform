import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, RotateCcw, XCircle } from "lucide-react";

import Navbar from "../../components/Navbar.jsx";
import { categories } from "../../data/categories.js";
import { SIGN_EMOJIS } from "../../data/signEmojis.js";

const QUESTIONS_PER_QUIZ = 10;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function buildQuestions(signs) {
  const questions = [];

  /*
   * Create two questions for every sign:
   *
   * 1. Meaning -> Emoji
   * 2. Emoji -> Meaning
   *
   * This gives the learner practice in both directions.
   */

  signs.forEach((sign) => {
    const emoji = SIGN_EMOJIS[sign];

    if (!emoji) {
      return;
    }

    // Meaning -> Emoji
    questions.push({
      id: `meaning-${sign}`,
      type: "meaning-to-sign",
      question: `Which sign means "${sign}"?`,
      promptEmoji: null,
      correctAnswer: emoji,
      correctMeaning: sign,
    });

    // Emoji -> Meaning
    questions.push({
      id: `sign-${sign}`,
      type: "sign-to-meaning",
      question: "What does this sign mean?",
      promptEmoji: emoji,
      correctAnswer: sign,
      correctMeaning: sign,
    });
  });

  return shuffle(questions).slice(
    0,
    Math.min(QUESTIONS_PER_QUIZ, questions.length)
  );
}

function createOptions(question, signs) {
  if (question.type === "meaning-to-sign") {
    const emojiOptions = signs
      .map((sign) => SIGN_EMOJIS[sign])
      .filter(Boolean);

    return shuffle([
      question.correctAnswer,
      ...shuffle(
        emojiOptions.filter(
          (emoji) => emoji !== question.correctAnswer
        )
      ).slice(0, 3),
    ]);
  }

  const meaningOptions = signs.filter(
    (sign) => sign !== question.correctAnswer
  );

  return shuffle([
    question.correctAnswer,
    ...shuffle(meaningOptions).slice(0, 3),
  ]);
}

export default function Quiz() {
  const { lessonId } = useParams();

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizKey, setQuizKey] = useState(0);

  // Find the current lesson
  let lesson = null;

  for (const category of categories) {
    const found = category.lessons.find(
      (item) => item.id === lessonId
    );

    if (found) {
      lesson = found;
      break;
    }
  }

  // Prepare the lesson signs
  const signs = lesson?.signs || [];

  /*
   * Generate a fresh quiz whenever the quiz is restarted.
   */
  const questions = useMemo(
    () => buildQuestions(signs),
    [lessonId, quizKey]
  );

  const currentQuestion = questions[questionIndex];

  // Lesson not found
  if (!lesson) {
    return (
      <>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          <p className="text-gray-700">
            Lesson not found.
          </p>

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 mt-4 text-purple-600 font-medium"
          >
            <ArrowLeft size={17} />
            Back to Courses
          </Link>
        </main>
      </>
    );
  }

  // Not enough signs for a multiple-choice quiz
  if (signs.length < 4) {
    return (
      <>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          <Link
            to={`/lesson/${lesson.id}`}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
          >
            <ArrowLeft size={16} />
            Back to lesson
          </Link>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Quiz coming soon
            </h1>

            <p className="text-gray-500 mt-2">
              This lesson needs at least four signs to create
              the multiple-choice quiz.
            </p>
          </div>
        </main>
      </>
    );
  }

  // No questions could be created
  if (questions.length === 0) {
    return (
      <>
        <Navbar />

        <main className="max-w-4xl mx-auto px-6 py-10">
          <Link
            to={`/lesson/${lesson.id}`}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
          >
            <ArrowLeft size={16} />
            Back to lesson
          </Link>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Quiz unavailable
            </h1>

            <p className="text-gray-500 mt-2">
              The signs in this lesson do not have emoji
              placeholders yet.
            </p>
          </div>
        </main>
      </>
    );
  }

  const options = createOptions(currentQuestion, signs);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) {
      return;
    }

    setSelectedAnswer(answer);

    if (answer === currentQuestion.correctAnswer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (questionIndex === questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setQuestionIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setQuizKey((previousKey) => previousKey + 1);
  };

  // =========================
  // QUIZ RESULTS
  // =========================

  if (quizFinished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <>
        <Navbar />

        <main className="max-w-3xl mx-auto px-6 py-10">

          <Link
            to={`/lesson/${lesson.id}`}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
          >
            <ArrowLeft size={16} />
            Back to lesson
          </Link>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 text-center">

            <div className="text-6xl mb-5">
              {percentage >= 70 ? "🎉" : "📚"}
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Quiz Complete!
            </h1>

            <p className="text-gray-500 mt-2">
              {lesson.title}
            </p>

            <div className="mt-8 bg-purple-50 rounded-2xl p-6">

              <p className="text-sm text-purple-600 font-semibold">
                Your Score
              </p>

              <p className="text-5xl font-bold text-gray-900 mt-2">
                {score}/{questions.length}
              </p>

              <p className="text-gray-500 mt-2">
                {percentage}% correct
              </p>

            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">

              <button
                onClick={handleRestart}
                className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
              >
                <RotateCcw size={18} />
                Try Again
              </button>

              <Link
                to={`/lesson/${lesson.id}`}
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Back to Lesson
              </Link>

            </div>

          </div>
        </main>
      </>
    );
  }

  // =========================
  // CURRENT QUESTION
  // =========================

  const isCorrect =
    selectedAnswer === currentQuestion.correctAnswer;

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* Back */}
        <Link
          to={`/lesson/${lesson.id}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-purple-600 transition mb-6"
        >
          <ArrowLeft size={16} />
          Back to lesson
        </Link>

        {/* Quiz Header */}
        <div className="mb-8">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-purple-600 font-semibold">
                {lesson.level}
              </p>

              <h1 className="text-3xl font-bold text-gray-900 mt-1">
                {lesson.title} Quiz
              </h1>
            </div>

            <span className="text-sm text-gray-500">
              {questionIndex + 1} / {questions.length}
            </span>

          </div>

          {/* Progress */}
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{
                width: `${
                  ((questionIndex + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />
          </div>

        </div>

        {/* ========================= */}
        {/* QUESTION */}
        {/* ========================= */}

        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8">

          <p className="text-xl font-semibold text-gray-900 text-center">
            {currentQuestion.question}
          </p>

          {/* Emoji prompt for Sign -> Meaning */}
          {currentQuestion.promptEmoji && (
            <div className="flex justify-center mt-8">
              <div className="w-36 h-36 bg-purple-50 rounded-2xl flex items-center justify-center text-7xl">
                {currentQuestion.promptEmoji}
              </div>
            </div>
          )}

          {/* ========================= */}
          {/* ANSWER OPTIONS */}
          {/* ========================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

            {options.map((option, index) => {

              const optionIsCorrect =
                option === currentQuestion.correctAnswer;

              const optionIsSelected =
                option === selectedAnswer;

              let optionClass =
                "border-gray-200 bg-white hover:border-purple-400 hover:bg-purple-50";

              if (selectedAnswer !== null) {
                if (optionIsCorrect) {
                  optionClass =
                    "border-green-500 bg-green-50 text-green-700";
                } else if (optionIsSelected) {
                  optionClass =
                    "border-red-500 bg-red-50 text-red-700";
                } else {
                  optionClass =
                    "border-gray-200 bg-gray-50 text-gray-400";
                }
              }

              return (
                <button
                  key={`${option}-${index}`}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedAnswer !== null}
                  className={`min-h-24 border-2 rounded-2xl px-6 py-5 flex items-center justify-center text-center transition ${optionClass}`}
                >

                  {/* Emoji options */}
                  {currentQuestion.type ===
                  "meaning-to-sign" ? (
                    <span className="text-5xl">
                      {option}
                    </span>
                  ) : (
                    <span className="text-lg font-medium">
                      {option}
                    </span>
                  )}

                </button>
              );
            })}

          </div>

          {/* ========================= */}
          {/* FEEDBACK */}
          {/* ========================= */}

          {selectedAnswer !== null && (
            <div
              className={`mt-6 rounded-xl p-4 ${
                isCorrect
                  ? "bg-green-50"
                  : "bg-red-50"
              }`}
            >

              <div className="flex items-start gap-3">

                {isCorrect ? (
                  <CheckCircle2
                    size={22}
                    className="text-green-600 flex-shrink-0 mt-0.5"
                  />
                ) : (
                  <XCircle
                    size={22}
                    className="text-red-600 flex-shrink-0 mt-0.5"
                  />
                )}

                <div>

                  <p
                    className={`font-semibold ${
                      isCorrect
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {isCorrect
                      ? "Correct!"
                      : "Not quite!"}
                  </p>

                  {!isCorrect && (
                    <p className="text-sm text-gray-600 mt-1">
                      The correct meaning is{" "}
                      <strong>
                        {currentQuestion.correctMeaning}
                      </strong>
                      .
                    </p>
                  )}

                  {isCorrect && (
                    <p className="text-sm text-gray-600 mt-1">
                      You identified the sign correctly.
                    </p>
                  )}

                </div>

              </div>
            </div>
          )}

          {/* ========================= */}
          {/* NEXT BUTTON */}
          {/* ========================= */}

          {selectedAnswer !== null && (
            <div className="flex justify-end mt-6">

              <button
                onClick={handleNext}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
              >
                {questionIndex === questions.length - 1
                  ? "See Results"
                  : "Next Question"}
              </button>

            </div>
          )}

        </section>

      </main>
    </>
  );
}