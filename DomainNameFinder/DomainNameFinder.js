import React, { useState } from "react";
import ResultContainer from "./ResultContainer";

const name = require("@rstacruz/startup-name-generator");

const DomainNameFinder = () => {
  const headerText = "Just name it";
  const [suggestedNames, setSuggestedName] = useState([]);

  const handleInputChange = (inputText) => {
    setSuggestedName(inputText.length > 0 ? name(inputText) : []);
  };
  return (
    <div className="flex min-h-screen flex-col gap-2 justify-center items-center">
      <div className="p-3 rounded-md shadow-md min-w-[500px] mt-3">
        <h1 className="text-gray-900 font-bold text-lg text-center mb-3">
          {headerText}
        </h1>
        <input
        type="text"
        placeholder="Type keywords"
        onChange={(e) => handleInputChange(e.target.value)}
        className="w-full p-2 bg-purple-700 text-white rounded-full"
      />
        <ResultContainer suggestedNames={suggestedNames} />
      </div>
    </div>
  );
};

export default DomainNameFinder;
