import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const food = CDN_URL;
  return (
    <div className="res-card m-4 p-4 w-[300px] bg-pink-50 rounded-[20px] border-box">
      <img
        className="food-img rounded-md h-[200px] w-[300px]"
        src={food + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 ">{resData.info.name}</h3>
      <div className="cuisine ">{resData.info.cuisines.join(",")}</div>
      <div className="rating">{resData.info.avgRatingString}stars</div>
      <div className="time"> {resData.info.sla.slaString} </div>
    </div>
  );
};
const RestaurantCardRating = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="rating">
          {}stars
        </label>
        <RestaurantCard {...props}/>
      </>
    );
  };
};

export default RestaurantCard;
