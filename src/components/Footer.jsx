function Footer({ t }) {
  return (
    <footer className="footer container">

      <span>
        © 2026 PASUT
      </span>

      <div>

        <a
          href="https://github.com/Pasutken"
          target="_blank"
          rel="noreferrer"
        >
          {t.footer.github}
        </a>

        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          {t.footer.figma}
        </a>

      </div>

    </footer>
  );
}

export default Footer;