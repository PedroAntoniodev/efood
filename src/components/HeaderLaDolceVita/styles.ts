import styled from "styled-components";
import { cores } from "../../styles";
import { LogoEfood } from "../Header/styles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 60px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};

  ${LogoEfood} {
    display: flex;
    padding-top: 0;
  }
`;

export const Titulo = styled.h2``;

export const LinkCart = styled.a`
  color: ${cores.vermelho};
`;
