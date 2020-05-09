import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet"; // when you add library here, and parcel is runing, he go installing without you need write npm install
import Results from "./Results";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // const location = "Seattle, WA"; // with this, cant be changed in html, because on change he will re render again, and have this value.
  // The two data binding not is free on react. Like Angular
  const [location, setLocation] = useState("Seattle, WA"); // useState never can be inside loops or conditionals (ifs) because he expect to be called in the same order, in each render.

  const [animal, setAnimal] = useState("dog");
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  // const [animalD, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || {});
  }

  // this does not run on the first render
  // first will render DOM, and all of user can see, before run this effect
  useEffect(() => {
    // called after first render
    setBreeds([]);
    setBreed("");

    pet.breeds("dog").then(({ breeds: apiBreeds }) => {
      // const breedStrings = breeds.map((breedObj) => breedObj.name);
      const breedStrings = apiBreeds.map(({ name }) => name);
      console.log(breedStrings);
      setBreeds(breedStrings);
    }, console.error);
    // }, error => console.error(error));
  }, [animal, setBreed, setBreeds]); // array of wich depends useEffect, when is empty only when execut only once

  return (
    // is className and not class, because is a reserved word in javascript (like let or const), for create a Class.
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {/* onBlur is better way in this case than onChange, for screen readers */}
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
