import { useState } from 'react';

const LikeButton = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      {count} Likes
    </button>
  );
};

export default LikeButton;
