import Card from "./Card";
import rightArrow from "../Utils/rightArrow.png";
import leftArrow from "../Utils/leftArrow.png";
import RestaurantCard from "./RestaurantCard";
const CardList = ({ title, foodImages }) => {
  console.log(title);
  console.log(foodImages);

  function scroll(e) {
    console.log(e);
    if (e.target.id === "rightbutton") {
      document.getElementById("container").scrollLeft += 300;
      document.getElementById("container").style.scrollBehavior = "smooth";
    } else {
      document.getElementById("container").scrollLeft -= 300;
      document.getElementById("container").style.scrollBehavior = "smooth";
    }
  }

  return (
    <>
    {title === "What's on your mind?"?
    (<div className="shadow-inner">
    <div id="titleSection" className="flex justify-between">
      <h1 className="m-2 px-3 font-extrabold text-3xl">{title}</h1>
      <div id="buttons" className="flex">
        <img
          onClick={(e) => scroll(e)}
          id="leftbutton"
          className="h-10"
          src={leftArrow}
          alt="leftArrow"
        />

        <img
          onClick={(e) => scroll(e)}
          id="rightbutton"
          className="h-10"
          src={rightArrow}
          alt="rightArrow"
        />
      </div>
    </div>

    <div
      id="container"
      className="overflow-x-scroll scroll-hidden flex w-full h-full"
    >
      {
        foodImages.info.map(food => <Card key={food?.id} imageURL={food?.imageId} />)
        
          // title === "What's on your mind?"?
          //   foodImages.info.map(food => <Card key={food?.id} imageURL={food?.imageId} />)  
          // :
          //   foodImages.restaurants.map(restaurant => <RestaurantCard key={restaurant?.id} restaurantDetails = {restaurant} />) 
          

       }
    </div>
  </div>):
    ( <div className="shadow-inner">
    <div id="titleSection" className="flex justify-between">
      <h1 className="m-2 px-3 font-extrabold text-3xl">Restaurants with Online Food Delivery</h1>
    </div>

    <div
      id="container"
      className="flex flex-wrap w-full h-full"
    >
      {
        
          // title === "What's on your mind?"?
          //   foodImages.info.map(food => <Card key={food?.id} imageURL={food?.imageId} />)  
          // :
          //  foodImages.restaurants.map(restaurant => <RestaurantCard key={restaurant?.id} restaurantDetails = {restaurant} />) 
          
          foodImages.restaurants.map(restaurant => <RestaurantCard key={restaurant?.id} restaurantDetails = {restaurant} />) 
          

       }
    </div>
  </div>)
  }
   
    </>
  );
};

export default CardList;
