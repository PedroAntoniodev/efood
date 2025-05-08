import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px;
`;

export const ConteudoCard = styled.div`
  color: ${cores.branca};
  font-size: 14px;
`;

export const Titulo = styled.h2`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const Descricao = styled.p`
  padding-bottom: 8px;
  color: ${cores.branca2};
`;

export const Botao = styled.button`
  width: 100%;
  color: ${cores.vermelho};
  background-color: ${cores.branca2};
  border: none;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
`;
