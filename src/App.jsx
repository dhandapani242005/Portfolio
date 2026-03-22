import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/app.css';

const NAV_SECTIONS = ['home', 'about', 'skills', 'tools', 'projects', 'experience', 'education', 'certifications', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const allSectionIds = useMemo(
    () => [
      'home',
      'about',
      'skills',
      'tools',
      'projects',
      'experience',
      'education',
      'certifications',
      'contact',
    ],
    []
  );

  useEffect(() => {
    const observers = [];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const revealItems = entry.target.querySelectorAll('.reveal-item');
            revealItems.forEach((item, index) => {
              item.style.transitionDelay = `${Math.min(index * 90, 520)}ms`;
              item.classList.add('is-visible');
            });
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          if (NAV_SECTIONS.includes(id)) {
            setActiveSection(id);
          }
        }
      },
      { threshold: [0.2, 0.5, 0.75], rootMargin: '-30% 0px -45% 0px' }
    );

    allSectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.add('reveal');
        revealObserver.observe(section);
        navObserver.observe(section);
      }
    });

    observers.push(revealObserver, navObserver);

    const updateActiveOnScroll = () => {
      const pivot = window.innerHeight * 0.38;
      let closestId = 'home';
      let closestDistance = Number.POSITIVE_INFINITY;

      NAV_SECTIONS.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - pivot);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = id;
        }
      });

      setActiveSection(closestId);
    };

    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    window.addEventListener('resize', updateActiveOnScroll);
    updateActiveOnScroll();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('scroll', updateActiveOnScroll);
      window.removeEventListener('resize', updateActiveOnScroll);
    };
  }, [allSectionIds]);

  return (
    <div className={`app-shell ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <Navbar
        activeSection={activeSection}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        onNavSelect={setActiveSection}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
