import { useState } from 'react';
import './Tools.css';
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiDavinciresolve,
  SiJest,
  SiCanva,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import { 
  FaChartSimple, FaCode, FaPalette,
  FaFigma, FaJira, FaGitlab, FaBootstrap, FaDocker, 
  FaAws, FaMicrosoft, FaLeaf, FaKey, FaVideo, FaSwatchbook, FaPenNib,
  FaBrain, FaNetworkWired
} from 'react-icons/fa6';
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAzure,
} from 'react-icons/tb';

const predefinedTools = [
  // CODE TOOLS
  { name: 'Git', Icon: SiGit, color: '#F05032', category: 'code', description: 'Version control for tracking code changes and collaborative workflows.' },
  { name: 'GitHub', Icon: SiGithub, color: '#24292F', invertDark: true, category: 'code', description: 'Repository hosting, pull-request based reviews, and team collaboration.' },
  { name: 'GitLab', Icon: FaGitlab, color: '#FCA121', category: 'code', description: 'Version control, integrated CI/CD pipelines, and DevOps lifecycle.' },
  { name: 'HTML', Icon: SiHtml5, color: '#E34F26', category: 'code', description: 'Semantic markup for structuring responsive and maintainable web pages.' },
  { name: 'CSS', Icon: SiCss, color: '#1572B6', category: 'code', description: 'Styling language for layouts, animations, and visual interfaces.' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'code', description: 'Primary language for interactive frontend behavior and web applications.' },
  { name: 'React', Icon: SiReact, color: '#61DAFB', category: 'code', description: 'Component-based frontend library for building scalable UI systems.' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3', category: 'code', description: 'Responsive CSS framework for rapid mobile-first frontend development.' },
  { name: 'Python', Icon: SiPython, color: '#3776AB', category: 'code', description: 'Core language for machine learning, automation, and data applications.' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1', category: 'code', description: 'Relational database used for schema design, queries, and backend data.' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', category: 'code', description: 'Cloud backend services for authentication, realtime data, and hosting.' },
  { name: 'Spring Boot', Icon: FaLeaf, color: '#6DB33F', category: 'code', description: 'Java-based framework for robust enterprise REST APIs and microservices.' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ED', category: 'code', description: 'Containerization for consistent environment development and deployment.' },
  { name: 'AWS', Icon: FaAws, color: '#232F3E', invertDark: true, category: 'code', description: 'Comprehensive cloud computing infrastructure and secure hosting.' },
  { name: 'Azure', Icon: TbBrandAzure, color: '#0089D6', category: 'code', description: 'Cloud platform for building, deploying, and managing scalable apps.' },
  { name: 'MS Entra', Icon: FaMicrosoft, color: '#00A4EF', category: 'code', description: 'Identity and access management for secure corporate cloud environments.' },
  { name: 'JWT', Icon: FaKey, color: '#000000', invertDark: true, category: 'code', description: 'Stateless authentication tokens for securing robust RESTful APIS.' },
  { name: 'Jest', Icon: SiJest, color: '#C21325', category: 'code', description: 'Delightful JavaScript testing framework for ensuring codebase integrity.' },
  { name: 'Power BI', Icon: FaChartSimple, color: '#F2C811', category: 'code', description: 'Dashboarding and reporting tool for actionable data visualization.' },
  { name: 'Jira', Icon: FaJira, color: '#0052CC', category: 'code', description: 'Agile project management, sprint planning, and issue tracking.' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', category: 'code', description: 'Cross-platform, open-source JavaScript runtime environment for server-side development.' },
  { name: 'AI', Icon: FaBrain, color: '#55c8f5', category: 'code', description: 'Integration of artificial intelligence and automated systems for intelligent software solutions.' },
  { name: 'ML', Icon: FaNetworkWired, color: '#F7931E', category: 'code', description: 'Machine learning for predictive analysis, data modeling, and pattern recognition.' },
  { name: 'NoSQL', Icon: SiMongodb, color: '#47A248', category: 'code', description: 'NoSQL database management using flexible document-based schemas for scalable data.' },

  // DESIGN TOOLS
  { name: 'Photoshop', Icon: TbBrandAdobePhotoshop, color: '#31A8FF', category: 'design', description: 'Raster image editing, photo manipulation, and digital art creation.' },
  { name: 'Illustrator', Icon: TbBrandAdobeIllustrator, color: '#FF9A00', category: 'design', description: 'Vector graphics design, illustration, and precise scalable typography.' },
  { name: 'Premiere Pro', Icon: FaVideo, color: '#9999FF', category: 'design', description: 'Professional video editing and post-production workflows.' },
  { name: 'DaVinci Resolve', Icon: SiDavinciresolve, color: '#E3535D', category: 'design', description: 'Advanced color grading, visual effects, and high-end video editing.' },
  { name: 'Figma', Icon: FaFigma, color: '#F24E1E', category: 'design', description: 'Collaborative UI/UX prototyping and scalable design systems.' },
  { name: 'Adobe XD', Icon: FaPenNib, color: '#FF61F6', category: 'design', description: 'Vector-based user experience design tool for web and mobile apps.' },
  { name: 'Material', Icon: FaSwatchbook, color: '#757575', invertDark: true, category: 'design', description: 'Design language mapping out modern UI guidelines and visual concepts.' },
  { name: 'Canva', Icon: SiCanva, color: '#00C4CC', category: 'design', description: 'Web-based graphical design tool for engaging visual assets and layouts.' },
];

function Tools() {
  const [activeCategory, setActiveCategory] = useState('code');

  const filteredTools = predefinedTools.filter((t) => t.category === activeCategory);

  return (
    <section id="tools" className="section tools-section">
      <div className="container">
        
        <div className="tools-header-row">
          <div className="tools-title-group">
            <h2 className="section-title" style={{ marginBottom: '0.4rem' }}>
              Tools
            </h2>
            <p className="tools-intro reveal-item" style={{ marginTop: 0, marginBottom: 0 }}>
              Explore the technologies and tools I utilize to craft top-tier software and elegant designs.
            </p>
          </div>

          {/* Custom Toggle Switch */}
          <div className="category-toggle-container reveal-item">
            <div className="toggle-tooltip">
              {activeCategory === 'code' ? 'Switch to Design' : 'Switch to Code'}
            </div>
            <button 
              className={`toolkit-switcher ${activeCategory}`} 
              onClick={() => setActiveCategory(prev => prev === 'code' ? 'design' : 'code')}
              aria-label="Toggle between Code and Design tools"
            >
              <div className="switcher-thumb">
                {activeCategory === 'code' ? <FaCode className="thumb-icon code-icon" /> : <FaPalette className="thumb-icon design-icon" />}
              </div>
              
              <div className="switcher-decorations">
                {activeCategory === 'code' ? (
                  <div className="code-decs">
                    <span className="dec-float dec-1">01</span>
                    <span className="dec-float dec-2">⚙</span>
                    <span className="dec-float dec-3">10</span>
                  </div>
                ) : (
                  <div className="design-decs">
                    <span className="dec-shape shape-circle"></span>
                    <span className="dec-shape shape-triangle"></span>
                    <span className="dec-shape shape-square"></span>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="tools-board reveal-item w-full">
          <h3 className="board-subheading">
            {activeCategory === 'code' ? 'Developer Tools' : 'Designer Tools'}
          </h3>
          {filteredTools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className={`tool-icon ${tool.invertDark ? 'invert-dark' : ''}`} aria-hidden="true">
                <tool.Icon size={42} color={tool.color} />
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <div className="tool-tooltip" role="tooltip">
                {tool.description}
              </div>
            </article>
          ))}
        </div>



      </div>
    </section>
  );
}

export default Tools;
