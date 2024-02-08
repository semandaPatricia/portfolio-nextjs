import HeroSection from "../components/HeroSection";
import AboutSection from "./about/Page";
import ContactPage from "./contact/Page";
const Home = () => {
  return (
    <main className="">
      <div className="mt-8">
       
        <HeroSection />
        <AboutSection/>
        <ContactPage/>
      </div>
    </main>
  );
};

export default Home;
