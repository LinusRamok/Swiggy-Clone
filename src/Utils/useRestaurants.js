import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from './Constants';

const useRestaurants = () => {

    const [restaurantList, setRestaurantList] = useState([])
    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  return restaurantList

}

export default useRestaurants