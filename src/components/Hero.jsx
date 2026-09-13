function Hero({ t }) {
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
      <div className="hero-content">

        <div className="hero-meta">
          <p className="eyebrow">
            {t.hero.eyebrow}
          </p>

          <div className="hero-name">
            <span>PASUT</span>
            <span>FAKCHAENG</span>
          </div>
        </div>

        <h1>
          {t.hero.title}
          <br />
          <span>{t.hero.subtitle}</span>
        </h1>

        <p className="hero-description">
          {t.hero.description}
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={scrollToProjects}
          >
            <span>{t.hero.work}</span>

            <span className="button-arrow">
              ↗
            </span>
          </button>

          <a
            className="secondary-button"
            href="#contact"
          >
            {t.hero.contact}
          </a>

        </div>

      </div>

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
            {t.hero.caption}
            <br />
            {t.hero.caption2}
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;