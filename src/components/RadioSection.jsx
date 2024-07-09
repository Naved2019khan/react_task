import React, { useState } from 'react'
import RadioButton from './ui/RadioButton';

const RadioSection = ({selectedOption,setSelectedOption}) => {
  const handleClick = (value) =>{
    setSelectedOption()
  }
  return (
    <div className='mt-10'>
        <RadioButton handleClick={handleClick}  heading="Economy" value="economy" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <RadioButton handleClick={handleClick} heading="Premium Economy" value="premium" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <RadioButton handleClick={handleClick} heading="Business" value = "business" selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
   </div>
  )
}

export default RadioSection