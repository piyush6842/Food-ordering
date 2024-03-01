import { CDN_URL } from '../utils/constants';
import React from 'react';
const RestaurantCard = (props) => {
  const { resData } = props;

  const {                   // object destructuring
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
        className="w-60 h-auto px-4 rounded-lg my-6 mx-8"
        style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img className='rounded-lg w-60 h-40 bg-white'
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="res-card-content w-40 h-auto m-4">
        <h3>{name}</h3>
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} Rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
