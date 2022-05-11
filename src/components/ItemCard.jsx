import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCard = ({person, index}) => {
    
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(index)
        navigate(`/details/${index}`)
    }

  return (
    <div>
        <h2>
            {person.name}
        </h2>
        <button onClick={handleClick}>See More</button>
    </div>
  )
}

export default ItemCard