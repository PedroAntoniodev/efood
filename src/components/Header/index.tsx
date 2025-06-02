import * as S from "./styles";

import backgroundImage from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.png";
const Header = () => (
  <S.Image style={{ backgroundImage: `url(${backgroundImage})` }}>
    <S.LogoEfood src={logo} alt="logo" />
    <S.Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </S.Title>
  </S.Image>
);

export default Header;
