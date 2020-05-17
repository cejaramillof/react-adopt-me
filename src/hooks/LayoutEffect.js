import React, { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();
  console.log(el);

  useLayoutEffect(() => { // is synchronous
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  }, [width, height]);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // to force re render
        }}
        ref={el} // store actual DOM element
      />
    </div>
  );
};

export default LayoutEffectComponent;
