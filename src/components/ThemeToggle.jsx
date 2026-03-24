import { useEffect, useState } from 'react';
import './ThemeToggle.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage, default to light theme
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // Default to light theme
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="theme-toggle-container">
      <button
        className={`theme-toggle ${isDark ? 'dark' : 'light'}`}
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
      >
      <div className="toggle-thumb">
        {/* Craters for moon */}
        <div className="crater crater-1"></div>
        <div className="crater crater-2"></div>
        <div className="crater crater-3"></div>
      </div>
      
      {/* Background decorations */}
      <div className="decorations">
        {/* Clouds for day */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        
        {/* Stars for night */}
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>
      </button>
      <span className="toggle-custom-tooltip">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </div>
  );
}

export default ThemeToggle;
