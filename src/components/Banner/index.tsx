import bannerImg from "../../assets/images/bannerItaliana.png";
import { Imagem, Titulos } from "./styles";

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulos>
        <h2>Italiana</h2>
        <h1>La Dolce Vita Trattoria</h1>
      </Titulos>
    </div>
  </Imagem>
);

export default Banner;
