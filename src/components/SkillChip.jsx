function AiLogo({ name }) {
  if (name === 'Codex') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 7.5 12 4l6 3.5v9L12 20l-6-3.5v-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="m9.2 10.2 2.8-1.6 2.8 1.6v3.1L12 14.9l-2.8-1.6v-3.1Z" fill="currentColor" opacity="0.28" />
      </svg>
    )
  }

  if (name === 'Gemini') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.5c1.1 3.8 3.2 5.9 7 7-3.8 1.1-5.9 3.2-7 7-1.1-3.8-3.2-5.9-7-7 3.8-1.1 5.9-3.2 7-7Z"
          fill="currentColor"
        />
        <circle cx="17.7" cy="6.3" r="1.2" fill="currentColor" opacity="0.55" />
      </svg>
    )
  }

  if (name === 'ChatGPT') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 5.2a3.4 3.4 0 0 1 5.8 2.4v.3a3.4 3.4 0 0 1 2.5 5.3 3.4 3.4 0 0 1-2 6.1 3.4 3.4 0 0 1-5.4 1.5 3.4 3.4 0 0 1-6.7-.9 3.4 3.4 0 0 1-2.5-5.3 3.4 3.4 0 0 1 2-6.1A3.4 3.4 0 0 1 12 5.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9.2 7.7 14.7 11m-5.4 2.2h5.6m-5 2.9 4.9-2.9m-4.7-2.2 2.8-4.2m1.9 9.3 2.6 1.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  if (name === 'Claude') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.1 6.2h5.7v2.1H8.6v2h3v2h-3v2.2h3.2v2.1H6.1V6.2Zm7.1 0h2.6c2.3 0 4.1 1.4 4.1 5.2s-1.8 5.2-4.1 5.2h-2.6V6.2Zm2.5 8.3c1 0 1.8-.6 1.8-3.1s-.8-3.1-1.8-3.1h-.1v6.2h.1Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return null
}

const skillIcons = {
  Laravel: { type: 'logo', className: 'devicon-laravel-plain colored' },
  PHP: { type: 'logo', className: 'devicon-php-plain colored' },
  React: { type: 'logo', className: 'devicon-react-original colored' },
  JavaScript: { type: 'logo', className: 'devicon-javascript-plain colored' },
  MySQL: { type: 'logo', className: 'devicon-mysql-plain colored' },
  'RESTful API': { type: 'icon', className: 'bi bi-hdd-network' },
  Blade: { type: 'icon', className: 'bi bi-window-stack' },
  jQuery: { type: 'logo', className: 'devicon-jquery-plain colored' },
  HTML5: { type: 'logo', className: 'devicon-html5-plain colored' },
  CSS3: { type: 'logo', className: 'devicon-css3-plain colored' },
  AJAX: { type: 'icon', className: 'bi bi-arrow-repeat' },
  Git: { type: 'logo', className: 'devicon-git-plain colored' },
  GitHub: { type: 'logo', className: 'devicon-github-original' },
  Postman: { type: 'logo', className: 'devicon-postman-plain colored' },
  Codex: { type: 'custom' },
  Gemini: { type: 'custom' },
  ChatGPT: { type: 'custom' },
  Claude: { type: 'custom' },
}

function SkillChip({ name }) {
  const icon = skillIcons[name] ?? { type: 'icon', className: 'bi bi-code-slash' }

  return (
    <span className="chip">
      <span className="skill-icon" aria-hidden="true">
        {icon.type === 'custom' ? <AiLogo name={name} /> : <i className={icon.className}></i>}
      </span>
      {name}
    </span>
  )
}

export default SkillChip
