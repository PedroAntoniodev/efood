import type Restaurant from "../../models/Restaurant";
import Restaurants from "../Restaurants";
import { Container, List } from "./styles";

export type Props = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <Container>
      <List>
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            infos={restaurant.infos}
            image={restaurant.image}
            overallRating={restaurant.overallRating}
          />
        ))}
      </List>
    </Container>
  );
};

export default RestaurantList;
