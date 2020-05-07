import React, { createElement } from 'react';

// is better export like a function, for track error's in stack errors
export default function Pet({ name, animal, breed }) {
  const x = name.toUpperCase();
  // All line are statement. Cant be work in to curly braces { }
  // Everything on the right side of = is considere an expression

  // const y = if // can't be, because an expression and statement are different
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
