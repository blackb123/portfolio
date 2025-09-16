import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <motion.section
      className="roadmap"
      id="roadmap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* First card - comes from LEFT */}
      <motion.div
        className="roadmap-card"
        initial={{ opacity: 0, x: -200 }}   
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Road Map</h2>
        <hr />
        <div className="roadmap-border">
          <div className="road-section">
            <h3>1. 📚 GCE ordinary level</h3>
            <p>
              I began my coding journey during my GCE Ordinary Level, where I
              discovered Python through game development with Pygame. Building
              small games taught me how programming works under the hood and gave
              me an early understanding of functions and logic. It was the first
              step that sparked my passion for tech.
            </p>
          </div>
          <div className="road-section">
            <h3>2. 🎮 Lower Sixth</h3>
            <p>
              In Lower Sixth, I explored C# and Unity, creating simple but
              exciting games that strengthened my logic skills and creativity.
              Along the way, I also learned the basics of SQL and gained more
              awareness of the tech ecosystem. This stage helped me see how coding
              could shape real-world solutions.
            </p>
          </div>
          <div className="road-section">
            <h3>3. 🌐 Upper Sixth</h3>
            <p>
              I deepened my learning in C# and Unity, building more structured
              projects. Alongside, I improved my SQL skills, which gave me
              confidence in managing data-driven applications and understanding
              system design better.
            </p>
          </div>
          <div className="road-section">
            <h3>4. 🏫 First Year University</h3>
            <p>
              In my first year of university, I focused on the backend side of
              development. I learned PHP and MySQL, created APIs to connect to
              databases, and even explored the .NET ecosystem to build desktop apps
              with WinForms, SQLite, and SQL Express. Most of my backend projects
              were built with PHP, where I gained hands-on experience in managing
              databases and server logic.
            </p>
          </div>
          <div className="road-section">
            <h3>5. 🔧 Projects & Collaboration</h3>
            <p>
              Along the way, I worked on multiple projects using Git and GitHub,
              managing version control and collaborating effectively. I also built
              React + PHP projects with custom APIs (coded without frameworks),
              which gave me strong full-stack experience and confidence as a
              developer.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Second card - comes from RIGHT */}
      <motion.div
        className="roadmap-card"
        initial={{ opacity: 0, x: 200 }}  
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <hr />
        <div className="roadmap-border">
          <div className="road-section">
            <h3>I. 💼 Internship – Chiala, Cameroon</h3>
            <p>
              During my internship at Chiala, Cameroon, I was responsible for tasks
              involving Excel and Microsoft Office for documentation and reporting.
              I also worked on computer maintenance, ensuring systems were running
              smoothly and troubleshooting technical issues. This experience helped
              me build practical IT support skills and understand the importance of
              reliability in tech environments.
            </p>
          </div>
          <div className="road-section">
            <h3>II. 💻 Internship – PEFSCOM SARL</h3>
            <p>
              At PEFSCOM SARL, I participated in multiple projects covering
              full-stack web development, desktop application development, database
              management, and basic networking. I gained hands-on experience in
              both frontend and backend workflows, learning how to integrate
              technologies effectively while collaborating in a professional
              setting. This internship strengthened my technical versatility and
              teamwork skills.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
