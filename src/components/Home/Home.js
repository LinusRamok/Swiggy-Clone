import React, { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard'
import useRestaurants from '../../Utils/useRestaurants'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { ShimmerPostList } from "react-shimmer-effects";

const Home = () => {

    const restaurantList = useRestaurants();
    const [filteredRestaurantList, setFilteredRestaurantList] = useState();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setFilteredRestaurantList(restaurantList)
    }, [restaurantList])

    if (restaurantList.length === 0) {
        return (
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
        );
    }

    return (
            
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className='filter'>
                <input className='input-filter' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <button className='btn-filter'
                    onClick={() => {
                        const FilteredList = restaurantList.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
                        }
                        )
                        setFilteredRestaurantList(FilteredList)
                    }
                    }>filter</button>
            </div>
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Restaurants with online food delivery</h2>
                <div className='restaurant-card-container mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {filteredRestaurantList.map((restaurant) => <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard restaurant={restaurant.info} />
                    </Link>)}
                </div>
            </div>
    )
}

export default Home