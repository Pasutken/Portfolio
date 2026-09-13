import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import translations from "./data/translations";

function App() {
  // ภาษาเริ่มต้นเป็นภาษาไทย
  const [language, setLanguage] = useState("th");

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
        <Projects t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export default App;