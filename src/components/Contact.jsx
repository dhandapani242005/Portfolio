import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please fill out this field';
    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please fill out this field';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/dhandapani.m.143@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _template: "table"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-layout">
        <div className="contact-info reveal-item">
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">
            I am open to full-time roles, internships, and collaborative projects in
            AI, data science, and full stack development. Feel free to reach out
            for opportunities, technical discussions, or project collaborations.
          </p>
          <p>Email: dhandapani.m.143@gmail.com</p>
          <p>Phone: +91 9629179949</p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/dhandapani242005" target="_blank" rel="noreferrer">
              linkedin.com/in/dhandapani242005
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/dhandapani242005" target="_blank" rel="noreferrer">
              github.com/dhandapani242005
            </a>
          </p>
          <p>
            LeetCode:{' '}
            <a href="https://leetcode.com/u/Dhandapanimaruthasalam/" target="_blank" rel="noreferrer">
              leetcode.com/u/Dhandapanimaruthasalam
            </a>
          </p>
        </div>

        <form className="contact-form reveal-item" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <div className="input-container">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-tooltip">{errors.name}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-container">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-tooltip">{errors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <div className="input-container">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <span className="error-tooltip">{errors.message}</span>}
            </div>
          </div>

          <button type="submit" disabled={status === 'sending'} style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="form-status success">
              Message sent successfully! (If this is your first time testing, please check your email inbox to activate FormSubmit.)
            </p>
          )}
          {status === 'error' && (
            <p className="form-status error">
              Oops! Something went wrong. Please try again or email me directly at dhandapani.m.143@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
