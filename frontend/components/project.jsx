import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "TicketFlow",
      description:
        "A robust application designed to help professional organizations efficiently manage client queues and streamline service operations.",
      path: "/src/assets/ticketflow.png",
      tech: ["React", "CSS", "PHP"],
    },
    {
      title: "Python Voice Recognition Agent",
      description:
        "A powerful mini-project leveraging a Python voice recognition library to control computer functionalities with intuitive voice commands.",
      path: "/src/assets/python.png",
      tech: ["Python", "SpeechRecognition", "OS"],
    },
    {
      title: "School Management System",
      description:
        "A comprehensive school and university management system that allows seamless administration of classes, students, teachers, and schedules.",
      path: "/src/assets/school.png",
      tech: ["React", "CSS", "PHP", "MySQL"],
    },
    {
      title: "Unity Game",
      description:
        "An engaging 3D Unity game that challenges players with interactive puzzles and dynamic gameplay, showcasing advanced programming and design skills.",
      path: "/src/assets/unity.png",
      tech: ["Unity", "C#"],
    },
  ];

  return (
    <section id="project">
      <h2 className="project-header">My Projects</h2>

      <div className="project-grid">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div
              className="project-image"
              style={{ backgroundImage: `url(${proj.path})` }}
            ></div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((stack, index) => (
                <span key={index}>{stack}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
