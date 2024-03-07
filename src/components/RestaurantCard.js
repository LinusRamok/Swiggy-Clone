import React from 'react'
import { SWIGGY_IMAGE_URL } from '../Utils/Constants'

const RestaurantCard = ({restaurant}) => {
    return (
        

<div class="group relative bg-gray-50 h-full rounded-md">
  <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
  <img className='h-full w-full object-cover object-center lg:h-full lg:w-full' src={SWIGGY_IMAGE_URL + restaurant.cloudinaryImageId}></img>
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="#">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {restaurant.name}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">{restaurant.costForTwo}</p>

      <p class="mt-1 text-sm text-gray-500">{restaurant.cuisines.join(', ')}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">{restaurant.avgRatingString + ' stars'}</p>
  </div>

</div>
    )
}

export default RestaurantCard