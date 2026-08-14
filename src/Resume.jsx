import React, { useEffect } from 'react';
import { ArrowLeft, FileDown, Printer } from 'lucide-react';
import { CONTACT, SOCIAL } from './config';

function Resume() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Sudhir Kadam | Resume';
    document.body.classList.add('cv-open');
    return () => {
      document.title = previousTitle;
      document.body.classList.remove('cv-open');
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-page">
      <div className="cv-toolbar no-print">
        <a href="#home" className="btn btn-ghost">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to portfolio
        </a>
        <div className="cv-toolbar-actions">
          <button type="button" className="btn btn-ghost" onClick={handlePrint}>
            <Printer size={18} aria-hidden="true" />
            Print
          </button>
          <button type="button" className="btn btn-primary" onClick={handlePrint}>
            <FileDown size={18} aria-hidden="true" />
            Save as PDF
          </button>
        </div>
      </div>
      <p className="cv-hint no-print">
        Choose <strong>Save as PDF</strong> as the destination in the print dialog, then save.
      </p>

      <article className="cv-sheet" aria-label="Resume">
        <header className="cv-header">
          <h1>SUDHIR KADAM</h1>
          <p className="cv-contact-line">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span> | </span>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
            <span> | </span>
            <span>{CONTACT.location}</span>
            <span> | </span>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span> | </span>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              GitHub Projects
            </a>
          </p>
        </header>

        <section className="cv-section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            Software Developer with 2+ years of experience building scalable, production-ready web
            applications using React, PHP, Node.js, JavaScript, HTML and CSS. Skilled in designing
            RESTful APIs, implementing secure authentication (JWT), and optimizing database
            performance using MySQL and MongoDB. Strong understanding of backend architecture,
            database optimization, and real-world system design. Focused on writing clean,
            maintainable, and high-performance code.
          </p>
        </section>

        <section className="cv-section">
          <h2>SKILLS</h2>
          <ul className="cv-bullets">
            <li>
              <strong>Programming Languages:</strong> JavaScript, PHP, Java
            </li>
            <li>
              <strong>Backend Development:</strong> Node.js, Express.js, REST APIs, Middleware, MVC
              Architecture, JSON, Authentication (JWT)
            </li>
            <li>
              <strong>Frontend Development:</strong> React.js, JavaScript (ES6+), HTML, CSS, Bootstrap
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB
            </li>
            <li>
              <strong>DevOps &amp; Tools:</strong> Git, GitHub, Docker, AWS(Basic), Postman
            </li>
            <li>
              <strong>AI Tools:</strong> ChatGPT, GitHub Copilot, Cursor, Claude, Gemini
            </li>
            <li>
              <strong>Other:</strong> Caching (Redis), Rate Limiting, API Design, API Security, Error
              Handling, Async Programming
            </li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>EXPERIENCE</h2>

          <div className="cv-entry">
            <div className="cv-entry-head">
              <h3>Software Developer, Sparken IT Solutions Private Ltd, Pune</h3>
              <span>(Nov 2024 - Present)</span>
            </div>
            <ul className="cv-bullets">
              <li>
                Architected and deployed a full-stack e-commerce platform handling end-to-end user
                journeys, including secure cart management, checkout pipelines, and automated order
                processing
              </li>
              <li>
                Designed and optimized secure RESTful APIs using Node.js and Express.js,
                significantly minimizing payload sizes and improving overall API response efficiency
              </li>
              <li>
                Integrated secure payment gateway (Razor pay) with backend validation and order
                verification
              </li>
              <li>
                Enforced enterprise-grade security by implementing authentication using JSON Web
                Tokens (JWT) and Role-Based Access Control (RBAC)
              </li>
              <li>
                Optimized complex MySQL queries and indexed database tables, reducing data retrieval
                latency by 35% and improving application response efficiency.
              </li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-head">
              <h3>Software Developer Intern, G Soft Solutions Private Ltd, Pune</h3>
              <span>(May 2024 - Oct 2024)</span>
            </div>
            <ul className="cv-bullets">
              <li>
                Developed and maintained responsive, user-centric web applications utilizing
                React.js and Node.js, driving measurable improvements in frontend performance and UI
                responsiveness.
              </li>
              <li>
                Constructed clean REST APIs to facilitate seamless asynchronous frontend-backend
                communication and state rehydration.
              </li>
              <li>
                Streamlined backend data flows by implementing efficient logic wrappers and
                middleware, reducing redundant server load during peak operations.
              </li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>PROJECTS</h2>
          <div className="cv-entry">
            <h3>Dealer Commander – Office Supply Management E-Commerce System</h3>
            <ul className="cv-bullets">
              <li>
                Engineered dynamic UI components (Cart, Checkout, Order Summary) using React.js,
                managing global state with the Context API
              </li>
              <li>
                Developed end-to-end core business logic including multi-tier promotional code
                validation, real-time tax calculations, and dynamic shipping cost calculations
              </li>
              <li>
                Built secure order processing pipelines with Node.js/Express, utilizing Redis for
                session caching and Postman for rigorous API automated testing
              </li>
              <li>
                Implemented JWT-based authentication and role-based access control (RBAC) for
                secure user management
              </li>
              <li>Managed relational data in MySQL and tested APIs using Postman</li>
            </ul>
          </div>
        </section>

        <section className="cv-section">
          <h2>EDUCATION</h2>
          <div className="cv-entry-head">
            <h3>Bachelor of Technology (Electronics &amp; Telecommunication)</h3>
            <span>Aug 2018 – July 2022 | CGPA: 8.35</span>
          </div>
          <p className="cv-school">
            Shri Guru Gobind Singhji Institute of Engineering &amp; Technology, Nanded, Maharashtra
          </p>
        </section>
      </article>
    </div>
  );
}

export default Resume;
