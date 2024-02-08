import React from "react";
import HeaderSection from "../../components/portfolio/header";
import HeroSection from "../../components/portfolio/hero";
import TechStackSection from "../../components/portfolio/tech-stack";
import ProjectsSection from "../../components/portfolio/projects";

const Portfolio = () => {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
    </div>
  );
};

export default Portfolio;
