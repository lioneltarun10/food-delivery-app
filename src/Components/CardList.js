import React from 'react'
import Card from './Card';

const CardList = ({title , foodImages}) => {
  
  console.log(title);
  console.log(foodImages);
    return (
    <div>
         <h1>{title}</h1>
        <Card imageURL = {foodImages[0].imageId}/>


    </div>
  )
}

export default CardList