import React from "react";
import Option from "./Option";

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
  return (
    <div>
      <h3 className="text-gray-700 font-medium mt-3">Question {question.id}</h3>
      <h5 className="mt-2">{question.question}</h5>
      <form onSubmit={onSubmit} className="my-2">
        <Option
          options={question.options}
          selectedOption={selectedOption}
          onOptionChange={onOptionChange}
        />
        <button type="submit" className="px-2 py-1 bg-gray-700 text-white rounded-md mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Question;
