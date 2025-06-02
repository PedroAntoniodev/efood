import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
  background-color: ${colors.red};
  padding: 8px;

  img {
    display: block;
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  color: ${colors.white};
  font-size: 14px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const Description = styled.p`
  padding-bottom: 8px;
  color: ${colors.white2};
`;

export const Button = styled.button`
  width: 100%;
  color: ${colors.red};
  background-color: ${colors.white2};
  border: none;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContent = styled.div`
  background-color: ${colors.red};
  width: 1024px;
  height: 344px;
  z-index: 1;

  header {
    display: flex;
    justify-content: flex-end;
    padding: 8px;

    > img {
      height: 16px;
      cursor: pointer;
    }
  }
`;

export const ModalCard = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #fff;

  img {
    height: 280px;
    width: 280px;
    padding-top: 8px;
    margin-left: 32px;
    margin-bottom: 32px;
    margin-right: 24px;
    object-fit: cover;
  }

  ${Title} {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  ${Description} {
    color: #fff;
    line-height: 22px;
    padding-right: 32px;
  }

  ${Button} {
    width: 218px;
    height: 24px;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;
