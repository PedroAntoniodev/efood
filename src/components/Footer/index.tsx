import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twiter.png";
import Logo from "../../assets/images/logo.png";

import { Container, SocialLinks } from "./styles";
import { LogoEfood } from "../Header/styles";
import { Link } from "react-router-dom";

const Footer = () => (
  <Container>
    <Link to="/">
      <LogoEfood src={Logo} alt="logo" />
    </Link>
    <SocialLinks>
      <a href="#"></a>
      <a href="#">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter" />
      </a>
    </SocialLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
);

export default Footer;
