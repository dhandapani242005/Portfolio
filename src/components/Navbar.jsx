import './Navbar.css';
import {
  FaBars,
  FaBriefcase,
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaGraduationCap,
  FaHouse,
  FaScrewdriverWrench,
  FaUser,
} from 'react-icons/fa6';

const navItems = [
  { id: 'home', label: 'Home', Icon: FaHouse },
  { id: 'about', label: 'About', Icon: FaUser },
  { id: 'skills', label: 'Skills', Icon: FaCode },
  { id: 'tools', label: 'Tools', Icon: FaScrewdriverWrench },
  { id: 'projects', label: 'Projects', Icon: FaFolderOpen },
  { id: 'experience', label: 'Experience', Icon: FaBriefcase },
  { id: 'education', label: 'Education', Icon: FaGraduationCap },
  { id: 'certifications', label: 'Certifications', Icon: FaAward },
  { id: 'contact', label: 'Contact', Icon: FaEnvelope },
];

function Navbar({ activeSection, isSidebarOpen, onToggleSidebar, onNavSelect }) {
  return (
    <header className={`navbar-wrap ${isSidebarOpen ? 'is-open' : 'is-collapsed'}`}>
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-top">
          <a href="#home" className="brand" aria-label="Go to home section">
            <span className="brand-mark" aria-hidden="true">
              <img src="/favicon.svg" alt="Logo" style={{ width: '1.4rem', height: '1.4rem' }} />
            </span>
            <span className="brand-label">DM | Portfolio</span>
          </a>
        </div>

        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li 
              key={item.id} 
              className="nav-item"
              style={{ animationDelay: `${45 + index * 40}ms` }}
            >
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onNavSelect(item.id)}
              >
                <span className="nav-icon" aria-hidden="true">
                  <item.Icon />
                </span>
                <span className="nav-label">{item.label}</span>
              </a>
              <span className="nav-tooltip" role="tooltip">
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="nav-bottom">
          <button
            type="button"
            className="sidebar-toggle"
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <FaChevronLeft aria-hidden="true" /> : <FaChevronRight aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
