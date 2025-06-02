import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { open } from "../../store/reducers/cart";
import type { RootReducer } from "../../store";

import backgroundImage from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.png";

import { Image, LogoEfood } from "../Header/styles";
import * as S from "./styles";

const HeaderPerfil = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const OpenCart = () => {
    dispatch(open());
  };

  return (
    <Image style={{ backgroundImage: `url(${backgroundImage})` }}>
      <S.Styles>
        <div className="container">
          <h2>Restaurantes</h2>
          <Link to="/">
            <LogoEfood src={logo} alt="logo" />
          </Link>
          <S.LinkCart onClick={OpenCart}>
            {items.length} itens no carrinho
          </S.LinkCart>
        </div>
      </S.Styles>
    </Image>
  );
};

export default HeaderPerfil;
