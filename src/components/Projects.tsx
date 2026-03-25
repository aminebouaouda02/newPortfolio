const projects = [
  {
    icon: "📡",
    title: "IoT Sensor Dashboard",
    description:
      "Real-time dashboard ingesting MQTT data from temperature & humidity sensors, visualising live streams with chart.js and alerting on threshold breaches.",
    stack: ["Python", "MQTT", "Node-RED", "InfluxDB", "Grafana"],
    status: "Completed",
  },
  {
    icon: "⚙️",
    title: "Big Data ETL Pipeline",
    description:
      "Batch pipeline built with Apache Spark and Airflow to clean, transform and load millions of e-commerce records from S3 into a Hive data warehouse.",
    stack: ["Apache Spark", "Airflow", "Hive", "S3", "Python"],
    status: "Completed",
  },
  {
    icon: "🔧",
    title: "Predictive Maintenance",
    description:
      "Machine-learning model (LSTM) trained on time-series sensor data to predict industrial equipment failures before they occur, reducing downtime.",
    stack: ["TensorFlow", "pandas", "scikit-learn", "Kafka", "Python"],
    status: "Completed",
  },
  {
    icon: "📈",
    title: "Smart Energy Monitor",
    description:
      "End-to-end IoT solution that monitors household energy consumption via smart plugs, pushes data through Kafka, and displays analytics in a React dashboard.",
    stack: ["Kafka", "React", "PostgreSQL", "Docker", "Raspberry Pi"],
    status: "In Progress",
  },
  {
    icon: "🌐",
    title: "Data Lake Architecture",
    description:
      "Designed and implemented a multi-layer data lake (raw, curated, analytics) on a Hadoop cluster with Ranger security policies and Atlas lineage tracking.",
    stack: ["Hadoop", "Ranger", "Atlas", "Spark", "Zeppelin"],
    status: "Completed",
  },
  {
    icon: "🤖",
    title: "NLP Log Analyser",
    description:
      "Automated log analysis tool using NLP to classify server-log anomalies, cluster error patterns and generate human-readable incident summaries.",
    stack: ["Python", "Elasticsearch", "scikit-learn", "Kibana", "Docker"],
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="section-divider" />
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card">
              <div className="project-header">
                <span className="project-icon">{p.icon}</span>
                <span className="project-status">{p.status}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-stack">
                {p.stack.map((t) => (
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
