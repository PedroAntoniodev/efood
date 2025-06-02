import styled from "styled-components";

import { colors } from "../../styles";
import { Button } from "../Foods/styles";

import binIcon from "../../assets/images/lixeira.png";

type InputGroupProps = {
  maxWidth?: string;
};

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
  background-color: ${colors.red};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`;
export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.white2};
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
    color: ${colors.red};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${colors.red};
  }

  button {
    background-image: url(${binIcon});
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
  color: ${colors.white};
`;

export const InputGroup = styled.div<InputGroupProps>`
  display: auto;
  max-width: ${(props) => props.maxWidth};
`;

export const Label = styled.label`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  ${Button} {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: ${colors.white2};
  border: 1px solid ${colors.white2};
  margin-bottom: 8px;
  margin-top: 8px;

  &.error {
    border: 2px solid red;
  }
`;

export const Text = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
`;
