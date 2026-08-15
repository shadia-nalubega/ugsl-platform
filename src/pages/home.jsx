import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import PopularLessons from "../components/PopularLessons.jsx";
import Why from "../components/Why.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <PopularLessons />
      <Why />
      <Footer />
    </div>
  );
}