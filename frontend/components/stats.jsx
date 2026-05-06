import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { label: "Projects Completed", value: "15", suffix: "+" },
    { label: "Technologies", value: "12", suffix: "+" },
    { label: "Experience", value: "2", suffix: "+ yrs" },
    { label: "Happy Clients", value: "8", suffix: "+" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">
              {stat.value}
              <span className="stat-suffix">{stat.suffix}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
