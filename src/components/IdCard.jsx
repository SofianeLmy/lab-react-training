function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="card">
      <div className="picture">
        <img src={picture} alt="" />
      </div>
      <div className="info">
        <p>
          <strong>First name:</strong>
          {firstName}
        </p>
        <p>
          <strong>Last name:</strong>
          {lastName}
        </p>
        <p>
          <strong>Gender:</strong>
          {gender}
        </p>
        <p>
          <strong>Height:</strong>
          {height / 100}m
        </p>
        <p>
          <strong>Birth:</strong>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
