import { useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants"
import { addItem } from "../utils/CartSlice";
const CategoryItemList = ({ list }) => {
  // console.log(list);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-grey-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -Rs
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          
          <div className="p-4 w-3/12">
            <img src={CDN_URL + item.card.info.imageId}/>
            <div className="relative bottom-3 left-10" >
            <button className="bg-pink-200 w-12 rounded-[20px]" onClick={()=>{handleAddItem(item)}}>Add</button>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default CategoryItemList;
