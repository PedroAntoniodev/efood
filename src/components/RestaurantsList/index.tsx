import type { Restaurant } from "../../pages/Home";
import Restaurants from "../Restaurants";
import * as S from "./styles";

export type Props = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurants: Restaurant) => {
    const tags = [];

    if (restaurants.destacado === true) {
      tags.push("Destaque da semana");
    }

    return tags;
  };

  return (
    <S.Container>
      <S.List>
        {restaurants.map((restaurant) => (
          <Restaurants
            id={restaurant.id}
            key={restaurant.id}
            title={restaurant.titulo}
            description={restaurant.descricao}
            infos={[...getRestaurantTags(restaurant), restaurant.tipo]}
            image={restaurant.capa}
            overallRating={restaurant.avaliacao}
          />
        ))}
      </S.List>
    </S.Container>
  );
};

export default RestaurantList;
