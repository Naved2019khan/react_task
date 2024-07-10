import React, { useState } from 'react'
import Counter from './ui/Counter';

const CounterSection = ({setPerson}) => {
    const [tickets, setTickets] = useState([0,0,0])
    const incrementCount = (index) => {
        if (tickets[index] < 9){
        const newValues = [...tickets];
        newValues[index] = tickets[index] + 1;
        setTickets(newValues);
        const ticketSum = tickets.reduce((sum, ticket) => sum + ticket, 0);
        setPerson(ticketSum + 1)
        }
        
      };

     
    
      const decrementCount = (index) => {
        if (tickets[index] > 0){
            const newValues = [...tickets];
            newValues[index] = tickets[index] - 1;
            setTickets(newValues);
            const ticketSum = tickets.reduce((sum, ticket) => sum + ticket, 0);
            setPerson(ticketSum - 1)
        }
        
      };




  return (
    <div className='flex items-center justify-between mt-10'>
        <Counter key={1} title="Adult" index={0} incrementCount={incrementCount} decrementCount={decrementCount} count={tickets[0]} />
        <Counter key={2} title="Child(2-14yr)" index={1}  incrementCount={incrementCount} decrementCount={decrementCount} count={tickets[1]}/>
        <Counter key={3} title="Infant(Below 2yr)" index={2} incrementCount={incrementCount} decrementCount={decrementCount} count={tickets[2]}/>
    </div>
  )
}

export default CounterSection
