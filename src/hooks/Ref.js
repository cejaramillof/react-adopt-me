import React, { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
  numRef.current++;
  function incrementAndDelayLogging() {
    console.log(`state: ${stateNumber} | ref: ${numRef.current}`); // 0 -1
    setStateNumber(stateNumber + 1);
    console.log(`state: ${stateNumber} | ref: ${numRef.current}`); // 0 -1
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),  // 0 -5
      4000
    );
    setStateNumber(stateNumber + 1);
    numRef.current++;
    console.log(`state: ${stateNumber} | ref: ${numRef.current}`);  // 0 -3
  }
  // first render
  // 0
  // 0
  console.log(stateNumber);
  // render after click
  // 1
  // 1


  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
