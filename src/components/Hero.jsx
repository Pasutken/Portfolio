function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      className="hero container"
    >
      {/* LEFT */}
      <div className="hero-content">

        <div className="hero-meta">
          <p className="eyebrow">
            PORTFOLIO / 2026
          </p>

          <div className="hero-name">
            <span>PASUT</span>
            <span>FAKCHAENG</span>
          </div>
        </div>

        <h1>
          Frontend Developer
          <br />
          <span>& UX / UI Designer.</span>
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
            <span>View my work</span>
            <span className="button-arrow">
              ↗
            </span>
          </button>

          <a
            className="secondary-button"
            href="#contact"
          >
            Get in touch
          </a>

        </div>

      </div>


      {/* RIGHT - PROFILE */}
      <div className="hero-profile">

        <div className="profile-frame">

          <img
            src="/Portfolio/profile/profile.png"
            alt="Pasut Fakchaeng"
            className="profile-image"
          />

        </div>

        <div className="profile-caption">

          <span>01</span>

          <p>
            Designer & Developer
            <br />
            Creating for the web.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;