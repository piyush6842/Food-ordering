import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = ()=>{
    // const [resInfo,setresInfo]= useState(null);
    const {resid} = useParams();

    const resInfo = useResMenu(resid);
        
        // console.log(json?.data?.ards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        // console.log(json?.data?.ards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2]?.card?.info?.name);
        // console.log(json?.data?.cards[0]?.card?.card?.info?.name);
        // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    if(resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage, areaName} = 
    resInfo?.cards[0]?.card?.card?.info;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return (
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    });
    console.log(categories);
    // const {itemCards} = 
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div>
        <h1 className="text-center font-bold my-6">{name}</h1>
        <p className="text-center font-bold my-6">{cuisines.join(', ')}- {costForTwoMessage}</p>
        {categories.map((category)=>{
            return <RestaurantCategory key={category.card.card.title} data={category.card.card}/>
        })}
        </div>      
    );
};
export default ResMenu;