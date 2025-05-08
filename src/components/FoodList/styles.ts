import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 0px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 40px;
`;
