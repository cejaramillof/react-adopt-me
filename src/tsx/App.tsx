// import ReactDOM from 'react-dom';
// import React from 'react';
import React, { createElement, useState, lazy, Suspense, FunctionComponent } from "react";
import ReactDOM, { render } from "react-dom";
import { Router } from "@reach/router";
// import SearchParams from "./SearchParams";
// import Details from "./Details";
// import Hooks from './Hooks';
import ThemeContext from "./ThemeContext";
import NavBar from '../NavBar';
import { Provider } from "react-redux";

const Details = lazy(() => import('./Details')); // dynamic import
const SearchParams = lazy(() => import('./SearchParams'));
const Hooks = lazy(() => import('../Hooks'));
import store from '../store';

const App: FunctionComponent = () => {
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

  // const themeHook = useState("darkblue");
  // console.log(themeHook[0])

  /*
  const themeHook = useState({
    buttonColor: "darkblue",
    modalColor: "pink"
  });
  */
  return (
    <React.StrictMode>
      { /*<ThemeContext.Povider value={themeHook}> */}
      <Provider store={store}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading route..</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
              <Hooks path="/hooks" />
            </Router>
          </Suspense>
          {/*
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
          */}
        </div>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(createElement(App), document.getElementById("root"));

export default App;
