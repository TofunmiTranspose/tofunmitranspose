import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Resume: React.FC = () => {
  return (
    <div className="resume-wrapper">
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
        }
        .resume-wrapper {
          font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f8f8f8;
          padding: 20px;
        }
        .container {
          max-width: 800px;
          margin: 20px auto;
          background: #fff;
          padding: 30px 40px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }
        h1 {
          font-size: 2.5em;
          color: #2c3e50;
          margin-bottom: 0.2em;
          text-align: center;
        }
        h2 {
          font-size: 1.5em;
          color: #34495e;
          border-bottom: 2px solid #eee;
          padding-bottom: 0.5em;
          margin-top: 2em;
          margin-bottom: 1em;
        }
        h3 {
          font-size: 1.2em;
          color: #34495e;
          margin-bottom: 0.5em;
        }
        .professional-title {
          font-size: 1.2em;
          color: #555;
          text-align: center;
          margin-bottom: 1.5em;
        }
        .contact-info ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px 30px;
          font-size: 0.95em;
        }
        .contact-info a {
          color: #007bff;
          text-decoration: none;
        }
        .contact-info a:hover {
          text-decoration: underline;
        }
        .section-content ul {
          list-style: disc;
          padding-left: 20px;
          margin-bottom: 1em;
        }
        .section-content li {
          margin-bottom: 0.5em;
        }
        .project-item {
          margin-bottom: 1.5em;
          border-left: 3px solid #007bff;
          padding-left: 15px;
        }
        .project-item h3 {
          color: #007bff;
          margin-bottom: 0.3em;
        }
        @media print {
          body {
            background-color: #fff;
          }
          .container {
            box-shadow: none;
            border: none;
            padding: 0;
            max-width: 100%;
          }
          .no-print {
          display: none !important;
          }
        }
      `}</style>
      <Link to={"/"} className="no-print fixed top-2 left-1">
        <FaArrowCircleLeft size={17} />
      </Link>
      <div className="container">
        <h1>TOFUNMI PAUL OKEOWO</h1>
        <p className="professional-title">
          [ Frontend Developer | React & TypeScript Engineer | UI Enthusiast ]
        </p>

        {/* CONTACT */}
        <h2>Contact Information</h2>
        <div className="contact-info">
          <ul>
            <li>
              <strong>Phone:</strong> +234 9013123768
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:tofexzyno@gmail.com">tofexzyno@gmail.com</a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/tofunmitranspose/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/tofunmitranspose
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/TofunmiTranspose"
                target="_blank"
                rel="noreferrer"
              >
                github.com/TofunmiTranspose
              </a>
            </li>
            <li>
              <strong>Portfolio:</strong>{" "}
              <a
                href="https://tofunmitranspose.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                tofunmitranspose.vercel.app
              </a>
            </li>
            <li>
              <strong>Location:</strong> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* SUMMARY */}
        <h2>Professional Summary</h2>
        <div className="section-content">
          <p>
            Passionate Front-End Web Developer with experience designing and
            building modern, high-performance web applications using React,
            Next.js, and TypeScript. Known for clean, reusable code,
            detail-oriented UI design, and strong problem-solving skills.
            Experienced in leading teams, mentoring developers, and building
            scalable SaaS and e-commerce solutions.
          </p>
        </div>

        {/* SKILLS */}
        <h2>Technical Skills</h2>
        <div className="section-content">
          <ul>
            <li>
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript, HTML5,
              CSS3, SCSS
            </li>
            <li>
              <strong>Frontend Libraries:</strong> React.js, Next.js, Zustand,
              React Router, Shadcn UI, Radix UI
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS, Material UI, DaisyUI,
              Framer Motion, GSAP
            </li>
            <li>
              <strong>Backend & Databases:</strong> Firebase (Auth, Firestore,
              Storage)
            </li>
            <li>
              <strong>APIs & Tools:</strong> REST API, Axios, Webhooks, OpenAI,
              Vite
            </li>
            <li>
              <strong>Dev Tools:</strong> Git, GitHub, VS Code, Linear, Jira,
              Trello, Netlify, Vercel
            </li>
            <li>
              <strong>Soft Skills:</strong> Fast Learner, Detail-Oriented, Team
              Leadership, Logical Thinking
            </li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <h2>Experience</h2>
        <div className="section-content">
          <div>
            <h3 className="item-heading">Frontend Assistant Team Lead</h3>
            <p className="item-subheading">InternPulse — Remote</p>
            <p className="item-date">Aug 2025 – Present</p>
            <ul>
              <li>
                Leading 123 frontend developers in COHORT-9, coordinating
                project structure and workflow.
              </li>
              <li>
                Mentoring members and managing full-stack projects built with
                React, Firebase, and REST APIs.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="item-heading">Frontend Assistant Team Lead</h3>
            <p className="item-subheading">InternPulse — Remote</p>
            <p className="item-date">May 2025 – July 2025</p>
            <ul>
              <li>
                Led a team of 169 frontend developers in COHORT-8, providing
                mentorship and guidance.
              </li>
              <li>
                Collaborated in building Agricon, a full-stack web app
                connecting farmers with storage owners.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="item-heading">Full Stack Developer</h3>
            <p className="item-subheading">Holy Child School — Ogun, Nigeria</p>
            <p className="item-date">Nov 2024 – Present</p>
            <ul>
              <li>
                Built a complete school management web app with secure student
                and teacher portals.
              </li>
              <li>
                Integrated Firebase for authentication, data management, and
                storage.
              </li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}
        <h2>Projects</h2>
        <div className="section-content">
          <div className="project-item">
            <h3>Agricon</h3>
            <p>
              <strong>Technologies:</strong> React.js, Tailwind CSS, Firebase
            </p>
            <p>
              A web app connecting farmers with storage owners to reduce
              post-harvest losses.
            </p>
          </div>

          <div className="project-item">
            <h3>Store-in-a-Link (SaaS)</h3>
            <p>
              <strong>Technologies:</strong> React.js, TypeScript, Tailwind CSS,
              Zustand, Firebase
            </p>
            <p>
              A mini e-commerce SaaS builder that enables vendors to create
              their own store-in-a-link for WhatsApp selling.
            </p>
          </div>

          <div className="project-item">
            <h3>Holy Child School Web App</h3>
            <p>
              <strong>Technologies:</strong> React.js, Firebase, Tailwind CSS
            </p>
            <p>
              A full-stack platform for managing school data, roles, and
              student/teacher dashboards.
            </p>
          </div>

          <div className="project-item">
            <h3>Crypto Dashboard</h3>
            <p>
              <strong>Technologies:</strong> React.js, Chart.js, Tailwind CSS,
              API
            </p>
            <p>
              A live crypto analytics dashboard for tracking real-time price
              data and trends.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <h2>Education</h2>
        <div className="section-content">
          <h3 className="item-heading">Bachelor of Science (In View)</h3>
          <p className="item-subheading">
            National Open University of Nigeria (NOUN), Lagos
          </p>
          <p className="item-date">Expected Graduation: 2028</p>
          <h3 className="item-heading">National Diploma</h3>
          <p className="item-subheading">Lagos State Polytechnic, Lagos</p>
          <p className="item-date">2021 – 2023</p>
        </div>

        {/* CERTIFICATIONS */}
        <h2>Certifications</h2>
        <div className="section-content">
          <ul>
            <li>
              freeCodeCamp — <b>Responsive Web Design</b> (Jan 2025)
            </li>
            <li>
              freeCodeCamp — <b>JavaScript Algorithms & Data Structures</b> (May
              2025)
            </li>
          </ul>
        </div>

        {/* RECOGNITION */}
        <h2>Awards & Recognition</h2>
        <div className="section-content">
          <ul>
            <li>
              Recognized for leadership and mentorship at InternPulse COHORT-8 &
              COHORT-9.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
