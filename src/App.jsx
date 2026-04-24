import './App.css'
import ContactList from './components/ContactList.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import SkillChip from './components/SkillChip.jsx'

const resume = {
  name: 'Teeraphat Lansantad',
  role: 'Full Stack Developer',
  location: 'Thailand',
  phone: '064 547 2739',
  email: 'tlansantad@gmail.com',
  lineID: 'tiraphat2547',
  website: 'teeraphat2104.github.io',
  summary:
    'Full Stack Developer with hands-on experience designing and shipping production web applications. Strong backend foundation in Laravel and RESTful API design, paired with frontend skills in React and Blade. Comfortable owning the full development cycle from database schema through deployment with a focus on clean, maintainable code and reliable user experiences.',
  stats: [
    { label: 'Internship Experience', value: '1 Role' },
    { label: 'Project Portfolio', value: '4 Projects' },
    { label: 'Core Stack', value: 'Laravel, Blade' },
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'AIRPORTELs - Bangkok, Thailand',
      period: 'Nov 2025 - Mar 2026',
      details: [
        'Designed and implemented RESTful APIs for luggage check-in, storage tracking, and retrieval workflows used in live airport operations.',
        'Architected the MySQL relational schema for storage slots, booking records, and customer data with integrity constraints.',
        'Built interactive frontend views using React and Laravel Blade, integrating AJAX and jQuery for real-time status updates without page reloads.',
        'Handled end-to-end request and response cycles, input validation, and error handling across the full stack.',
        'Collaborated with team members via Git and Lark, participating in code reviews and iterative feature delivery.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Chaiyaphum Rajabhat University',
      period: '2026',
    },
  ],
  skills: [
    { name: 'Laravel' },
    { name: 'PHP' },
    { name: 'React' },
    { name: 'JavaScript' },
    { name: 'MySQL' },
    { name: 'RESTful API' },
    { name: 'Blade' },
    { name: 'jQuery' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'AJAX' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Postman' },
  ],
  projects: [
    {
      name: 'Graduate Reporting System',
      highlights: [
        'Developed a web-based graduate registration and reporting system for Chaiyaphum Rajabhat University.',
        'Enabled attendance confirmation and required information submission through a responsive multi-step flow.',
        'Built the project to reduce manual paperwork and streamline graduation event preparation.',
      ],
      link: 'http://202.29.51.239/',
    },
    {
      name: 'Dormitory Management System',
      highlights: [
        'Built a full-stack dormitory operations platform with room allocation and resident management workflows.',
        'Implemented monthly billing, payment tracking, and maintenance report management in one centralized system.',
        'Designed secure role-based access control with Laravel, Blade, Tailwind CSS, Vite, and RESTful APIs.',
      ],
    },
    {
      name: 'Volunteer Hour Tracking System',
      highlights: [
        'Developed a centralized system for students to track community service hours and generate official volunteer transcripts.',
        'Engineered a multi-stage approval workflow for administrators to review, verify, and approve submitted volunteer records.',
        'Built reporting and tracking modules across faculties and departments with Laravel, MySQL, Blade, Tailwind CSS, and Vite.',
      ],
    },
    {
      name: 'Barbershop Booking & Queue Management System',
      highlights: [
        'Built a multi-shop booking platform for managing shop profiles, barbers, services, and customer appointments.',
        'Developed scheduling and queue workflows with real-time availability checking, calendar management, and booking conflict handling.',
        'Implemented role-based access, notifications, and reporting using Laravel, MySQL, Blade, Tailwind CSS, and Vite.',
      ],
    },
  ],
  languages: ['Thai - Native', 'English - Working Proficiency'],
}

function App() {
  return (
    <main className="resume-shell">
      <section className="resume-layout">
        <header className="hero-card">
          <div className="hero-copy">
            <span className="eyebrow">Full Stack Resume</span>
            <div className="hero-heading">
              <div className="identity-mark">TL</div>
              <div>
                <h1>{resume.name}</h1>
                <p className="role">{resume.role}</p>
              </div>
            </div>
            <p className="summary">{resume.summary}</p>

            <div className="hero-badges">
              <span className="hero-badge">
                <i className="bi bi-geo-alt"></i>
                {resume.location}
              </span>
              <span className="hero-badge">
                <i className="bi bi-kanban"></i>
                {resume.stats[1].value}
              </span>
              <span className="hero-badge">
                <i className="bi bi-stack"></i>
                {resume.stats[2].value}
              </span>
            </div>
          </div>

          <div className="hero-stats">
            {resume.stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </header>

        <section className="resume-grid">
          <aside className="side-column">
            <section className="panel">
              <div className="panel-header">
                <span className="section-index">01</span>
                <h2>Contact</h2>
              </div>
              <ContactList
                items={[
                  { icon: 'bi bi-geo-alt', value: resume.location },
                  { icon: 'bi bi-telephone', value: resume.phone },
                  { icon: 'bi bi-line', value: resume.lineID },
                  { icon: 'bi bi-envelope', value: resume.email },
                  { icon: 'bi bi-globe', value: resume.website },
                ]}
              />
            </section>

            <section className="panel">
              <div className="panel-header">
                <span className="section-index">02</span>
                <h2>Skills</h2>
              </div>
              <div className="chip-list">
                {resume.skills.map((skill) => (
                  <SkillChip key={skill.name} name={skill.name} />
                ))}
              </div>
            </section>

            <section className="panel side-stack">
              <div>
                <div className="panel-header">
                  <span className="section-index">03</span>
                  <h2>Education</h2>
                </div>
                <div className="education-list">
                  {resume.education.map((item) => (
                    <article key={`${item.school}-${item.degree}`} className="education-card">
                      <h4>{item.degree}</h4>
                      <p>{item.school}</p>
                      <span>{item.period}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <div className="panel-header">
                  <span className="section-index">04</span>
                  <h2>Languages</h2>
                </div>
                <ul className="language-list">
                  {resume.languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>
            </section>
          </aside>

          <section className="main-column">
            <section className="panel content-panel">
              <ExperienceSection items={resume.experience} />
            </section>

            <section className="panel content-panel">
              <div className="section-heading">
                <span className="section-index">05</span>
                <h3>Projects</h3>
              </div>

              <div className="project-grid">
                {resume.projects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </section>
          </section>
        </section>
      </section>
    </main>
  )
}

export default App
