import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import INFO_DATA from "../../components/InfoSection/info.data";
import InfoSection from "../../components/InfoSection/InfoSection";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="home">
      <Sidebar isOpen={isOpen} toogleIsOpen={toogleIsOpen} />
      <Navbar toogleIsOpen={toogleIsOpen} />
      <HeroSection />

      <InfoSection {...INFO_DATA.about} />
      <InfoSection {...INFO_DATA.discover} />
      <InfoSection {...INFO_DATA.services} />
    </div>
  );
};

export default Home;
