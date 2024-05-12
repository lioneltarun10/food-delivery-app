import React from 'react'
import { FOOD_IMAGE_URL } from '../Utils/Constants'

const Card = ({imageURL}) => {
  return (
    <div>
        <img 
        alt=''
        src= {FOOD_IMAGE_URL + imageURL }
        />
    </div>
  )
}

export default Card