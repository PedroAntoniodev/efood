import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  padding-top: 24px;
  padding-bottom: 32px;
  margin-bottom: 56px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    position: relative;
    z-index: 1;
    width: 100%;
  }
`;

export const Title = styled.div`
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
