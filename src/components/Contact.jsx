function Contact({ t }) {
  return (
    <section
      id="contact"
      className="contact container"
    >

      <div className="section-label">
        {t.contact.label}
      </div>

      <div className="contact-content">

        <p>
          {t.contact.question}
        </p>

        <h2>
          {t.contact.title}
          <br />
          <span>
            {t.contact.title2}
          </span>
        </h2>

        <div className="contact-links">

          <a
            className="email-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pasutken73@email.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">@</span>
            <span>
              pasutken73@email.com
            </span>
            <span className="link-arrow">
              ↗
            </span>
          </a>

          <a
            className="email-link"
            href="tel:0958790271"
          >
            <span className="link-icon">☎</span>
            <span>
              095-8790271
            </span>
            <span className="link-arrow">
              ↗
            </span>
          </a>

          <a
            className="email-link"
            href="https://github.com/Pasutken"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">
              Git
            </span>

            <span>GitHub</span>

            <span className="link-arrow">
              ↗
            </span>
          </a>

          <a
            className="email-link"
            href="https://www.linkedin.com/in/pasut-fakchaeng-bb1809429/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">
              in
            </span>

            <span>LinkedIn</span>

            <span className="link-arrow">
              ↗
            </span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;