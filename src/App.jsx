import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import translations from "./data/translations";

function App() {
  const [language, setLanguage] = useState("th");
  const [selectedProject, setSelectedProject] = useState(null);

  const t = translations[language];

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <main>
        <Hero t={t} />

        <About t={t} />

        <Projects
          t={t}
          onSelectProject={setSelectedProject}
        />

        <Skills />

        <Contact t={t} />
      </main>

      <Footer t={t} />

      {/* Project Popup */}
      <ProjectModal
        project={selectedProject}
        t={t}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default App;