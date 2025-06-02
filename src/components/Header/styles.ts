import styled from "styled-components";
import { colors } from "../../styles";

export const Image = styled.div`
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${colors.red};
  text-align: center;
  margin-top: 80px;
  padding-bottom: 40px;
`;

export const LogoEfood = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 64px;
`;
