import './Skills.css';

const skillGroups = [
  {
    category: 'Programming',
    summary:
      'Strong foundation for building backend logic, automation scripts, and algorithmic problem solving.',
    skills: ['Python', 'Java', 'C'],
  },
  {
    category: 'Web',
    summary:
      'Frontend development experience focused on responsive interfaces, reusable components, and performance.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Tools',
    summary:
      'Daily tools used for version control, testing, reporting, dashboarding, and engineering productivity.',
    skills: ['Git', 'Testing', 'Power BI', 'Excel'],
  },
  {
    category: 'Database',
    summary:
      'Relational data modeling and query writing for application-driven and analytical use cases.',
    skills: ['MySQL'],
  },
  {
    category: 'AI/ML',
    summary:
      'Applied machine learning workflows from data preparation to model evaluation and insight generation.',
    skills: ['Machine Learning', 'Data Analysis'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal-item" key={group.category}>
              <h3>{group.category}</h3>
              <p className="skill-summary">{group.summary}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
