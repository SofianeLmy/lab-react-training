function Rating(props) {
  const { children } = props;

  let emptyStar = '☆';
  let fullStar = '★';
  let rating;
  const numberOfFullStars = Math.round(children);

  rating = fullStar.repeat(numberOfFullStars).padEnd(5, emptyStar);

  return (
    <div className="rating">
      <span>{rating}</span>
    </div>
  );
}

export default Rating;
