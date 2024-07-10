import React, { useState, useEffect } from 'react';
import axios from 'axios';
import airportsData from "../data/airports.json"
import { IoIosArrowRoundBack } from "react-icons/io";

const AirportModal = ({openModal,handleModel,handleDes}) => {
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [search, setSearch] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  const departedLabel = openModal == "depart" ?  {title : "Departed From" } : {title : "Going To" ,name : "" }
  const desLabel = openModal != "depart" ?  {title : "Departed From" } : {title : "Going To" ,name : "##"  }


  useEffect(() => {


      setAirports(airportsData);
// some changes
 

    axios.get('https://ipapi.co/json/')
      .then(response => {
        setClientCountry(response.data.country_name);
        console.log("IP ", response.data.country_name )
      })
      .catch(error => {
        console.error('Error fetching IP data:', error);
        setClientCountry('Unknown');
      });

    const filtered = airports.filter(airport => 
      airport.airportName.toLowerCase().includes(search.toLowerCase()) ||
      airport.cityName.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      if (a.countryName === clientCountry && b.countryName !== clientCountry) return -1;
      if (a.countryName !== clientCountry && b.countryName === clientCountry) return 1;
      return 0;
    });

    setFilteredAirports(sorted);
  }, [search, airports, clientCountry]);

  return (
    <div  className="w-[600px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] p-4">
       <div className='flex items-center justify-center'> 
       <IoIosArrowRoundBack onClick={()=>handleModel("")}  className='mr-auto text-xl'/>
        <h1 className='mr-auto' >Select  City</h1>
       </div>

<div className='flex'>

       <div>
       <h1>{departedLabel.title}</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search airports"
          className="w-[250px] p-2 outline-none    rounded-md mb-4"
          />
        </div>

        <div>
          <h1>{desLabel.title}</h1>
          <div>{desLabel?.name}</div>

        </div>
          </div>


      {/* Results */}
      <div className='overflow-auto h-full'>

        {filteredAirports.length > 0 ? (
          <ul className="space-y-2">
            {filteredAirports.map((airport,idx) => (
              <li  onClick={()=>handleDes(airport.airportName)}  key={idx} className="border-b border-gray-200 pb-2">
                <span className="font-semibold">{airport.airportName}</span>
                <br />
                <span className="text-sm text-gray-600">{airport.countryName}, {airport.country}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found</p>
          )}
    
          </div>
    </div>
  );
}


export default AirportModal
