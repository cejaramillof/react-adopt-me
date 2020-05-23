import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import pet, { ANIMALS, _breeds, _dogs } from '../../__mocks__/@frontendmasters/pet';
import SearchParams from '../SearchParams';

afterEach(cleanup);

test("SearchParams", async () => {
  // this is a node render, which is faster than just trying to render in jsdom
  const { container, getByTestId, getByText } = render(<SearchParams />);
  const breedDropdown = getByTestId('use-dropdown-breed');
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  expect(pet.breeds).toHaveBeenCalled();

  const animalDropdown = getByTestId('animal');
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  const searchResults = getByTestId('search-results');
  expect(searchResults.textContent).toEqual("No Pets Found");

  fireEvent(getByText("Submit"), new MouseEvent("click"));
  expect(pet.animals).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(_dogs.length);
})