import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  padding: 0px;
  position: relative;
  background-color: ${colors.white};

  img {
    display: block;
    width: 472px;
    height: 217px;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const CardContent = styled.div`
  border: 1px solid ${colors.red};
  display: block;
  justify-content: space-between;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${colors.red};
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${colors.red};
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
  color: ${colors.red};
`;

export const Button = styled.button`
  height: 24px;
  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  padding: 4px 6px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
