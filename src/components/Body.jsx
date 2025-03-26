import { useState, useEffect } from "react";
import { Cards } from "./card";

export const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4385553&lng=79.1288412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const response = await fetch(api);
        console.log(response);
        const data = await response.json();

        console.log( data); // Debugging: Log response

        // Extract restaurant data correctly
        const restaurantList =
          data?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestaurants(restaurantList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Runs only on mount

  return (
    <div className="body">
      <div className="restaurant-container">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Cards key={restaurant.info.id} Resturant={restaurant.info} />
          ))
        ) : (
          <p>Loading restaurants...</p>
        )}
      </div>
    </div>
  );
};
