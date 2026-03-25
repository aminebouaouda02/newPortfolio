const skills = [
  {
    icon: "🐍",
    title: "Programming",
    tags: ["Python", "SQL", "Java", "Scala", "Bash"],
  },
  {
    icon: "📊",
    title: "Big Data",
    tags: ["Apache Spark", "Hadoop", "Hive", "Kafka", "Airflow"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis"],
  },
  {
    icon: "📡",
    title: "IoT & Embedded",
    tags: ["MQTT", "Arduino", "Raspberry Pi", "LoRaWAN", "Node-RED"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["Docker", "Kubernetes", "Git", "CI/CD", "Linux"],
  },
  {
    icon: "🤖",
    title: "Data Science & ML",
    tags: ["pandas", "scikit-learn", "TensorFlow", "Matplotlib", "Jupyter"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="section-divider" />
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.title} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
