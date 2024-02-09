import ContactSection from "../../components/portfolio/contact";
import FooterSection from "../../components/portfolio/footer";
import HeaderSection from "../../components/portfolio/header";
import HeroSection from "../../components/portfolio/hero";
import ProjectsSection from "../../components/portfolio/projects";
import TechStackSection from "../../components/portfolio/tech-stack";

const Portfolio = () => {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Portfolio;
