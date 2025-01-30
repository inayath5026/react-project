import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { handleSearch, topRated, fetchData, sortPrices } from "../helper";
import { Link } from "react-router-dom";

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
          className="search-btn"
        >
          Search
        </button>
        <button
          onClick={() => topRated(filteredList, setFilteredList)}
          className="top-rated"
        >
          Top Rated
        </button>

        <button
          onClick={() => sortPrices(resList, setFilteredList)}
          className="sort-prices"
        >
          Sort Prices
        </button>
      </div>

      <div className="card-container">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredList.map((restaurant) => (
            <Link to={"/res/"+restaurant.card.card.info.id} key={restaurant.card.card.info.id} className="card-link"><Card resData={restaurant} /></Link>
          ))
        )}
      </div>
    </div>
  );
};
