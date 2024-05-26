import React, { useState } from 'react'
import logo from "../Utils/logo.png"
const Header = () => {
  
  const [searchBar,setSearchBar] = useState(false);
  
  const handleSearchBar = () => {
    setSearchBar(!searchBar);
  }

  return (
    <div className='h-12 bg-teal-700 shadow-md flex justify-between'>
        
        <div>
           <img
           className='h-12 w-12' 
           alt='logo'
           src= {logo}
           />
        </div>

        <div className=''> 

        <ul className='flex mt-3 '>
          {searchBar && <input className='w-96 text-center text-lg rounded-lg mr-8' type='text' placeholder='What do you want to eat today?'></input>}
            <li onClick={handleSearchBar} className='hover:cursor-pointer text-red-200 mr-8 pr-8'>Search</li>
            <li className='text-red-200 mr-8 pr-8'>Help</li>
            <li className='text-red-200 mr-8 pr-8'>SignIn</li>
            <li className='text-red-200 mr-8 pr-8'>Cart</li>
        </ul>
               
        </div>

        

    </div>
  )
}

export default Header