import React, { useState } from 'react';
import Die from './Die';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sides = ["one","two","three","four","five","six"];

const DiceRolling = () => {
    const [die1, setDie1] = useState("one");
    const [die2, setDie2] = useState("one");
    const [rolling, setRolling] = useState(false);

    const roll = ()=> {
        setRolling(true);
        setTimeout(() => {
            setDie1(sides[Math.floor(Math.random() * sides.length)]);
            setDie2(sides[Math.floor(Math.random() * sides.length)]);
            setRolling(false);
        }, 1000);
    }
  return (
    <div className="flex flex-col flex-nowrap min-h-screen">
        <div className="flex justify-center items-center">
            <Die face={die1} rolling = {rolling} />
            <Die face={die2} rolling = {rolling} />
        </div>
        <button className={`${rolling ? "Rolling...":""} w-[15em] p-[1.5em] border-0 rounded-[10px] text-white bg-black mt-[3em] self-center hover:cursor-pointer hover:bg-gray-800`} onClick={roll} disabled={rolling}>
            {rolling ? "Rolling...":"Click to roll"}
        </button>
    </div>
  )
}

export default DiceRolling