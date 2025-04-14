import image from "../assets/Muslimgirl.webp";

export default function Home() {
  return (
    <section className="home-section" id="home">
      <div className="text-box">
        <h2 className="intro-text">
          Hey, I&apos;m Habeebah Olasubomi, a{" "}
          <span>Frontend Web Developer</span>
        </h2>
        <p className="intro-paragraph">
          I&apos;m a passionate Frontend Web Developer with a strong foundation
          in creating responsive and dynamic user interfaces.
        </p>

        <button className="contact-btn">Hire Me</button>
        <input type="button" value="Download CV" className="contact-btn cv" />
      </div>

      <div className="image-box">
        <img src={image} alt="" width={"450px"} />
      </div>
    </section>
  );
}
