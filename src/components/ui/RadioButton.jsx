import React from 'react'

const RadioButton = (props) => {

  
  return (
    <label className="block mb-2">
    <input
      type="radio"
      value={props.value}
      checked={props.selectedOption === props.value}
      onChange={(e) => props.setSelectedOption(e.target.value)}
      className="mr-2"
      onClick={()=>props.handleClick(props.value)}
    />
    <span>{props.heading}</span>
  </label>
  )
}

export default RadioButton