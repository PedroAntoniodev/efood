import RestaurantList from "../../components/RestaurantsList";

import Header from "../../components/Header";
import { useEffect, useState } from "react";

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurant(res));
  }, []);

  console.log(restaurant);

  return (
    <>
      <Header />
      <div className="container">
        <RestaurantList restaurants={restaurant} />
      </div>
    </>
  );
};

export default Home;
