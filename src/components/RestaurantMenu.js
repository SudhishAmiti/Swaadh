import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(false);
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  const { name, areaName, city, avgRating, totalRatings, cuisines } =
    resMenu?.cards[2]?.card?.card?.info || {};
  const menu =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  const catigories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  console.log(catigories);

  return (
    <div className="menu text-center my-10">
      <div className="rest-details">
        <img src=""></img>
        <h1 className="font-bold text-lg ">{resMenu && name}</h1>
        <h3>{resMenu && areaName + "," + city}</h3>
        {/* <h3>{resMenu && avgRating + "," + totalRatings}</h3>
        <h2>{resMenu && cuisines ? cuisines.join(",") : ""}</h2>
        <h2>Menu</h2>
        <ul>
          {
            resMenu && menu?.map((item)=> <li key={item.card.info.name}> {item?.card?.info?.name +"- Rs"+ item?.card?.info?.price/100} </li>)
          }
        </ul> */}
        {catigories.map((item, index) => (
          <RestaurantCategory
            data={item?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
