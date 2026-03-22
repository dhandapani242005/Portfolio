import './Education.css';

const educationData = [
  {
    title: 'Artificial Intelligence and Data Science',
    level: 'B.Tech',
    detail: 'CGPA: 8.1',
    timeline: '2023 - 2026',
    highlights: [
      'Focused on machine learning, data engineering fundamentals, and applied AI concepts',
      'Completed project-driven coursework across analytics and full stack development',
    ],
  },
  {
    title: 'Electrical and Electronics Engineering',
    level: 'Diploma',
    detail: 'Score: 86.4%',
    timeline: '2020 - 2023',
    highlights: [
      'Built strong technical fundamentals in programming and engineering mathematics',
      'Developed practical problem-solving skills through lab and mini-project work',
    ],
  },
  {
    title: 'Secondary School Leaving Certificate',
    level: 'SSLC',
    detail: 'Score: 63%',
    timeline: '2019 - 2020',
    highlights: [
      'Established core academic foundation and discipline for higher studies',
      'Strengthened analytical and communication skills in early academic training',
    ],
  },
];

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {educationData.map((item) => (
            <article className="education-card reveal-item" key={item.title}>
              <h3>{item.title}</h3>
              <div className="education-meta">
                {item.level && <span className="education-level">{item.level}</span>}
                {item.level && <span className="education-dot">•</span>}
                <span className="education-timeline">{item.timeline}</span>
              </div>
              <p>{item.detail}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
