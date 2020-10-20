import React, { useState, useRef, useCallback, useEffect } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const haneldIncreament = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`Mount & Update`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={haneldIncreament}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
