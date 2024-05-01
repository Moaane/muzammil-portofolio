import Navbar from "../components/Navbar";
import DefaultLayout from "../layout/DefaultLayout";
import HeroSection from "../components/Home/HeroSection";
import { useEffect } from "react";
import AboutSection from "../components/Home/AboutSection";
import Tracker from "../components/Home/Tracker";
import Award from "../components/Home/Award";
import PortofolioSection from "../components/Home/PortofolioSection";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    (async () => {
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
    </div>
  );
};

export default App;
