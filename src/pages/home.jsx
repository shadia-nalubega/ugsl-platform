import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import PopularLessons from "../components/PopularLessons.jsx";
import Why from "../components/Why.jsx";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Pulled up to overlap the bottom of Hero */}
      <div className="relative z-10 px-8 -mt-24">
        <Features />
      </div>

      <PopularLessons />
      <Why />
    </div>
  );
}