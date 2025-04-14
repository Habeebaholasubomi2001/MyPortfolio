import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import RevealOnScroll from "./Reveal";

const Skills = () => {
  return (
    <RevealOnScroll className="section">
      <div id="skills" className="skills-section">
        <div className="text-container">
          <h3 className="skill-text">Skills</h3>
          <p className="front">Frontend</p>
        </div>
        <div className="logo-container">
          <div className="html-box">
            <FaHtml5 className="html icon" />
            <p>HTML</p>
          </div>

          <div className="css-box">
            <FaCss3 className="css icon" />
            <p>CSS</p>
          </div>

          <div className="tail-box">
            <BiLogoTailwindCss className="tailwind icon" />
            <p>TAILWIND</p>
          </div>

          <div className="js-box">
            <FaJs className="js icon" />
            <p>JS</p>
          </div>

          <div className="react-box">
            <FaReact className="react icon" />
            <p>REACT</p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Skills;
