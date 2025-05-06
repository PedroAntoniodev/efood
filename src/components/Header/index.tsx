import logo from "../../assets/images/logo.png";
import { Imagem, LogoEfood, Titulo } from "./styles";
import ImagemFundo from "../../assets/images/fundo.png";

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${ImagemFundo})` }}>
    <LogoEfood src={logo} alt="logo" />
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
);

export default Header;
