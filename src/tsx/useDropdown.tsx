import React, { useState, FunctionComponent, SetStateAction, Dispatch } from "react";

interface IProps {
  label: string;
  defaultState: string;
  options: string[];
}

const useDropdown = (label: string, defaultState: string, options: string[]) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )
  // need be more specific on type of return, because typescript dont know about every will return in the same order
  return [state, Dropdown, setState] as [string, FunctionComponent, Dispatch<SetStateAction<string>>];
}

export default useDropdown;