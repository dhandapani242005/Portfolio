import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About</h2>

        <div className="about-grid">
          <div className="about-summary reveal-item">
            <p>
              I am an AI and Data Science Engineer with 6 months of hands-on
              experience in software product development (Frontend & Backend),
              alongside practical project and internship experience across
              machine learning, IoT systems, and full-stack web development.
            </p>
            <p>
              I have worked on intelligent systems such as face-recognition based
              attendance, voice-enabled assistants, eligibility prediction models,
              and modern React applications. These projects strengthened my
              ability to translate technical ideas into deployable products.
            </p>
            <p>
              I focus on clean architecture, measurable outcomes, and continuous
              learning. I am particularly interested in opportunities where AI,
              data, and product engineering come together to create meaningful
              impact at scale.
            </p>
          </div>

          <div className="about-highlights reveal-item">
            <h3>Core Focus</h3>
            <ul>
              <li>6 months of professional FE & BE product development</li>
              <li>AI and ML model-driven product solutions</li>
              <li>IoT system design, sensing, and automation flows</li>
              <li>Responsive full stack web applications with React</li>
              <li>Data analysis for operational and strategic decisions</li>
              <li>Version-controlled, collaborative development workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
