import { ArrowUpRight } from "lucide-react";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section id="home" className="hero container">

      <div className="hero-content">

        <p className="eyebrow">
          PORTFOLIO / 2026
        </p>

        <h1>
          Frontend Developer
          <br />
          <span>
            & UX / UI Designer.
          </span>
        </h1>

        <p className="hero-description">
          I design and build clean, useful digital
          experiences with a focus on frontend
          development, user experience, and
          responsive interfaces.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={scrollToProjects}
          >
            View my work
            <ArrowUpRight size={17} />
          </button>

          <a
            className="secondary-button"
            href="#contact"
          >
            Get in touch
          </a>

        </div>

      </div>

      <div className="hero-side">

        <div className="availability">
          <span />
          Open to opportunities
        </div>

        <div className="hero-number">
          01
        </div>

        <p>
          Based in Thailand
          <br />
          Building for the web.
        </p>

      </div>

    </section>
  );
}

export default Hero;