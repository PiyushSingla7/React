import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/resList";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText,setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Navbar">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants or dishes..."
            value={searchText}
            onChange={(e)=>{
              setsearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={()=>{
            //filter the restaurants
          }} >Search</button>
        </div>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
