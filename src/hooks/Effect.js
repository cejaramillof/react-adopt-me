import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => { // is not immediatelty run, will be run when first render finish
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer); // to clear on unmount
    // }, []);
  }, [setTime]);
  // when no have second parameter, will be run in each render
  // when have empty array only will render after first render
  // the second parameter is a array of dependencies to be executed

  return <h1>useEffect Example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
