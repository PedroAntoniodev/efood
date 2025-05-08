import bannerImg from "../../assets/images/bannerItaliana.png";
import { Container, Imagem } from "./styles";

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <h2>Italiana</h2>
      <h1>La Dolce Vita Trattoria</h1>
    </Container>
  </Imagem>
);

export default Banner;
