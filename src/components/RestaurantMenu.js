import React from 'react'
import { useParams } from 'react-router';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import { SWIGGY_IMAGE_URL } from '../Utils/Constants';

const RestaurantMenu = () => {

    
    const {resId} = useParams()
    const restaurantDetails = useRestaurantMenu(resId)

    if(restaurantDetails.length == 0)
    {
      return <h1>Loading</h1>
    }

    const {avgRatingString, cloudinaryImageId, costForTwoMessage, name, totalRatingsString} = restaurantDetails[0].card.card.info 
    const menus = restaurantDetails[2].groupedCard.cardGroupMap.REGULAR.cards
    console.log('menus',menus)
  return (
    <div className='restaurant-container'>
        <h1>{name}</h1>
        <img src={SWIGGY_IMAGE_URL+cloudinaryImageId}></img>
        <h2>{costForTwoMessage}</h2>
        <h2>{totalRatingsString}</h2>
        <h2>{avgRatingString+' stars'}</h2>
        {
            menus.map((menu)=>{
              if(menu.card.card.itemCards)
              {
                console.log('menu',menu)
                return <div className='menu-container'>
                  <h3>{menu.card.card.title}</h3>
                  {menu.card.card.itemCards.map((item)=> {
                    return <div className='menu-item'>
                        <h4>{item.card.info.name}</h4>
                    </div>
                  })}
                </div>
              }

            })
        }

    </div>
  )
}

export default RestaurantMenu