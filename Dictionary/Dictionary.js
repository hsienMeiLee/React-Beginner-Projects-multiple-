import axios from "axios";
import React, { useState } from "react";
import { FcSpeaker } from "react-icons/fc";

const Dictionary = () => {
  const [data, setData] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const getMeaning = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((res) => {
        setData(res.data[0]);
      });
  };

  const playAudio = () => {
    let audio = new Audio(data.phonetics[1].audio);
    audio.play();
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="p-5 shadow-lg max-w-screen-md">
        <h1 className="text-center text-gray-900 text-3xl font-bold mb-5">Free dictionary</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchWord(e.target.value)}
          className="border border-gray-200 p-1 rounded-md me-2"
        />
        <button onClick={getMeaning} className="px-3 py-1.5 bg-gray-800 text-white rounded-md">Search</button>

        {data && (
          <div className="mt-5">
            {data.meanings.map((meaning, index) => (
                <div key={index}>
                  <h5 className="font-bold text-gray-900 mt-3">Part of speech : </h5>
                  <p>{meaning.partOfSpeech}</p>
                  <p className="font-bold text-gray-900 mt-3">Meaning : </p>
                  <ul>
                    {meaning.definitions.map((definition, i) => (
                      <li key={i}>{definition.definition}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
