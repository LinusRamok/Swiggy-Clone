import React, { useEffect, useState } from 'react'
import { SWIGGY_MENU_API } from '../Utils/Constants';


const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(SWIGGY_MENU_API+resId)
        const json = await data.json()
        setRestaurantMenu(json.data.cards)
    }
  return restaurantMenu
}

export default useRestaurantMenu