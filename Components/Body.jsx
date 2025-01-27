import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Search from "./Search";

export default Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.406498&lng=78.47724389999999&str=North%20Indian&trackingId=5ca992b5-6660-8b62-879d-ea987c2c0f7b&submitAction=ENTER&queryUniqueId=ccdd32a2-b22f-eff8-a46b-4c7f75c572f3"
      );
      const jsonData = await response.json();
      const restaurantCards =
        jsonData.data.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards ||
        [];
      setResList(restaurantCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if(resList.length === 0){
    return <Shimmer/>
  }

  return (
    <>
      <div className="Body">
        <Search/>
        <div className="card-container">
          {resList.map((restaurant) => (
            <Card resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};