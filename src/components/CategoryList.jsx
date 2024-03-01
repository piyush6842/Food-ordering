import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
const CategoryList = ({list})=>{
    // console.log(list)
    const dispatch = useDispatch();
    const handleAddItem = (list)=>{
        dispatch(addItem(list))
        console.log(list);
    }
    return (
        <div>
            {list.map((list)=>(
            <div key = {list?.card?.info?.id}
            className="p-2 m-2 border-gray-300 border-b-2">
                <div className="flex justify-between">
                    <div>
                    <h4>
                        {list.card.info.name}
                    </h4>
                    <h4>
                         ₹
                        {list.card.info.price?
                        list.card.info.price/ 100 :
                        list.card.info.defaultPrice/ 100}                   
                    </h4>
                    </div>
                    <div className="w-3/12 p-4 cursor-pointer">
                        <div className="absolute">
                        <button onClick={()=> handleAddItem(list)} className="p-1 text-white rounded-md bg-black hover:shadow-xl">
                            Add+
                        </button>
                        </div>
                        <img src={CDN_URL+ list.card.info.imageId} className="w-full" alt="img" />
                    </div>
                </div>
                    <p className="text-xs w-8/12">{list.card.info.description}</p>
            </div>
            ))}
        </div>
    )
}

export default CategoryList;
