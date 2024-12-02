import React, { useEffect, useState } from 'react'
import Box from './Box';

const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random()*256);
    const newColor = `rgb(${red},${green},${blue})`;
    return newColor;
}

const ColorContainer = () => {
    const num = 18;
    const [colors, setColors] = useState([]);

    useEffect(()=>{
        const newColors = [];
        for (let i=0; i<num; i++){
            newColors.push(generateColor());
        }
        setColors(newColors);
    },[])
    
    

    const handleChangeColor = (e)=> {
        let newColor;
        do{
            newColor = generateColor();
        }while(newColor === e)
        
        setColors((prevColor) => (
            prevColor.map((color)=>(
                color === e ? newColor : color
            ))
        ))
    };


  return (
    <div className='grid grid-cols-6 gap-0'>
        {colors.map((color)=>(
            <Box color={color} changeColor={()=>handleChangeColor(color)} />
        ))}
    </div>
  )
}

export default ColorContainer