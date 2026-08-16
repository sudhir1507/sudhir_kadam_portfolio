import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  Menu,
  Moon,
  Server,
  Sun,
  X,
} from 'lucide-react';
import profileImg from './assets/profile.jpg';
import Resume from './Resume';
import { CONTACT, EMAILJS, SOCIAL } from './config';
import {
  education,
  experience,
  navLinks,
  projects,
  services,
  skillGroups,
  stats,
} from './data';

const serviceIcons = { Code2, Server, Database, Lock };

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.057 1.532 1.057.892 1.566 2.341 1.114 2.91.852.092-.663.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.077 0-1.122.39-2.04 1.029-2.76-.103-.26-.446-1.302.098-2.713 0 0 .84-.275 2.75 1.053A9.34 9.34 0 0 1 12 6.844a9.34 9.34 0 0 1 2.504.345c1.909-1.328 2.748-1.053 2.748-1.053.546 1.411.203 2.453.1 2.713.64.72 1.028 1.638 1.028 2.76 0 3.947-2.338 4.815-4.566 5.068.359.317.679.943.679 1.901 0 1.372-.012 2.477-.012 2.814 0 .263.18.58.688.481A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const socials = [
  { label: 'GitHub', href: SOCIAL.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: SOCIAL.linkedin, Icon: LinkedInIcon },
];

function App() {
  const [showResume, setShowResume] = useState(() => window.location.hash === '#cv');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const syncView = () => setShowResume(window.location.hash === '#cv');
    window.addEventListener('hashchange', syncView);
    return () => window.removeEventListener('hashchange', syncView);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'light' ? '#f4f7f8' : '#0a0c0f');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (EMAILJS.publicKey) {
      emailjs.init({ publicKey: EMAILJS.publicKey });
    }
  }, []);

  useEffect(() => {
    const ids = ['home', 'about', 'services', 'skills', 'projects', 'experience', 'education', 'contact'];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!nodes.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [showResume]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-on-scroll');
    if (!nodes.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [showResume]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      setErrorMessage('Contact form is not configured. Please email me instead.');
      setLoading(false);
      return;
    }

    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          title: formData.subject,
          message: formData.message,
        },
        { publicKey: EMAILJS.publicKey }
      )
      .then(
        () => {
          setFormSubmitted(true);
          setLoading(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          const detail = error?.text || error?.message || '';
          setErrorMessage(
            detail
              ? `Could not send (${detail}). Please email me instead.`
              : 'Could not send. Please email me instead.'
          );
          setLoading(false);
        }
      );
  };

  const closeMenu = () => setMenuOpen(false);

  if (showResume) {
    return <Resume />;
  }

  return (
    <div className="portfolio-page">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <nav className={`site-nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary">
        <div className="container nav-inner">
          <a className="nav-brand" href="#home" onClick={closeMenu}>
            Sudhir Kadam
          </a>

          <div id="primary-menu" className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className={`nav-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
                    href={link.href}
                    aria-current={activeSection === link.href.slice(1) ? 'true' : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn-outline nav-cta" href="#contact" onClick={closeMenu}>
              Hire me
            </a>
          </div>

          <div className="nav-tools">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="primary-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-media">
          <img
            src={profileImg}
            alt="Illustration of software developer Sudhir Kadam at a workstation"
            className="hero-media-img"
            width="1200"
            height="800"
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero-media-veil" />
        </div>

        <div className="container hero-content">
          <p className="hero-kicker reveal">Software Developer · Pune, India</p>
          <h1 className="hero-title reveal">
            <span className="hero-brand">Sudhir Kadam</span>
            <span className="hero-role">Full Stack Developer</span>
          </h1>
          <p className="hero-lead reveal reveal-delay-1">
            I build production React, Node.js, Python, and AI-assisted systems for e-commerce,
            healthcare operations, and on-demand marketplaces — with secure APIs, careful data
            access, and measurable performance work.
          </p>
          <div className="hero-actions reveal reveal-delay-2">
            <a href="#cv" className="btn btn-primary">
              Download CV <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#projects" className="btn btn-ghost">
              View work <ArrowRight size={18} aria-hidden="true" />
            </a>
            <div className="hero-socials">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="social-btn"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="stats-strip" aria-label="Highlights">
          <div className="container">
            <ul className="stats-grid">
              {stats.map((stat) => (
                <li key={stat.label} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-layout reveal-on-scroll">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">About</p>
              <h2>Building software that ships</h2>
            </header>
            <div className="about-copy">
              <p>
                I am Sudhir Kadam, a full stack developer in Pune. I work across React, Node.js,
                Python, and AI-assisted workflows — shipping e-commerce platforms, healthcare
                operations tools, and on-demand marketplace products with secure APIs and
                performance-focused backends.
              </p>
              <p>
                I am open to full-time roles and freelance work on backend-heavy products, APIs, and
                production web apps. If that matches what you are hiring for, say hello below.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section section-muted">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Services</p>
              <h2>What I deliver</h2>
              <p className="section-intro">
                The same skills I use in production: storefronts, APIs, data, and access control.
              </p>
            </header>
            <div className="services-grid">
              {services.map(({ title, icon, description }) => {
                const Icon = serviceIcons[icon];
                return (
                  <article key={title} className="service-item reveal-on-scroll">
                    <div className="service-icon" aria-hidden="true">
                      {Icon ? <Icon size={22} /> : null}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Skills</p>
              <h2>Core tools and technologies</h2>
            </header>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-group reveal-on-scroll">
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-muted">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Projects</p>
              <h2>Selected work</h2>
              <p className="section-intro">
                Production platforms spanning e-commerce, healthcare operations, and on-demand
                marketplaces.
              </p>
            </header>

            <div className="projects-grid">
              {projects.map((project) => (
                <article key={project.title} className="project-card reveal-on-scroll">
                  <div className={`project-cover project-cover-${project.kicker.toLowerCase()}`}>
                    <span>{project.kicker}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul className="tag-list" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a href="#contact">
                      <ExternalLink size={16} aria-hidden="true" /> Request a walkthrough
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Experience</p>
              <h2>Where I&apos;ve grown</h2>
            </header>
            <ol className="timeline">
              {experience.map((item, index) => (
                <li key={item.role + item.company} className="timeline-item reveal-on-scroll">
                  <span className="timeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="timeline-body">
                    <div className="timeline-meta">
                      <span className="timeline-company">{item.company}</span>
                      <time className="timeline-period">{item.period}</time>
                    </div>
                    <h3>{item.role}</h3>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Education</p>
              <h2>Academic background</h2>
            </header>
            {education.map((item) => (
              <article key={item.title} className="education-block reveal-on-scroll">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </div>
                <div className="education-meta">
                  <span>{item.period}</span>
                  <span className="education-detail">{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="container">
            <header className="section-heading section-heading-left">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s build something useful</h2>
              <p className="section-intro">
                Available for full-time roles, freelance work, and custom backend / full-stack
                builds.
              </p>
            </header>

            <div className="contact-layout">
              <div className="contact-details">
                <a className="contact-row" href={`mailto:${CONTACT.email}`}>
                  <span className="contact-icon" aria-hidden="true">
                    <Mail size={18} />
                  </span>
                  <span>{CONTACT.email}</span>
                </a>
                <p className="contact-row">
                  <span className="contact-icon" aria-hidden="true">
                    <MapPin size={18} />
                  </span>
                  <span>{CONTACT.location}</span>
                </p>
                <div className="hero-socials contact-socials">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="social-btn"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="contact-panel">
                {formSubmitted ? (
                  <div className="form-success" role="status">
                    <h3>Message sent</h3>
                    <p>Thanks — I usually reply within a day.</p>
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    {errorMessage && (
                      <div className="form-error" role="alert">
                        {errorMessage}
                      </div>
                    )}

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="name">Your name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">Your email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Role, freelance project, or question"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell me a bit about the role or project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                      {loading ? 'Sending...' : (
                        <>
                          Send message <ArrowRight size={18} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            <strong>Sudhir Kadam</strong>
            <span> © {new Date().getFullYear()}</span>
          </p>
          <nav aria-label="Footer">
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
