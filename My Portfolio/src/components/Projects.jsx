import { BsGithub, BsLink } from "react-icons/bs";
import recipeimg from "../assets/recipe.png";
import tipImg from "../assets/tipcalculator.png";
import ratingImg from "../assets/rating.png";
import RevealOnScroll from "./Reveal";

const Projects = () => {
  return (
    <RevealOnScroll className="section">
      <div className="project-section" id="project">
        <h3 className="project">Projects</h3>
        <div className="projectt one ">
          <div className="project-image-box">
            <img
              src={recipeimg}
              alt="Screenshot of the recipe app"
              className="recipe-img"
            />
          </div>
          <div className="description">
            <h2 className="recipe-heading">RECIPE APP</h2>
            <p>
              This is an app built with React JS/TS, it suggests a recipe based
              on a list of ingredients using AI models.
            </p>
            <div className="links">
              <a href="https://github.com/Habeebaholasubomi2001/Chef-Claude-Recipe.git">
                Github code <BsGithub />
              </a>

              <a href="https://chefclauderecipee.netlify.app/">
                Live Demo <BsLink />
              </a>
            </div>
          </div>
        </div>

        <div className="projectt two ">
          <div className="description">
            <h2 className="recipe-heading">TIP CALCULATOR</h2>
            <p>
              This is a tip calculator built with HTML, CSS and vanilla JS. It
              is a frontend mentor challenge
            </p>
            <div className="links">
              <a href="https://github.com/Habeebaholasubomi2001/Tip-Calculator.git">
                Github code <BsGithub />
              </a>

              <a href="https://tipcalcbyhabeebah.netlify.app/">
                Live Demo <BsLink />
              </a>
            </div>
          </div>
          <div className="project-image-box">
            <img
              src={tipImg}
              alt="Screenshot of the app"
              className="recipe-img"
            />
          </div>
        </div>

        <div className="projectt three ">
          <div className="project-image-box">
            <img
              src={ratingImg}
              alt="Screenshot of the app"
              className="recipe-img"
            />
          </div>
          <div className="description">
            <h2 className="recipe-heading">RATING MODAL</h2>
            <p>
              This is another frontend mentor challenge. It is a review modal
              built with HTML5, CSS3 and vanilla JS.
            </p>
            <div className="links">
              <a href="https://github.com/Habeebaholasubomi2001/Ratings-by-Habeebah.git">
                Github code <BsGithub />
              </a>

              <a href="https://ratingsbyhabeebah.netlify.app/">
                Live Demo <BsLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Projects;
