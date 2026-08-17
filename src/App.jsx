import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import About from "./pages/onboarding/About.jsx";
import Lesson from "./pages/Lesson.jsx";
import CreateLesson from "./pages/teachers/CreateLesson.jsx";
import EnjoyingUgSL from "./pages/EnjoyingUgSL.jsx";
import Signup from "./pages/auth/Signup.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<About />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route
          path="/teacher/create-lesson"
          element={<CreateLesson />}
        />
        <Route
          path="/enjoying-ugsl"
          element={<EnjoyingUgSL />}
        />

        {/* Authentication */}
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}