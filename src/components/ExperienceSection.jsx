function ExperienceSection({ items }) {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-index">01</span>
        <h3>Experience</h3>
      </div>

      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.company}-${item.title}`} className="timeline-item">
            <div className="timeline-meta">
              <p>{item.period}</p>
              <span>{item.company}</span>
            </div>
            <div className="timeline-body">
              <h4>{item.title}</h4>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
