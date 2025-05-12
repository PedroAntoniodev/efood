import { Link } from "react-router-dom";
import ImagemFundo from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.png";
import { Imagem, LogoEfood } from "../Header/styles";
import { LinkCart, Styles } from "./styles";

const HeaderLaDolceVita = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <Styles>
      <div className="container">
        <h2>Restaurantes</h2>
        <Link to="/">
          <LogoEfood src={logo} alt="logo" />
        </Link>
        <LinkCart>0 itens no carrinho</LinkCart>
      </div>
    </Styles>
  </Imagem>
);

export default HeaderLaDolceVita;
