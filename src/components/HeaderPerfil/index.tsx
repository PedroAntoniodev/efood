import { Link } from "react-router-dom";

import ImagemFundo from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.png";

import { Imagem, LogoEfood } from "../Header/styles";
import { LinkCart, Styles } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";

const HeaderPerfil = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const OpenCart = () => {
    dispatch(open());
  };

  return (
    <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
      <Styles>
        <div className="container">
          <h2>Restaurantes</h2>
          <Link to="/">
            <LogoEfood src={logo} alt="logo" />
          </Link>
          <LinkCart onClick={OpenCart}>
            {items.length} itens no carrinho
          </LinkCart>
        </div>
      </Styles>
    </Imagem>
  );
};

export default HeaderPerfil;
