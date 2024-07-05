import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/public/images/logo.png"
import userContext from "../utils/userContext";
import {useSelector} from "react-redux";
const Header = () => {
    const [login,setLogin] = useState("Login");
    const {loggedInUser} = useContext(userContext);
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="header flex bg-pink-50 items-center justify-between">
            <div className="Logo"> 
             <div className="flex items-center font-bold text-orange-600 text-2xl">
             <img className="logo w-20 rounded-[40px] " src={Logo}/>
             Swaadh 
             </div>
            </div>
            
            <div className="nav-items">
                <ul className="flex">
                    <li className="pl-4"><Link to="/">Home</Link></li>
                    <li className="pl-4"><Link to="/about">About</Link></li>
                    <li className="pl-4"><Link to="/contact">Contact</Link></li>
                    <li className="pl-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="pl-4 font-bold "><Link to="/cart">Cart-({cartItems.length} items)</Link> </li>
                    <button className="login-btn px-4" onClick={
                        ()=> {
                            login == "Login"? setLogin("Logout") : setLogin("Login");
                        }
                    }>{login}</button>
                    <li className="">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;