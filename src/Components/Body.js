import React, { useEffect, useState } from 'react'
import CardList from './CardList';

const Body = () => {
  
    const [ foodList , setFoodList] = useState([]);
  
    const foodItems = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json.data.cards);
        
        setFoodList(json?.data?.cards);
        
    }

    useEffect(() => {
       foodItems();
    },[])
    
    return (

    <div className='mx-auto w-[80%] bg-gray-200 shadow-lg'>
         
          <CardList title= 'Whats on your Mind' foodImages = {foodList[0]?.card?.card?.gridElements?.infoWithStyle?.info} />


    </div>
  )
}

export default Body