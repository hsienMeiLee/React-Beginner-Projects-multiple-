import React, { useEffect, useState } from "react";
const QrCodeGenerator = () => {
  const [word, setWord] = useState("");
  const [temp, setTemp] = useState("");
  const [size, setSize] = useState(0);
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (word.trim() !== "") {
      setQrCode(
        `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`
      );
    }
  }, [size, word]);

  const handleClick = () => {
    setWord(temp);
    
  };
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="p-5 flex flex-col gap-3 bg-white rounded-md">
        <label>Type a word to create qr code</label>
        <input
          type="text"
          onChange={(e) => setTemp(e.target.value)}
          className="border-b border-gray-700 p-1"
        />
        <button onClick={handleClick}>Generate</button>
        <div>
          <h5>Dimensions : </h5>
          <input
            type="range"
            min={300}
            max={600}
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>

        {word.trim() !== "" && (
          <div>
            <img
              src={qrCode}
              alt="qr code"
              className="min-w-[50px] min-h-[50px]"
            />
            <a href={qrCode}>
              <button type="button" className="px-4 py-2 bg-gray-800 text-white rounded-md mt-4">Download</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
