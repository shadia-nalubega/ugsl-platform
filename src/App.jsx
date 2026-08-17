import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import About from "./pages/onboarding/About.jsx";
import Lesson from "./pages/Lesson.jsx";
import CreateLesson from "./pages/teachers/CreateLesson.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<About />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route path="/teacher/create-lesson" element={<CreateLesson />} />
      </Routes>
    </BrowserRouter>
  );
}