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
    </div>
  )
}

export default App
