import React from "react"
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center">
            <h1 className="font-bold align-top text-center border-b-8">
                Cart
            </h1>
            <button className="bg-black text-white p-2 m-2 rounded-lg"
                onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="text-center font-bold"> Your Cart Is Empty</h1>}
            <div className="w-9/12 m-auto text-gray-7000 bg-white">
                <CategoryList list={cartItems} />
            </div>
        </div>
    )
}
export default Cart;