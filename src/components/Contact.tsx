const links = [
  {
    icon: "✉️",
    label: "Email",
    value: "amine.bouaouda@example.com",
    href: "mailto:amine.bouaouda@example.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+212 6 00 11 22 33",
    href: "tel:+212600112233",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/amine-bouaouda",
    href: "https://linkedin.com/in/amine-bouaouda",
  },
  {
    icon: "🔍",
    label: "Indeed",
    value: "indeed.com/r/amine-bouaouda",
    href: "https://indeed.com/r/amine-bouaouda",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/aminebouaouda02",
    href: "https://github.com/aminebouaouda02",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <div className="section-divider" />
        <div className="contact-grid">
          <div className="contact-intro">
            <p>
              I&apos;m currently looking for internship and job opportunities in
              Big Data, IoT, and Data Engineering. Whether you have a question,
              a project idea, or just want to say hi — my inbox is always open!
            </p>
            <p>
              Feel free to reach out through any of the channels below and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="contact-links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="contact-link"
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  l.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                <span className="contact-icon">{l.icon}</span>
                <div>
                  <div className="contact-label">{l.label}</div>
                  <div className="contact-value">{l.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
