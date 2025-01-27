export default Card = ({ resData }) => {
    const restaurantInfo = resData.card.card.info;
    return (
      <div className="card">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${restaurantInfo.cloudinaryImageId}`}
          alt={restaurantInfo.name}
        />
        <h2>{restaurantInfo.name}</h2>
        <p>Cuisines: {restaurantInfo.cuisines?.join(", ")}</p>
        <p>Average Rating: {restaurantInfo.avgRating} stars</p>
        <p>Delivery Time: {restaurantInfo.sla?.deliveryTime} mins</p>
        <p>Cost for Two: {restaurantInfo.costForTwoMessage}</p>
        <p>Address: {restaurantInfo.locality}, {restaurantInfo.areaName}</p>
      </div>
    );

};  