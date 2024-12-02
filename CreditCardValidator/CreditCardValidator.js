import React, { useState } from 'react'
import validator from 'validator';

const CreditCardValidator = () => {
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("green")
    const validateCreditCard = (value) => {
        if(validator.isCreditCard(value)){
            setMessage("Valid credit card number");
            setColor("green");
        }else{
            setMessage("Invalid credit card number");
            setColor("red");
        }
    }
  return (
    <div className='flex min-h-screen items-center justify-center bg-orange-200'>
        <div className="p-5 rounded-md flex flex-col gap-3 shadow-md min-w-[300px] bg-white">
            <h2 className='text-center mb-3 font-medium text-gray-900'>Validating credit card</h2>
            <span className='text-sm text-gray-700'>Enter your credit number</span>
            <input type="text" onChange={(e)=>validateCreditCard(e.target.value)} className='border-b border-gray-500' />
            <span className={color === 'green'? "text-green-700" : "text-red-700"}>
                {message}
            </span>
        </div>
    </div>
  )
}

export default CreditCardValidator