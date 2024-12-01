import React from "react";

const Option = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="radio"
            name="radio"
            value={option}
            checked={(selectedOption === option)}
            onChange={onOptionChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Option;
