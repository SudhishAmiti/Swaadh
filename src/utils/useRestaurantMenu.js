import { useEffect,useState } from "react";
import {MENU_API_URL} from "./constants";
const useRestaurantMenu = (resId) => {
    const[resMenu,setresMenu] = useState(null);

    useEffect(()=>{
        getResData();
    },[])
    const getResData = async() => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setresMenu(json.data);
    }
    
    return resMenu;
}
export default useRestaurantMenu