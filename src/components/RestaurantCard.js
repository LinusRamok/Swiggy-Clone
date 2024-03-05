import React from 'react'
import { SWIGGY_IMAGE_URL } from '../Utils/Constants'

const RestaurantCard = ({restaurant}) => {
    return (
        <div className='res-card'>
            <img className='res-card-image' src={SWIGGY_IMAGE_URL + restaurant.cloudinaryImageId}></img>
            <p className='res-card-title'>{restaurant.name}</p>
            <p className='res-card-price'>{restaurant.costForTwo}</p>
            <p className='res-card-cuisine'>{restaurant.cuisines.join(', ')}</p>
            <p className='res-card-rating'>{restaurant.avgRatingString + ' stars'}</p>
        </div>
    )
}

export default RestaurantCard