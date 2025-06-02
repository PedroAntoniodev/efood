import { useGetRestaurantsQuery } from "../../services/api";

import RestaurantList from "../../components/RestaurantsList";
import Header from "../../components/Header";

export type Food = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Food[];
};

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery();

  if (restaurant) {
    return (
      <>
        <Header />
        <div className="container">
          <RestaurantList restaurants={restaurant} />
        </div>
      </>
    );
  }
  return <h4>Carregando</h4>;
};

export default Home;
