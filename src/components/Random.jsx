function Random(props) {
    const { min, max } = props;
    return (
      <div>
      <strong>Random value between {min} and {max} is {Math.floor(Math.random() * (max - min + 1) + min)} </strong>

    </div>
  
    );
  }
  
  export default Random;
  