import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import useRestaurants from '../Utils/useRestaurants'
import { Link } from 'react-router-dom'

const Home = () => {

    const restaurantList = useRestaurants();
    const [filteredRestaurantList, setFilteredRestaurantList] = useState();
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setFilteredRestaurantList(restaurantList)
    }, [restaurantList])

    if (restaurantList.length === 0) {
        return <h1>loading..</h1>
    }

    return (
        <div className='body-container'>
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
            <div className='restaurant-container'>
                {filteredRestaurantList.map((restaurant) => <Link to={'/restaurant/'+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  restaurant={restaurant.info} /></Link>)}
            </div>
        </div>
    )
}

export default Home