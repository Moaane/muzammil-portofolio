import Navbar from "../components/Navbar";
import DefaultLayout from "../layout/DefaultLayout";
import HeroSection from "../components/Home/HeroSection";
import { useEffect } from "react";
import AboutSection from "../components/Home/AboutSection";
import Tracker from "../components/Home/Tracker";
import Award from "../components/Home/Award";
import PortofolioSection from "../components/Home/PortofolioSection";
import ServicesSection from "../components/Home/ServicesSection";
import Footer from "../components/Footer";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <DefaultLayout>
        <HeroSection />
        <AboutSection />
        <Tracker />
        <Award />
        <PortofolioSection />
        {/* <ServicesSection /> */}
      </DefaultLayout>
      {/* <div className="h-screen"></div> */}
      <Footer />
    </div>
  );
};

export default App;
