import { useParams } from "react-router-dom";

import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import HeaderPerfil from "../../components/HeaderPerfil";
import { useGetMenuQuery } from "../../services/api";

const Perfil = () => {
  const { id } = useParams();

  const { data: menu } = useGetMenuQuery(id!);

  if (!menu) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <HeaderPerfil />
      <Banner
        backgroundImage={menu.capa}
        tipo={menu.tipo}
        titulo={menu.titulo}
      />
      <div className="container">
        <FoodList comidas={menu.cardapio} />
      </div>
    </>
  );
};

export default Perfil;
