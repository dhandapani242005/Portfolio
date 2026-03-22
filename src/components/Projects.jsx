import Button from './Button';
import './Projects.css';

const projects = [
  {
    title: 'Smart Attendance System (Face Recognition)',
    description:
      'Built an intelligent attendance automation platform that verifies users in real time using computer vision, reducing manual tracking effort and improving attendance accuracy.',
    highlights: [
      'Implemented face detection and recognition pipeline for classroom/workplace scenarios',
      'Integrated cloud-backed storage for attendance logs and basic reporting',
    ],
    tech: ['Python', 'OpenCV', 'Firebase'],
    github: '#',
  },
  {
    title: 'Voice-Based Virtual Assistant (IoT)',
    description:
      'Developed an IoT assistant that interprets voice commands to trigger device-level actions and automate daily operational tasks in a connected setup.',
    highlights: [
      'Designed command-processing flow for reliable speech-to-action execution',
      'Connected assistant logic with IoT device control for practical automation',
    ],
    tech: ['Python', 'IoT', 'Speech Recognition'],
    github: '#',
  },
  {
    title: 'Loan Eligibility Checker',
    description:
      'Created a predictive application that evaluates applicant information and provides data-driven eligibility recommendations to support faster screening decisions.',
    highlights: [
      'Performed feature preparation and model comparison for better accuracy',
      'Delivered interpretable prediction outputs for non-technical users',
    ],
    tech: ['Machine Learning', 'Python', 'Data Analysis'],
    github: '#',
  },
  {
    title: 'AI Fitness Coach (React)',
    description:
      'Designed and implemented a React-based fitness experience that tracks user activity, suggests adaptive plans, and promotes consistency through personalized progress insights.',
    highlights: [
      'Built reusable UI components for tracking and recommendation views',
      'Structured data-driven recommendation logic based on user progress trends',
    ],
    tech: ['React', 'JavaScript', 'CSS'],
    github: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal-item" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Button
                href={`https://www.google.com/search?q=${encodeURIComponent(project.title)}`}
                text="Explore More"
                variant="primary"
                target="_blank"
                rel="noreferrer"
                ariaLabel={`Search for ${project.title} on Google`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
