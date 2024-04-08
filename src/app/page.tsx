import AboutSection from "./components/About/AboutSection";
import EmailSection from "./components/Email/EmailSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Menu/Navbar";
import ProjectsSection from "./components/Projects/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}