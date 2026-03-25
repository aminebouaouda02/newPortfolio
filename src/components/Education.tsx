const timeline = [
  {
    date: "2024 – Present",
    degree: "Master 1 — Big Data & IoT",
    school: "ENSAM Casablanca (École Nationale Supérieure des Arts et Métiers)",
    description:
      "Courses in distributed data processing, stream analytics, IoT architectures, cloud computing, machine learning, and data governance.",
  },
  {
    date: "2021 – 2024",
    degree: "Bachelor's Degree — Computer Science & Networks",
    school: "Faculty of Sciences, Morocco",
    description:
      "Foundations in algorithms, data structures, networks, operating systems, databases, and software engineering.",
  },
  {
    date: "2021",
    degree: "High School Diploma — Mathematics",
    school: "Lycée Technique, Morocco",
    description:
      "Baccalauréat with distinction in Mathematics and Physics, earning admission to competitive higher-education programmes.",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
        <div className="section-divider" />
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.date} className="timeline-item">
              <div className="timeline-date">{item.date}</div>
              <h3>{item.degree}</h3>
              <p className="school">{item.school}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
