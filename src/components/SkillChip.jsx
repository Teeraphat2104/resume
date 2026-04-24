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
}

function SkillChip({ name }) {
  const icon = skillIcons[name] ?? { type: 'icon', className: 'bi bi-code-slash' }

  return (
    <span className="chip">
      <span className="skill-icon" aria-hidden="true">
        <i className={icon.className}></i>
      </span>
      {name}
    </span>
  )
}

export default SkillChip
