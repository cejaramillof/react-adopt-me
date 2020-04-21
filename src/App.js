// import ReactDOM from 'react-dom';
// import React from 'react';
import { createElement } from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return createElement("div", {}, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(createElement(App), document.getElementById("root"));
