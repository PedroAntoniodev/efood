import styled from "styled-components";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 24px;
  padding-bottom: 32px;
  margin-bottom: 56px;
`;

export const Titulos = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  h1 {
    font-weight: 900;
    font-size: 32px;
  }

  h2 {
    font-weight: 100;
    font-size: 32px;
  }
`;
