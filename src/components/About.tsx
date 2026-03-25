export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="section-divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I&apos;m a <strong>Master 1 student in Big Data &amp; IoT</strong> at
              the National School of Arts and Crafts (ENSAM) Casablanca, Morocco.
            </p>
            <p>
              My studies blend <strong>large-scale data processing</strong>,
              distributed systems, and the Internet of Things — equipping me to
              design pipelines that turn raw sensor data into actionable insights.
            </p>
            <p>
              I enjoy working on end-to-end projects: from connecting embedded
              devices and ingesting streams, to building dashboards and machine
              learning models that power real-world decisions.
            </p>
            <p>
              Outside of academics I explore open-source tools, contribute to
              small side-projects, and stay current with the latest trends in
              cloud-native data infrastructure.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years of study in Big Data</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies learned</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">ENSAM</div>
              <div className="stat-label">Casablanca, Morocco</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
