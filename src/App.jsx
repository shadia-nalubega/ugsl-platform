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
import Lesson from "./pages/learner/Lesson.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<About />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/teacher/create-lesson" element={<CreateLesson />} />
        <Route path="/enjoying-ugsl" element={<EnjoyingUgSL />} />
        <Route path="/dashboard" element={<LearnerDash />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:categoryId" element={<CategoryLessons />} />
        <Route path="/lesson-complete" element={<LessonComplete />} />

        {/* Authentication */}
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}