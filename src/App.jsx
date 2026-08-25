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
import Quiz from "./pages/learner/Quiz.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminLessons from "./pages/admin/AdminLessons.jsx";
import TeacherDashboard from "./pages/teachers/TeacherDashboard.jsx";
import Community from "./pages/learner/community.jsx";
import Progress from "./pages/learner/Progress.jsx";
import Certificates from "./pages/learner/Certificates.jsx";
import Practice from "./pages/learner/practice.jsx";


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
        <Route path="/lesson/:lessonId/quiz" element={<Quiz />} />

        {/* Authentication */}
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>
        <Route path="/admin/lessons"element={<AdminLessons />}/>
        <Route path="/teacher/dashboard" element={<TeacherDashboard />}/>
        <Route path="/community" element={<Community />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}