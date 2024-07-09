import React, { useEffect, useState } from 'react'

const TravelDetail = ({person,selectedOption}) => {
    const [selectedOption1, setSelectedOption] = useState(`${person} Traveller Economy ${selectedOption}`);
    const option = [""]
    useEffect(()=>{
setSelectedOption(`${person} Traveller${selectedOption}`)
    },[selectedOption,person])

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
  return (
    <div className='w-full mt-10'>
        <h1>Traveller(s),Class</h1>
        <select value={selectedOption1} onChange={handleSelectChange} >
            { option.map((i)=>(
                 <option value="">{selectedOption1}</option>
            ))}
        </select>
    </div>
  )
}

export default TravelDetail