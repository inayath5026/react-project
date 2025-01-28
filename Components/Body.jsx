import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { handleSearch, topRated, fetchData } from "../helper";

export default Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData(setResList, setFilteredList);
  }, []);

  const handleInputText = (e) => {
    setInputText(e.target.value);
    handleSearch(resList, setFilteredList, inputText);
  };

  return (
    <div className="Body">
      <div className="search">
        <input type="text" value={inputText} onChange={handleInputText} />
        <button
          onClick={() => {
            handleSearch(resList, setFilteredList, inputText);
          }}
        >
          Search
        </button>
      </div>

      <button
        onClick={() => topRated(filteredList, setFilteredList)}
        className="top-rated"
      >
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