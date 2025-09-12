import Attributes from "../components/Attributes";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Main = () => {
  return (
    <div>
      <Hero />
      <Attributes />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default Main;
