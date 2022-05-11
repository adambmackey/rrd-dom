import React from 'react'
import data from '../assets/data'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()

  return (
    <div>
        <h1>The Details Page</h1>
        <h2>{data[id].name}</h2>
        <h3>{data[id].age}</h3>
    </div>
  )
}

export default Details