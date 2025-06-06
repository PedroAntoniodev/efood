import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
  display: block;
  margin-top: 120px;
  background-color: #ffebd9;

  p {
    text-align: center;
    margin-top: 32px;
    padding-bottom: 32px;
    color: ${colors.red};
    font-size: 10px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
`;
