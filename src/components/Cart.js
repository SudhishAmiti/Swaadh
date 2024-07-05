import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCartItems } from "../utils/CartSlice";
const Cart = () => {
    const dispatch = useDispatch();
    const clearCart = () => {
        dispatch(clearCartItems());
    }
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button className="m-2 p-2 bg-pink-300 rounded-lg" onClick={clearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto">
                
                <CategoryItemList list={cartItems}/>
            </div>
        </div>

    );
}
export default Cart;