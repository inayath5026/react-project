import "../shimmerStyles.css";
import ShimmerCard from "./ShimmerCard";
import Search from "./Search";

export default Shimmer = () => {
  return (
    <>
      <div className="shimmer-container">
        <div className="search">
          <Search />
        </div>
        <div className="shimmer-cards">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      </div>
    </>
  );
};
