import './Experience.css';

const experienceList = [
  {
    role: 'Product Developer Intern',
    company: 'DevOpsLabs',
    period: 'Oct 2025 - Present',
    summary:
      'Contributing to product-focused engineering tasks with emphasis on feature reliability, usability, and release readiness.',
    responsibilities: [
      'Collaborated on Frontend and Backend feature implementation, testing, and iterative improvement cycles',
      'Supported integration tasks across modules to improve product stability',
      'Worked with mentors and peers to align technical decisions with product goals',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Frenzo Technologies',
    period: 'Jun 2024 - Jul 2024',
    summary:
      'Delivered responsive web interfaces and contributed to frontend enhancements during internship sprint cycles.',
    responsibilities: [
      'Built and refined UI components with HTML, CSS, and JavaScript',
      'Improved layout responsiveness and cross-device consistency',
      'Participated in debugging and quality checks before deployment',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experienceList.map((item) => (
            <article className="timeline-card reveal-item" key={`${item.company}-${item.period}`}>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
              <span>{item.period}</span>
              <p className="experience-summary">{item.summary}</p>
              <ul className="experience-points">
                {item.responsibilities.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
