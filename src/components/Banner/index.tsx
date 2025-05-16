import { Imagem, Titulos } from "./styles";

type BannerProps = {
  backgroundImage: string;
  tipo: string;
  titulo: string;
};

const Banner = ({ backgroundImage, tipo, titulo }: BannerProps) => (
  <Imagem style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
      <Titulos>
        <h2>{tipo}</h2>
        <h1>{titulo}</h1>
      </Titulos>
    </div>
  </Imagem>
);

export default Banner;
