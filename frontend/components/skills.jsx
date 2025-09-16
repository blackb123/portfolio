import React from "react";
import { motion } from "framer-motion";

export default function SkillsCard() {
  const skills = [
    { name: "Python", level: 80 },
    { name: "C#", level: 75 },
    { name: "C#/winform", level: 90 },
    { name: "Unity", level: 70 },
    { name: "SQL / MySQL", level: 85 },
    { name: "PHP", level: 80 },
    { name: ".NET / WinForms", level: 70 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "Arduino", level: 60 },
    { name: "Git / GitHub", level: 80 },
    { name: "C/C++", level: 80 },
    { name: "Java", level: 50 }
  ];

  return (
    <div className="skill" id="skill">
      <motion.div
        className="skill-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3>Programming Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
