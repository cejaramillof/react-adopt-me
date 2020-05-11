import React, { createElement } from 'react';
import { Link } from '@reach/router';

// is better export like a function, for track error's in stack errors
export default function Pet({ name, animal, breed, media, location, id }) {
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

  let hero = 'http://placecorgi.com/300/300';
  if (media.length) {
    hero = media[0].small
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
