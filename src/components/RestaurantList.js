import React from "react";
import Restaurant from "./Restaurant";
import restaurants from "../api/restaurantData";
import styled from "styled-components";

const RestaurantListSection = styled.section`
  /*background: ${props =>
    props.odd ? "hsl(123, 44%, 93%)" : "hsl(188, 44%, 91%)"};*/
    background: ${props => props.theme.background}; 
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  overflow: auto;
  align-items: center;
  justify-content: space-between;
`;

function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredRestaurants = restaurants.filter(restaurant => {
    let keepRestaurant = true;
    if (!selectedFilters) {
      return true;
    }
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "<2min":
          keepRestaurant = restaurant.distance < 2;
          break;
        case "<5min":
          keepRestaurant = restaurant.distance < 5;
          break;
        case "<10min":
          keepRestaurant = restaurant.distance <= 10;
          break;
        default:
          break;
      }
    }
    if (keepRestaurant && selectedFilters.category) {
      keepRestaurant = restaurant.category.includes(selectedFilters.category);
    }
    if (selectedFilters.price) {
      switch (selectedFilters.price) {
        case "<3":
          keepRestaurant = restaurant.price < 3;
          break;
        case "<5":
          keepRestaurant = restaurant.distance < 5;
          break;
        case "<10":
          keepRestaurant = restaurant.distance < 10;
          break;
        default:
          break;
      }
    }
    return keepRestaurant;
  });
  return (
    <RestaurantListSection>
      {filteredRestaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </RestaurantListSection>
  );
}
export default RestaurantList;

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
