const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  let emptyStar = '☆';
  let fullStar = '★';
  let driverRate;
  const numberOfFullStars = Math.round(rating);

 

  driverRate = fullStar.repeat(numberOfFullStars).padEnd(5, emptyStar);

  return (
    <div className="driverCard">
      <img src={img} alt={name} />

      <div className="driverCardDetails">
        <span>{name}</span>
        <span>{rating}</span>
        <span>{`${car.model} - ${car.licensePlate}`}</span>
      </div>
    </div>
  );
};

export default DriverCard;
