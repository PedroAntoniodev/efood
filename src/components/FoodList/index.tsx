import Foods from "../Foods";

import { List } from "./styles";
import { Container } from "../RestaurantsList/styles";
export type Food = {
  foto: string;
  preco: number;
  id: number;
  nome: string;
  descricao: string;
  porcao: string;
};

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
            title={comida.nome}
            description={comida.descricao}
            image={comida.foto}
            serving={comida.porcao}
            price={comida.preco}
            food={comida}
          />
        ))}
      </List>
    </Container>
  );
};

export default FoodList;
