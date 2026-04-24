function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h4>{project.name}</h4>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            View Live
          </a>
        ) : null}
      </div>
      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
