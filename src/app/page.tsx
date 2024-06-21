import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className=" container mt-24 mx-auto px-12 py- 14">
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectSection />
      <EmailSection />
      <Footer />
      </div>
   
    </main>
  );
}
