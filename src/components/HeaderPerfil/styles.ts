import styled from "styled-components";
import { cores } from "../../styles";
import { LogoEfood } from "../Header/styles";

export const Styles = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    font-size: 18px;
    font-weight: 900;
    line-height: 100%;
    color: ${cores.vermelho};

    h2 {
      font-size: 18px;
      font-weight: 900;
      line-height: 100%;
    }
  }

  ${LogoEfood} {
    display: flex;
    padding-top: 0;
  }
`;

export const LinkCart = styled.a`
  color: ${cores.vermelho};
  cursor: pointer;
`;
