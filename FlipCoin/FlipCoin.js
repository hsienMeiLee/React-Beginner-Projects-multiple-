import React, { useState } from "react";
import Coin from "./Coin";

const FlipCoin = () => {
  const coins = [
    {
      side: "head",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg",
    },
    {
      side: "tail",
      imgSrc:
        "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg",
    },
  ];
  const [currentFace, setCurrentFace] = useState(coins[0]);
  const [totalFlip, setTotalFlip] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const handleClick = () => {
    const newFace = coins[Math.floor(Math.random() * coins.length)];

    {
      newFace.side == "head" ? setHeads(heads + 1) : setTails(tails + 1);
    }
    setTotalFlip(totalFlip + 1);
    setCurrentFace(newFace);
    console.log(currentFace);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200">
      <div className="p-5 rounded-md flex flex-col items-center bg-white min-w-[500px]">
        <h2 className="font-bold text-gray-900 text-lg">Let's flip a coin</h2>
        {currentFace && <Coin info={currentFace} />}
        <button onClick={handleClick} className="px-4 py-2 bg-gray-700 text-white rounded-md my-3">Click me</button>
        <p>
          Number of flips : {totalFlip} <br />
          Number of heads : {heads} <br />
          Number of tails : {tails}
        </p>
      </div>
    </div>
  );
};

export default FlipCoin;
