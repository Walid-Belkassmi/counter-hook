import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button onClick={handlePlusClick}>+</button>
      <span>{count}</span>
      <button onClick={handleMinusClick}>-</button>
    </>
  );
};

export default Counter;
