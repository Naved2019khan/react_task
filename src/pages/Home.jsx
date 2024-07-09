import React, { useState } from 'react'
import LocationPicker from '../components/ui/LocationPicker'
import { FaExchangeAlt } from "react-icons/fa";
import TravelDetail from '../components/TravelDetail';
import RadioSection from '../components/RadioSection';
import CounterSection from '../components/CounterSection';
import AirportModal from '../components/AirportModal';

const Home = () => {
  const [openModal,setOpenModal] = useState("")
  const [depart,setDepart] = useState("New Delhi")
  const [des,setDes] = useState("Mumbai")
  const [person,setPerson] = useState(0)
  const [selectedOption,setSelectedOption] = useState('economy')

  const handleModel = (type) =>{
   setOpenModal(type)
  }

  const handleDes = (value) =>{
    if (openModal == "depart"){
      setDepart(value)
    }
    else if (openModal == "going"){
      setDes(value)
    }
  }

  return (
    <main className='h-screen relative flex flex-col items-center'>
<div>
        <div className='flex gap-8 items-center mt-20'>
             <LocationPicker city={depart}  header={"Departed From"} type="depart" destination={"New Delhi"} desShort={"DEL"} handleModel={handleModel} />
            <FaExchangeAlt />
            <LocationPicker city={des} header={"Going To"} type="going"  destination={"Mumbai"} desShort={"Mum"} handleModel={handleModel} />
        </div>

        <TravelDetail person={person} selectedOption={selectedOption}  />
        <CounterSection  setPerson={setPerson}/>
        <RadioSection  selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
       
       { openModal != "" && <AirportModal city={openModal == "depart" ? des : depart}  handleDes={handleDes} openModal={openModal} handleModel={handleModel} />}
       
</div>
    </main>
  )
}

export default Home