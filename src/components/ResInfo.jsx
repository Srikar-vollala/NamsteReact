import { useState, useEffect } from "react";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchRestaurantInfo = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2509733&lng=78.1694603&restaurantId=253987&catalog_qa=undefined&submitAction=ENTER"
      );
      const data = await response.json();
      setResInfo(data); // Set the data to state
    } catch (error) {
      console.error("Failed to fetch restaurant info:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);

  // Early return if data isn't loaded
  if (!resInfo) return <div>Loading...</div>;

  // Example path to restaurant name and items
  const restaurantName =
    resInfo?.data?.cards?.[0]?.card?.card?.info?.name || "Restaurant";

  const menuItems =
    resInfo?.data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>
      <h2>Menu Items</h2>
      <ul>
        {menuItems.map((itemCard, index) => {
          const item = itemCard?.card?.card?.itemCards?.[0]?.card?.info;
          return item ? <li key={index}>{item.name}</li> : null;
        })}
      </ul>
    </div>
  );
};
