import React from "react";
import Restaurant from "./Restaurant";
import restaurants from "../api/restaurantData";

function RestaurantList() {
  return (
    <section className="restaurantlist">
      {restaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </section>
  );
}

// function RestaurantList() {
//   return (
//     <section class="restaurantlist">
//       <Restaurant />
//       <Restaurant />
//       <Restaurant />
//       <Restaurant />
//       <Restaurant />
//       <Restaurant />
//     </section>
//   );
// }

export default RestaurantList;
