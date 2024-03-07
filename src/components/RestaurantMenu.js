import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {

    
    const {resId} = useParams()
    const menu = useRestaurantMenu(resId)

console.log(menu)
  return (
    <div>restaurantMenu</div>
  )
}

export default RestaurantMenu