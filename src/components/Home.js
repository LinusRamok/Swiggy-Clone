import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from '../Utils/Constants'
import RestaurantCard from './RestaurantCard'

const Home = () => {

    const [restaurantList, setRestaurantList] = useState([])

    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (restaurantList.length === 0) {
        return <h1>loading..</h1>
    }

    return (
        <div className='body-container'>
            <div className='restaurant-container'>
                {restaurantList.map((restaurant) => <RestaurantCard restaurant={restaurant.info} />)}
            </div>
        </div>
    )
}

export default Home