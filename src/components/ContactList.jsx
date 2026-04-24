function ContactList({ items }) {
  return (
    <ul className="contact-list">
      {items.map((item) => (
        <li key={`${item.icon}-${item.value}`} className="contact-item">
          <span className="contact-icon" aria-hidden="true">
            <i className={item.icon}></i>
          </span>
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}

export default ContactList
