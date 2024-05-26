import React, { useEffect, useState } from 'react'
import CardList from './CardList';
import Shimmer from './Shimmer';

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

    
    return foodList.length  > 0? (

    <div className='mx-auto w-[80%] bg-white opacity-95 shadow-lg'>
         {
          
          foodList.length > 0 && 
          foodList.map((cardSection,id) =>{
            if(id === 0 || id === 4){
              return <CardList key={id} title= {cardSection?.card?.card?.header?.title} foodImages = {cardSection?.card?.card?.gridElements?.infoWithStyle} />  
            }
            return null;
              
          })
          

         }
          


    </div>
  ): <Shimmer /> ;
}

export default Body