import { useEffect, useState } from 'react'
import './App.css'
import Hero from '../components/hero'
import Projects from '../components/project'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import About from '../components/about'
import Roadmap from '../components/roadmap'
import Skills from '../components/skills'
import Solutions from '../components/solutions'
import Process from '../components/process'
import Services from '../components/services'
import UseCases from '../components/usecases'
import CurrentWork from '../components/currentwork'

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <Navbar className="" />
      <Hero  className="mb-2"  />
      <About  className="mb-2"  />
      <Projects   className="mb-2" />
      <Solutions className="mb-2" />
      <Process className="mb-2" />
      <Services className="mb-2" />
      <UseCases className="mb-2" />
      <Roadmap className="mb-2"  />
      <Skills  className="mb-2"  />
      <Footer />

      <a
        href="https://wa.me/671810319?text=Hi%20Brad%2C%20I%20want%20to%20discuss%20my%20project%20with%20you."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-floating-button"
        aria-label="Contact me on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="whatsapp-icon">
          <path d="M20.52 3.48A11.83 11.83 0 0 0 12.12 0C5.63 0 .38 5.25.38 11.73c0 2.07.54 4.09 1.57 5.87L.17 23.62l6.2-1.62a11.74 11.74 0 0 0 5.75 1.5h.01c6.48 0 11.73-5.25 11.73-11.73 0-3.13-1.22-6.08-3.34-8.29ZM12.12 21.1h-.01a9.73 9.73 0 0 1-4.94-1.35l-.35-.21-3.68.96.98-3.58-.23-.37A9.7 9.7 0 0 1 2.4 11.73c0-5.38 4.35-9.73 9.72-9.73 2.6 0 5.03 1.01 6.86 2.84A9.67 9.67 0 0 1 21.85 11.7c0 5.38-4.35 9.73-9.73 9.73Zm5.34-7.27c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.3-.76.96-.94 1.15-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.69-1.61-1.97-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.08-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51l-.56-.01c-.19 0-.5.07-.77.36-.27.29-1.04 1.02-1.04 2.49s1.06 2.89 1.2 3.09c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.63.7.22 1.34.19 1.85.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.25.17-1.38-.07-.12-.26-.2-.55-.35Z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export default App
