import React from 'react'
import { FOOD_IMAGE_URL } from '../Utils/Constants'

const Card = ({imageURL}) => {
  console.log(FOOD_IMAGE_URL + imageURL);
  return (
    <div className='m-2 flex-none'>
        <img className='m-10 w-[150px] h-[200px] hover:cursor-pointer'
        alt=''
        src= {FOOD_IMAGE_URL + imageURL }
        />
    </div>
  )
}

export default Card