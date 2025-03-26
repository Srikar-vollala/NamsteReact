export const Cards = ({ Resturant }) => {
    if (!Resturant) return null; // Prevents crashes if data is missing
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla, // Contains delivery time
      costForTwo,
    } = Resturant; // Fix: Directly use Resturant.info from API
  
    return (
      <div className="card">
        <img
          className="res-img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ") || "No cuisines available"}</h4>
        <div className="restaurant-info">
          <h4>⭐ {avgRating || "N/A"}</h4>
          <h4>⏳ {sla?.deliveryTime ? `${sla.deliveryTime} min` : "N/A"}</h4>
          <h4>💰 {costForTwo || "N/A"}</h4>
        </div>
      </div>
    );
  };
  