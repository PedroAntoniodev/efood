import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${cores.vermelho};
  text-align: center;
  margin-top: 260px;
`;

export const LogoEfood = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 64px;
`;
