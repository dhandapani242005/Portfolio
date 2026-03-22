import Button from './Button';
import ThemeToggle from './ThemeToggle';
import FeedbackWidget from './FeedbackWidget';
import profileImage from '../assets/profile.jpeg';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-controls">
        <FeedbackWidget />
        <ThemeToggle />
      </div>
      <div className="container hero-content">
        <div className="hero-image-box reveal-item">
          <img src={profileImage} alt="Dhandapani M profile" className="hero-image" />
        </div>

        <div className="hero-text reveal-item">
          <p className="eyebrow">Hello, I am</p>
          <h1>Dhandapani M</h1>
          <h2>AI &amp; Data Science Engineer | Full Stack Developer | Designer</h2>
          <p className="tagline">
            Building intelligent systems and scalable web applications
          </p>

          <div className="hero-chips">
            <span>AI Systems</span>
            <span>Full Stack Apps</span>
            <span>UI/UX Design</span>
            <span>Visual Graphics</span>
            <span>Data-Driven Products</span>
          </div>

          <div className="hero-actions">
            <Button href="#projects" text="View Projects" />
            <Button href="#contact" text="Contact Me" variant="secondary" />
            {/* 
            <Button
              href="/Dhandapani_M_Resume.txt"
              text="Download Resume"
              variant="ghost"
              download
              ariaLabel="Download resume"
            /> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
