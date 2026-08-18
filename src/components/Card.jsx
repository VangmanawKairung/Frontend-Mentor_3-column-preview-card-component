const Card = ({
  icon,
  title,
  description,
  link,
  theme,
}) => {
  return (
    <article className={`card card--${theme}`}>
      <img src={icon} alt="" className="card__icon" aria-hidden="true" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <a
        href={link}
        className="card__button"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </a>
    </article>
  );
};

export default Card;
