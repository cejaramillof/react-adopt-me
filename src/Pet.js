import React, { createElement } from 'react';

// is better export like a function, for track error's in stack errors
export default function Pet({ name, animal, breed }) {
  /*
  return createElement("div", {}, [
    createElement("h1", {}, name),
    createElement("h2", {}, animal),
    createElement("h2", {}, breed),
  ]);
  */
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};
