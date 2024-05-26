import React from 'react'
import RestaurantCard from './RestaurantCard'
import LOADER from "../loader.png"

const Shimmer = () => {
    // console.log("shimmer");
  return (
    <div className=' h-full'>
        <div className='w-full h-[350px] bg-blue-950 flex justify-center items-center'>
            <div className=''>
            <img className='w-24 h-24 mx-auto my-3 animate-spin-slow ' src={LOADER} alt='loader'/>
           <p className='text-3xl font-bold text-white'>Looking for Great Food Near you</p>
            </div>
        </div>

        <div className='w-[80%] mx-auto flex flex-wrap'>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
             <RestaurantCard restaurantDetails={null}/>
        </div>
    </div>
  )
}

export default Shimmer