import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  backgound-color: ${cores.branca};
  border: 1px solid ${cores.vermelho};
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 16px;
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
  margin-top: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;
