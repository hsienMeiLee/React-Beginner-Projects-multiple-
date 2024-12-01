import React, { useState } from "react";

const RockPaperScissors = () => {
  const [playvar, setPlayvar] = useState("");
  const [computerVar, setComputerVar] = useState("");
  const [decision, setDecision] = useState("");
  const choices = ["ROCK", "PAPER", "SCISSORS"];

  const logic = ({ playvar, computerVar }) => {
    if (playvar == computerVar) {
      return "No one wins";
    } else if (
      (playvar == "ROCK" && computerVar == "SCISSORS") ||
      (playvar == "SCISSORS" && computerVar == "PAPER") ||
      (playvar == "PAPER" && computerVar == "ROCK")
    ) {
      return "You win";
    } else {
      return "Youlose";
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen ">
      <div className="bg-gray-200 p-10 rounded-md">
        <h1 className="text-gray-900 text-xl font-bold mb-4">
          Welcome to Rock, Paper, Scissors
        </h1>
        <div className="flex justify-around">
          <button
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:cursor-pointer"
            onClick={() => {
              const computerChoice =
                choices[Math.floor(Math.random() * choices.length)];
              setPlayvar(choices[0]);
              setComputerVar(computerChoice);
              setDecision(
                logic({ playvar: choices[0], computerVar: computerChoice })
              );
              console.log(playvar, computerVar);
            }}
          >
            Rock
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:cursor-pointer"
            onClick={() => {
              const computerChoice =
                choices[Math.floor(Math.random() * choices.length)];
              setPlayvar(choices[1]);
              setComputerVar(computerChoice);
              setDecision(
                logic({ playvar: choices[1], computerVar: computerChoice })
              );
              console.log(playvar, computerVar);
            }}
          >
            Paper
          </button>
          <button
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:cursor-pointer"
            onClick={() => {
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
              setPlayvar(choices[2]);
              setComputerVar(computerChoice);
              setDecision(
                logic({ playvar: choices[2], computerVar: computerChoice })
              );
            }}
          >
            Scissors
          </button>
        </div>

        <div className="mt-5">
          <p>Your choice : {playvar}</p>
          <p>Computer choice : {computerVar}</p>
          <p>{decision}</p>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
