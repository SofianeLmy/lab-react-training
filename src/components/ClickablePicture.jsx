import { useState } from 'react';

const ClickablePicture = (props) => {
    
    const [clicked, setClick] = useState(false);

  const handleClick = () => {
    setClick(!clicked);
  };

  const imageSource = clicked ? props.imgClicked : props.img;

  return (
    <div width={50}>
       <img src={imageSource} alt="guy" onClick={handleClick} /> 
    </div>
  );
};

export default ClickablePicture;
