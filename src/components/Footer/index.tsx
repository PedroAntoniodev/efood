import { Link } from "react-router-dom";

import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twiter.png";
import Logo from "../../assets/images/logo.png";

import * as S from "./styles";
import { LogoEfood } from "../Header/styles";

const Footer = () => (
  <S.Container>
    <Link to="/">
      <LogoEfood src={Logo} alt="logo" />
    </Link>
    <S.SocialLinks>
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
    </S.SocialLinks>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </p>
  </S.Container>
);

export default Footer;
