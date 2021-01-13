import React from "react";

const DropDown = ({ options, selected, onSelectedChange }) => {
  const [isActive, setIsActive] = React.useState(false);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    const { label, value } = option;
    return (
      <div key={value} className="item" onClick={() => onSelectedChange(option)}>
        {label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field" onClick={() => setIsActive(!isActive)}>
        <label className="label">Select a Color</label>
        <div className={`ui selection dropdown ${isActive ? "visible active" : ""}`}>
          <i className="dropdown icon"/>
          <div className="text" >{selected.label}</div>
          <div 
          className={`menu ${isActive ? "visible transition": ""} `} 
          onClick={e => e.stopPropagation()}
          >{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
