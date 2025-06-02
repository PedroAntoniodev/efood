import { useParams } from "react-router-dom";

import { useGetMenuQuery } from "../../services/api";

import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import HeaderPerfil from "../../components/HeaderPerfil";

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
        type={menu.tipo}
        title={menu.titulo}
      />
      <div className="container">
        <FoodList comidas={menu.cardapio} />
      </div>
    </>
  );
};

export default Perfil;
