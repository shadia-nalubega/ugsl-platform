import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import About from "./pages/onboarding/About.jsx";
import CreateLesson from "./pages/teachers/CreateLesson.jsx";
import EnjoyingUgSL from "./pages/EnjoyingUgsl.jsx";
import Signup from "./pages/auth/Signup.jsx";
import LearnerDash from "./pages/learner/learner-dash.jsx";
import Courses from "./pages/learner/Courses.jsx";
import CategoryLessons from "./pages/learner/CategoryLessons.jsx";
import LessonComplete from "./pages/learner/LessonComplete.jsx";
import LessonAlt from "./pages/learner/LessonAlt.jsx";
import Lesson from "./pages/Lesson.jsx";
import Community from "./pages/learner/community.jsx";
import Progress from "./pages/learner/Progress.jsx";
import Certificates from "./pages/learner/Certificates.jsx";
import FirstLessonOverview from "./pages/FirstLessonOverview.jsx";
import SecondLessonOverview from "./pages/onboarding/SecondLessonOverview.jsx";
import SecondLesson from "./pages/learner/SecondLesson.jsx";
import Quiz from "./pages/learner/Quiz.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core & Onboarding */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/onboarding" element={<About />} />
        <Route path="/lesson/introduction/overview" element={<FirstLessonOverview />} />
        <Route path="/onboarding/overview" element={<SecondLessonOverview />} />

        {/* Lessons */}
        <Route path="/lesson/basic-greetings" element={<SecondLesson />} />
        <Route path="/lesson/basic-greetings/quiz" element={<Quiz />} />
        <Route path="/lesson/:lessonId" element={<LessonAlt />} />
        <Route path="/lesson-alt/:lessonId" element={<Lesson />} />
        <Route path="/lesson/introduction" element={<LessonAlt />} />
        <Route path="/lesson-2" element={<SecondLesson />} />

        {/* Learner Views */}
        <Route path="/dashboard" element={<LearnerDash />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:categoryId" element={<CategoryLessons />} />
        <Route path="/dictionary" element={<Courses />} /> {/* Temporary fallback */}
        <Route path="/lesson-complete" element={<LessonComplete />} />
        <Route path="/community" element={<Community />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/certificates" element={<Certificates />} />

        {/* Quiz Routes - Handles both base URL and dynamic lesson IDs */}
        <Route path="/learner/quiz" element={<Quiz />} />
        <Route path="/learner/quiz/:lessonId" element={<Quiz />} />
        <Route path="/lesson-2/quiz" element={<Quiz />} />

        {/* Teacher & Auth */}
        <Route path="/teacher/create-lesson" element={<CreateLesson />} />
        <Route path="/enjoying-ugsl" element={<EnjoyingUgSL />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}