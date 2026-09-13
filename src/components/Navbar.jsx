import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">

        <button
          className="logo"
          onClick={() => scrollTo("home")}
        >
          PASUT<span>.</span>
        </button>

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          <button onClick={() => scrollTo("home")}>
            {t.nav.home}
          </button>

          <button onClick={() => scrollTo("about")}>
            {t.nav.about}
          </button>

          <button onClick={() => scrollTo("projects")}>
            {t.nav.projects}
          </button>

          <button onClick={() => scrollTo("skills")}>
            {t.nav.skills}
          </button>

          <button onClick={() => scrollTo("contact")}>
            {t.nav.contact}
          </button>

          {/* Language Switch */}
          <div className="language-switch">
            <button
              className={language === "th" ? "active" : ""}
              onClick={() => setLanguage("th")}
            >
              TH
            </button>

            <span>/</span>

            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </nav>
    </header>
  );
}

export default Navbar;