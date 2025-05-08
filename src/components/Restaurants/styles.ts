import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  padding: 0px;
  position: relative;
  background-color: ${cores.branca};

  img {
    display: block;
    width: 472px;
    height: 217px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const ConteudoCard = styled.div`
  border: 1px solid ${cores.vermelho};
  display: block;
  justify-content: space-between;
`;

export const TopoCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${cores.vermelho};
`;

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.vermelho};
  padding: 8px;
  margin-bottom: 16px;
`;

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const OverallRating = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.vermelho};
`;

export const Botao = styled.button`
  height: 24px;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  border: none;
  padding: 4px 6px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
