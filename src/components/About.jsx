function About({ t }) {
  return (
    <section
      id="about"
      className="section container about"
    >

      <div className="section-label">
        {t.about.label}
      </div>

      <div className="about-content">

        <h2>
          {t.about.title}
          <br />
          <span>
            {t.about.title2}
          </span>
        </h2>

        <p>
          {t.about.description}
        </p>

        <div className="stats">

          <div>
            <strong>3.83</strong>
            <small>{t.about.gpa}</small>
          </div>

          <div>
            <strong>05</strong>
            <small>{t.about.projects}</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;