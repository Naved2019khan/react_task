import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h2 className="text-sm mb-4">{props.title}</h2>
      <div className="mb-4 border border-gray-200 rounded-md">
        <button onClick={() =>props.decrementCount(props.index)} className="text-gray-500 px-4  py-1">-</button>
        <span className="bg-gray-200 px-5 py-2">{props.count}</span>
        <button onClick={()=>props.incrementCount(props.index)} className="text-gray-500 px-4 py-1">+</button>
      </div>
    </div>
  )
}

export default Counter