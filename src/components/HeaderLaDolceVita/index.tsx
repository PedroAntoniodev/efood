import { Link } from "react-router-dom";
import ImagemFundo from "../../assets/images/fundo.png";
import logo from "../../assets/images/logo.png";
import { Imagem, LogoEfood } from "../Header/styles";
import { Container, LinkCart, Titulo } from "./styles";

const HeaderLaDolceVita = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <Container>
      <Titulo>Restaurantes</Titulo>
      <Link to="/">
        <LogoEfood src={logo} alt="logo" />
      </Link>
      <LinkCart>0 itens no carrinho</LinkCart>
    </Container>
  </Imagem>
);

export default HeaderLaDolceVita;
