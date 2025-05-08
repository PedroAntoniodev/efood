import { List } from "./styles";
import { Container } from "../RestaurantsList/styles";
import Foods from "../Foods";
import type Food from "../../models/Food";

export type Props = {
  comidas: Food[];
};

const FoodList = ({ comidas }: Props) => {
  return (
    <Container>
      <List>
        {comidas.map((comida) => (
          <Foods
            key={comida.id}
            title={comida.title}
            description={comida.description}
            image={comida.image}
          />
        ))}
      </List>
    </Container>
  );
};

export default FoodList;
