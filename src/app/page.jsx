import HeroSection from "../components/HeroSection";
import AboutSection from "./about/Page";
import ContactPage from "./contact/Page";
import ProjectSection from "./projects/Page";

const Home = () => {
  return (
    <main className="bg-gradient-to-l from-cyan-400 via-cyan-900 to-blue-500">
      <div className="mt-0">
       
        <HeroSection />
        <AboutSection/>
        <ProjectSection/>
        
        <ContactPage/>
      </div>
    </main>
  );
};

export default Home;
