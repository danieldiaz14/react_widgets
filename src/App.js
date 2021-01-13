import React, { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript Framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "Just use it dude",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      {/* <Accordion items={items}/> */}
      <div className="ui container">
        {/* <Search /> */}
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </div>
    </div>
  );
};
