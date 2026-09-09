import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
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
          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("projects")}>
            Projects
          </button>

          <button onClick={() => scrollTo("skills")}>
            Skills
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </div>

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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