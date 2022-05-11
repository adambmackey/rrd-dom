import React from 'react'
import data from '../assets/data'
import ItemCard from './ItemCard'

const Home = () => {
    const itemList = data.map((person, index) => {
        return <ItemCard person={person} index={index} key={index}/>
    } )

  return (
    <div>
        <h1>Home</h1>
        {itemList}
    </div>
  )
}

export default Home