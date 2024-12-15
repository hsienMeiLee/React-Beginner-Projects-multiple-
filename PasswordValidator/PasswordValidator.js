import React, { useState } from "react";
import validator from "validator";

const PasswordValidator = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("green");

  const validate = (e) => {
    if (
      validator.isStrongPassword(e, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setMessage("strong password");
      setColor("green");
    } else {
      setMessage("weak password");
      setColor("red");
    }
  };
  return (
    <div className="ml-4 flex items-center justify-center flex-col mt-[10rem]">
      <pre className="shadow-md p-10 rounded-md bg-red-300">
        <h2 className="font-bold text-gray-900 text-xl mb-5">
          Checking password strength in React JS
        </h2>
        <div className="flex items-center justify-between gap-3">
          <span>Enter password</span>
          <input
            type="password"
            onChange={(e) => validate(e.target.value)}
            className="p-2 rounded-sm border-b border-gray-300 w-full"
          />
        </div>
        <br />

        <span className={color == "green" ? "text-green-800" : "text-red-800"}>
          {message}
        </span>
      </pre>
    </div>
  );
};

export default PasswordValidator;
