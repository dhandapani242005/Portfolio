import './Certifications.css';

const certifications = [
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    note: 'Validated understanding of cloud and foundational technology concepts.',
  },
  {
    title: 'Gen AI',
    issuer: 'PrepInsta',
    note: 'Covered practical use cases and workflows in generative AI applications.',
  },
  {
    title: 'React',
    issuer: 'PrepInsta',
    note: 'Strengthened component-based UI development and state management fundamentals.',
  },
  {
    title: 'JavaScript ES6',
    issuer: 'PrepInsta',
    note: 'Built strong modern JavaScript proficiency for scalable frontend development.',
  },
  {
    title: 'Project Lifecycle',
    issuer: 'Infosys Springboard',
    note: 'Focused on planning, execution, delivery, and process-oriented project outcomes.',
  },
  {
    title: 'C++',
    issuer: 'Simplilearn',
    note: 'Reinforced programming logic and object-oriented development fundamentals.',
  },
  {
    title: 'Journal Publication (IoT)',
    issuer: 'Academic Publication',
    note: 'Documented research and implementation insights in IoT-focused work.',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="cert-header">
          <h2 className="section-title">Certifications</h2>
          
          <a 
            href="https://www.linkedin.com/in/dhandapani-maruthasalam/details/certifications/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-btn"
          >
            Verify at LinkedIn
          </a>
        </div>

        <div className="cert-grid">
          {certifications.map((certification) => (
            <article className="cert-card reveal-item" key={certification.title}>
              <h3>{certification.title}</h3>
              <span>{certification.issuer}</span>
              <p>{certification.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
