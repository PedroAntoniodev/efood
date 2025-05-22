import styled from "styled-components";
import { cores } from "../../styles";

import lixeira from "../../assets/images/lixeira.png";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`;
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;
export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`;
export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.branca};
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.branca2};
  width: 344px;
  height: 100px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 8px 12px 8px 8px;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
    color: ${cores.vermelho};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${cores.vermelho};
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;
