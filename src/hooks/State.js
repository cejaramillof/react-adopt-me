import React, { useState } from "react";

const StateComponent = () => {
  // cannot be inside conditionals or loops
  // dependent on it being in the same order evert single time
  const [isGreen, setIsGreen] = useState(true); // return tupla

  return (
    <button onClick={() => setIsGreen(!isGreen)}>
      <h1
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useState Example
    </h1>
    </button>
  );
};

export default StateComponent;
