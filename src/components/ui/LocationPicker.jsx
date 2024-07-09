import React from 'react'

const LocationPicker = ({header,destination,desShort,type,handleModel,city}) => {
  return (
    <div onClick={()=>handleModel(type)} className='w-[180px]'>
        <h5 className='text-[12px] text-gray-500'>{header}</h5>
        <h1 className='font-bold'>{city}</h1>
        <h4>{desShort}</h4>
        <div className='bg-gray-300 h-[2px] ' />
    </div>
  )
}

export default LocationPicker