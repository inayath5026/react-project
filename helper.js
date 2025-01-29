//Top Rated Filtering Function
const topRated = (filteredList, setFilteredList) => {
  setFilteredList(
    filteredList.filter((restaurant) => {
      const restaurantInfo = restaurant.card.card.info;
      return restaurantInfo.avgRating > 4.5;
    })
  );
};

//Handling The Search Function
const handleSearch = (resList, setFilteredList, inputText) => {
  const fL = resList.filter((res) =>
    res.card.card.info.name.toLowerCase().includes(inputText.toLowerCase())
  );
  setFilteredList(fL);
};

//Fetching Data From API
const fetchData = async (setResList, setFilteredList) => {
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

const sortPrices = (resList, setFilteredList) => {
    const sortedList = [...resList].sort((a, b) => {
      return a.card.card.info.costForTwo - b.card.card.info.costForTwo;
    });
    setFilteredList(sortedList);
};


export { topRated, handleSearch, fetchData, sortPrices };