function Contact() {
  return (
    <section
      id="contact"
      className="contact container"
    >
      <div className="section-label">
        04 — CONTACT
      </div>

      <div className="contact-content">
        <p>
          Have a project or opportunity?
        </p>

        <h2>
          Let's make something
          <br />
          <span>useful.</span>
        </h2>

        <div className="contact-links">

          {/* Email */}
          <a
            className="email-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pasutken73@email.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">@</span>
            <span>pasutken73@email.com</span>
            <span className="link-arrow">↗</span>
          </a>

          {/* Phone */}
          <a
            className="email-link"
            href="tel:YOUR_PHONE_NUMBER"
          >
            <span className="link-icon">☎</span>
            <span>095-8790271</span>
            <span className="link-arrow">↗</span>
          </a>

          {/* GitHub */}
          <a
            className="email-link"
            href="https://github.com/Pasutken"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">Git</span>
            <span>GitHub</span>
            <span className="link-arrow">↗</span>
          </a>

          {/* LinkedIn */}
          <a
            className="email-link"
            href="https://www.linkedin.com/in/pasut-fakchaeng-bb1809429/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="link-icon">in</span>
            <span>LinkedIn</span>
            <span className="link-arrow">↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;