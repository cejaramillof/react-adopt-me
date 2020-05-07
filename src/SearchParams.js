import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet"; // when you add library here, and parcel is runing, he go installing without you need write npm install

const SearchParams = () => {
  // const location = "Seattle, WA"; // with this, cant be changed in html, because on change he will re render again, and have this value.
  // The two data binding not is free on react. Like Angular
  const [location, setLocation] = useState("Seattle, WA"); // useState never can be inside loops or conditionals (ifs) because he expect to be called in the same order, in each render.

  const [animal, setAnimal] = useState("dog");
  return (
    // is className and not class, because is a reserved word in javascript (like let or const), for create a Class.
    <div className="search-params">
      <form>
        {/* cant use for, because is a reserved word in javascript, for loop. */}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {/* onBlur is better way in this case than onChange, for screen readers */}
            <option>All</option>
            {ANIMALS.map((animal, index) => (
              <option key={index} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
