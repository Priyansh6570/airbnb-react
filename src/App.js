import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import Data from './Data'

export default function App(){
  const  cardItems = Data.map((card) => {
    return (
      <Card key={card.id} card={card} />
    )
  })
  return(
    <>
      <Navbar />
      <Hero />
      <div className='card-container'>
        {cardItems}
      </div>
    </>
  )
}