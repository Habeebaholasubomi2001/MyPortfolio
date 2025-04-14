import {
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import RevealOnScroll from "./Reveal";

const About = () => {
  return (
    <RevealOnScroll className="section">
      <section className="about-section" id="about">
        <h4 className="about">About me.</h4>
        <p className="about-text">
          Hi there! I’m a Frontend Web Developer with a background in
          Microbiology, bringing a unique blend of analytical thinking and
          creativity to the tech world. My goal is to build impactful web
          applications that combine functionality with great design. Currently
          based in Ilorin, Kwara State, Nigeria.
        </p>
        <div className="social-links">
          <div className="connect">
            <h3>Connect with me:</h3>
            <p>
              {" "}
              <FaMailBulk /> : sulaymanhabibat2001@gmail.com
            </p>
            <p>
              {" "}
              <FaWhatsapp /> & <FaPhone /> : +2349158676625
            </p>
          </div>

          <div className="follow">
            <h3>Follow me on:</h3>
            <div>
              <a href="www.linkedin.com/in/sulayman-habibat-olasubomi">
                <FaLinkedinIn />
              </a>

              <a href="https://github.com/Habeebaholasubomi2001">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default About;
