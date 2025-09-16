import { useEffect, useState, useContext } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from '../components/hero'
import Projects from '../components/project'
import Skills from '../components/skills'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import About from '../components/about'
import Roadmap from '../components/roadmap'
import FixedButton from '../components/themebutton'
import { Themecontext } from '../context/themecontext'

function App() {
  const { theme } = useContext(Themecontext);

  function colorchanger(theme) {
    switch (theme) {
      case "light":
        document.documentElement.style.setProperty("--background", "#ffffff");
        document.documentElement.style.setProperty("--section-bg", "#f8fafc");
        document.documentElement.style.setProperty("--card-bg", "#f1f5f9");
        document.documentElement.style.setProperty("--text-color", "#0f172a");
        document.documentElement.style.setProperty("--light-text", "#475569");
        document.documentElement.style.setProperty("--accent-color", "#7c3aed");
        document.documentElement.style.setProperty("--primary-color", "#7c3aed");
        document.documentElement.style.setProperty("--secondary-color", "#db2777");
        document.documentElement.style.setProperty("--nav-bg", "rgba(255,255,255,0.8)");
        document.documentElement.style.setProperty("--gradient-start", "white");
        document.documentElement.style.setProperty("--gradient-end", "white");
         document.documentElement.style.setProperty("--background-project", "#f8fafc");
        break;

      case "dark":
        document.documentElement.style.setProperty("--background", "#0f172a");
        document.documentElement.style.setProperty("--section-bg", "#1e293b");
        document.documentElement.style.setProperty("--card-bg", "#1e293b");
        document.documentElement.style.setProperty("--text-color", "#e2e8f0");
        document.documentElement.style.setProperty("--light-text", "#94a3b8");
        document.documentElement.style.setProperty("--accent-color", "#f472b6");
        document.documentElement.style.setProperty("--primary-color", "#7c3aed");
        document.documentElement.style.setProperty("--secondary-color", "#db2777");
        document.documentElement.style.setProperty("--nav-bg", "rgba(15,23,42,0.8)");
        document.documentElement.style.setProperty("--background-project", "rgba(13, 20, 36, 0.644)");
         document.documentElement.style.setProperty("--gradient-start", "rgba(15, 23, 42, 0.8)");
        document.documentElement.style.setProperty("--gradient-end", "rgba(15, 23, 42, 0.8)");
        break;

      case "red":
        document.documentElement.style.setProperty("--background", "#ffffff");
        document.documentElement.style.setProperty("--section-bg", "#ffe4e6");
        document.documentElement.style.setProperty("--card-bg", "#fff1f2");
        document.documentElement.style.setProperty("--text-color", "#0f172a");
        document.documentElement.style.setProperty("--light-text", "#475569");
        document.documentElement.style.setProperty("--accent-color", "rgba(255, 28, 28, 0.836)");
        document.documentElement.style.setProperty("--primary-color", "rgba(255, 28, 28, 0.836)");
        document.documentElement.style.setProperty("--secondary-color", "#ef4444");
        document.documentElement.style.setProperty("--nav-bg", "rgba(255,255,255,0.8)");
          document.documentElement.style.setProperty("--background-project", "rgba(13, 20, 36, 0.644)");
        document.documentElement.style.setProperty("--gradient-start", "white");
        document.documentElement.style.setProperty("--gradient-end",
           "white");
        document.documentElement.style.setProperty("--background-project", "white");
        break;

      case "blue":
        document.documentElement.style.setProperty("--background", "#ffffff");
        document.documentElement.style.setProperty("--section-bg", "#e0f2fe");
        document.documentElement.style.setProperty("--card-bg", "#f0f9ff");
        document.documentElement.style.setProperty("--text-color", "#0f172a");
        document.documentElement.style.setProperty("--light-text", "#475569");
        document.documentElement.style.setProperty("--accent-color", "rgba(42, 63, 253, 0.75)");
        document.documentElement.style.setProperty("--primary-color", "rgba(50, 70, 253, 0.82)");
        document.documentElement.style.setProperty("--secondary-color", "#3b82f6");
        document.documentElement.style.setProperty("--nav-bg", "rgba(255,255,255,0.8)");
         document.documentElement.style.setProperty("--gradient-start", "white");
        document.documentElement.style.setProperty("--gradient-end", "white");
            document.documentElement.style.setProperty("--background-project", "white");
        break;

      case "contrast":
      default:
        document.documentElement.style.setProperty("--background", "#0f172a");
        document.documentElement.style.setProperty("--section-bg", "#1e293b");
        document.documentElement.style.setProperty("--card-bg", "#1e293b");
        document.documentElement.style.setProperty("--text-color", "#e2e8f0");
        document.documentElement.style.setProperty("--light-text", "#94a3b8");
        document.documentElement.style.setProperty("--accent-color", "#f472b6");
        document.documentElement.style.setProperty("--primary-color", "#7c3aed");
        document.documentElement.style.setProperty("--secondary-color", "#db2777");
        document.documentElement.style.setProperty("--nav-bg", "rgba(15,23,42,0.8)");
          document.documentElement.style.setProperty("--gradient-start", "#7c3aed");
        document.documentElement.style.setProperty("--gradient-end", "#db2777");
        document.documentElement.style.setProperty("--background-project", "rgba(13, 20, 36, 0.644)");
        break;

    }

  }

  useEffect(()=>{colorchanger(theme)}, [theme]);

  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    setloaded(true);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <Navbar />
      <FixedButton />
      <Hero />
      <About />
      <Roadmap />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
