import React from 'react'
import { RESTAURANT_IMAGE_URL } from '../Utils/Constants'
import STAR_RATING from "../rating.png"

const RestaurantCard = ({restaurantDetails}) => {
   
    if(restaurantDetails == null){
      return (
        <div className='shadow-lg m-5 w-[200px] h-[300px] rounded-2xl animate-pulse'>
              <div className='bg-gray-500 h-[55%]'>

              </div>
              <div className='bg-gray-50'>

              </div>
        </div>
      )
    }

    const restaurant = restaurantDetails.info;
 
    return (
     <div className='shadow-lg m-5 w-[200px] h-[300px] rounded-2xl overflow-hidden truncate'>
        <div className=' rounded-2xl'>
            <img
            className='rounded-2xl' 
            src={RESTAURANT_IMAGE_URL + restaurant.cloudinaryImageId }
            alt={restaurant.name}
            />
          </div>  
        <div className='px-2 font-sans text-lg'>
            <h3 className='font-bold overflow-hidden truncate'>{restaurant.name}</h3>
            <p className='font-bold flex'><img className='w-4 h-4 mr-1 mt-2' src={STAR_RATING}></img>{restaurant.avgRating} {restaurant.sla?.deliveryTime}-{restaurant.sla?.deliveryTime + 5} Mins</p>
            <p  className='w-[160px] overflow-hidden truncate'>{restaurant.cuisines.map(cuisine => cuisine.trim()).join(", ")}</p>
            <p>{restaurant.locality}</p>
        </div>
    </div>
  )
}

export default RestaurantCard