import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { Restaurant } from "../Home";

import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import HeaderPerfil from "../../components/HeaderPerfil";

const Perfil = () => {
  const { id } = useParams();

  const [comidas, setComidas] = useState<Restaurant | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setComidas(res));
  }, [id]);

  if (!comidas) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        backgroundImage={comidas.capa}
        tipo={comidas.tipo}
        titulo={comidas.titulo}
      />
      <div className="container">
        <FoodList comidas={comidas.cardapio} />
      </div>
    </>
  );
};

export default Perfil;
