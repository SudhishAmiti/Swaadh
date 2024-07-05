import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/data.js";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import userContext from "../utils/userContext.js";
const Body = () => {
    const [ListofRest, setListofRest] = useState(restaurants);
    const [filterRes, setFilterRes] = useState("");
    const {loggedInUser,setUserName} = useContext(userContext);

    useEffect(()=>{
        fetchData();
    },[]);

    const  fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        if (json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            setListofRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
    }
    const checkOnline = useOnlineStatus();
    if(checkOnline === false) {
        return(
            <>
                Sorry!! Your are offline better pay you internet bills........
            </>
        );
    }
    return ListofRest.length === 0 ? <Shimmer/> : (
        <div>
        <div className="search-sec flex justify-center py-6">
            <input className= "w-[50%] h-10 p-3 border border-solid border-orange-600 rounded-[20px]" type="text" value={filterRes} placeholder="Search you favourite restaurants"onChange={
                (e)=>{
                    setFilterRes(e.target.value)
                }
            }/>
            <button className="btn bg-orange-600 rounded-full w-20 ml-4 hover:shadow-orange-500" onClick={
                ()=>{
                    const filteredRestaurants = ListofRest.filter((res) => res.info.name.includes(filterRes));
                    setListofRest(filteredRestaurants);
                }
            }>Search</button>
           {/* <input className= "w-[50%] h-10 p-3 border border-solid border-orange-600 rounded-[20px]" type="text" value={loggedInUser} placeholder="Search you favourite restaurants"onChange={
                (e)=>{
                     setUserName(e.target.value)
                }
                }/> */}
                <button className="filter-btn bg-grey-500 rounded px-2" onClick={()=> {
                    const filterRestaurants = ListofRest.filter(res => res.info.avgRating > 4.3);
                    console.log(filterRestaurants);
                    setListofRest(filterRestaurants);
                }}>Filter top restaurants</button>
        </div>
            
        
        <div className="card-container flex flex-wrap justify-center">
            {
                ListofRest.map((restaurant) => (
                    // <Link to={"/restaurant/"+restaurant.info.id }><RestaurantCard key={restaurant.info.id}resData = {restaurant}/></Link>
                    <Link to={"/restaurant/"+restaurant.info.id }><RestaurantCard key={restaurant.info.id}resData = {restaurant}/></Link>
                ))
            }
            
        </div>
        
        </div>
    );
}
export default Body;