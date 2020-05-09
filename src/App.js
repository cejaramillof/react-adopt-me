// import ReactDOM from 'react-dom';
// import React from 'react';
import React, { createElement } from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  /*   return createElement("div", {}, [
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
    ]); */
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/*
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      */}
    </div>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(createElement(App), document.getElementById("root"));
