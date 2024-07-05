import { useState } from "react";
import CategoryItemList from "./CategoryItemList";
const RestaurantCategory = ({ data , showItems,setShowIndex}) => {
    // const [showItems,setShowItems] = useState(false);
    const handleCLick = () => {
        setShowIndex();
    }
  //   console.log(data);
  return (
    <div className="m-4">
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={()=>{handleCLick()}}>
          <span className="font-bold text-lg ">
            {data.title}({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <CategoryItemList list={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
