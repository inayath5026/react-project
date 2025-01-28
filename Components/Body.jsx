import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

export default Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputText, setInputText] = useState("");

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
      setFilteredList(restaurantCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const topRated = () => {
    setFilteredList(
      filteredList.filter((restaurant) => {
        const restaurantInfo = restaurant.card.card.info;
        return restaurantInfo.avgRating > 4.5;
      })
    );
  };

  const handleSearch = () => {
    const fL = resList.filter((res) =>
      res.card.card.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredList(fL);
  };

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="Body">
      <div className="search">
        <input type="text" value={inputText} onChange={handleInputText} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <button onClick={topRated} className="top-rated">
        Top Rated
      </button>

      <div className="card-container">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <Card key={restaurant.card.card.info.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};
