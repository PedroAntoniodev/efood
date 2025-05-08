import Banner from "../../components/Banner";
import FoodList from "../../components/FoodList";
import HeaderLaDolceVita from "../../components/HeaderLaDolceVita";
import type Food from "../../models/Food";
import pizza from "../../assets/images/pizza.png";

const comidas: Food[] = [
  {
    id: 1,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 2,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 3,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 4,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 5,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
  {
    id: 6,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    image: pizza,
  },
];

const Perfil = () => (
  <>
    <HeaderLaDolceVita />
    <Banner />
    <div className="container">
      <FoodList comidas={comidas} />
    </div>
  </>
);

export default Perfil;
