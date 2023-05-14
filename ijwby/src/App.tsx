import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementBtn = () => {
    setCount(count + 1);
  };

  const decrementBtn = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CountIndicator count={count} />
      <CountButton incrementBtn={incrementBtn} decrementBtn={decrementBtn} />
    </div>
  );
};

export default App;

interface CountIndicatorProps {
  count: number;
}

const CountIndicator: React.FC<CountIndicatorProps> = ({ count }) => (
  <h1>{count}</h1>
);

interface CountButtonProps {
  incrementBtn: () => void;
  decrementBtn: () => void;
}

const CountButton: React.FC<CountButtonProps> = ({
  incrementBtn,
  decrementBtn,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100px",
      }}
    >
      <button onClick={incrementBtn}>+</button>
      <button onClick={decrementBtn}>-</button>
    </div>
  );
};
