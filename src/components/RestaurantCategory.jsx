import React, { useState } from "react";
import CategoryList from "./CategoryList";
const RestaurantCategory = (data)=>{
    const [showItems,setShowItems] = useState(false);
    const handleClick= ()=>{
        setShowItems(!showItems);
    }
    // console.log(data.data.title);
    return(
        <div>
            <div className="bg-gray-200 shadow-xl w-6/12 mx-auto my-4 px-8 ">
                <div className="flex justify-between cursor-pointer"
                onClick={handleClick}>
                <span className="text-lg font-bold">{data.data.title}({data.data.itemCards.length})</span>
                <span>
                ⬇️
                </span>
                </div>
                <div>
                {showItems && <CategoryList list={data.data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}
export default RestaurantCategory;