import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Dhandapani M. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/dhandapani242005" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/dhandapani242005" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://leetcode.com/u/Dhandapanimaruthasalam/" target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
