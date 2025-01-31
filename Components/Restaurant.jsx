import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMenu } from "../helper";
import Shimmer from "./Shimmer";

const Restaurant = () => {

  const [resMenu, setResMenu] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetchMenu(setResMenu, id);
  }, []);

  if(resMenu.length == 0){
    return <Shimmer/>
  }

  return (
    <>
      <h2>This is Restaurant Page.</h2>
      <h4>{resMenu?.cards[2]?.card?.card?.info?.name || 'Restaurant Name'}</h4>
      {resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.length > 0 ? (
        <ul>
          {resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((res) => {
            return <li key={res.card.info.id}>{res.card.info.name}</li>;
          })}
        </ul>
      ) : (
        <p>No items available.</p>
      )}
    </>
  );
  
};
export default Restaurant;