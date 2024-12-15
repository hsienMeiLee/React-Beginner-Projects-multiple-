import { math } from "@maptiler/sdk";
import axios from "axios";
import React, { useState } from "react";

const Avatar = () => {
  const [sprite, setSprite] = useState("botts");
  const [seed, setSeed] = useState(1000);

  const handleGenerate = () => {
    setSeed(Math.floor(Math.random() * 1000));
  };

  const downloadImage = () => {
    axios({
      method: "get",
      url: `https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`,
      responseType: "arraybuffer",
    })
      .then((response) => {
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: "application/octet-stream" })
        );
        link.download = `${seed}.svg`;
        document.body.appendChild(link);
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(link);
        }, 200);
      })
      .catch((error) => {});
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="">
        <h1 className="text-2xl text-gray-900 font-bold">Avatar generator</h1>
        <div className="flex items-center gap-2 mt-3">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("avataaars")}
          >
            Avatar
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("personas")}
          >
            Person
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("bottts")}
          >
            Bots
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("shapes")}
          >
            Shapes
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("identicon")}
          >
            Identi
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("rings")}
          >
            Ring
          </button>
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md"
            onClick={() => setSprite("thumbs")}
          >
            Thumb
          </button>
        </div>
        <div className="avatar">
          <img
            src={`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`}
            alt=""
            className="max-w-[400px]"
          />
        </div>
        <div className="generate">
          <button
            className="px-5 py-2 border border-gray-800 rounded-md mt-5"
            id="gen"
            onClick={() => handleGenerate()}
          >
            Next
          </button>
          <button
            className="px-5 py-2 border border-gray-800 rounded-md mt-5 ms-2"
            id="down"
            onClick={() => downloadImage()}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
