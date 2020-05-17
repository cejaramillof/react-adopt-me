// import ReactDOM from 'react-dom';
// import React from 'react';
import React, { createElement, useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Hooks from './Hooks';

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

  const themeHook = useState("darkblue");
  /*
  const themeHook = useState({
    buttonColor: "darkblue",
    modalColor: "pink"
  });
  */
  console.log(themeHook[0])
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
            <Hooks path="/hooks" />
          </Router>
          {/*
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(createElement(App), document.getElementById("root"));
