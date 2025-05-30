import { createGlobalStyle } from "styled-components";

export const cores = {
  vermelho: "#E66767",
  branca: "#FFF8F2",
  branca2: "#FFEBD9",
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.branca};
  }


  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`;
