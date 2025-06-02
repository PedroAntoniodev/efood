import * as S from "./styles";

type BannerProps = {
  backgroundImage: string;
  type: string;
  title: string;
};

const Banner = ({ backgroundImage, type, title }: BannerProps) => (
  <S.Image style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
      <S.Title>
        <h2>{type}</h2>
        <h1>{title}</h1>
      </S.Title>
    </div>
  </S.Image>
);

export default Banner;
