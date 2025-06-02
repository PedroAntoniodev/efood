import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import Tag from "../Tag";

import * as S from "./styles";

import { getDescription } from "../../utils";

type Props = {
  id: number;
  title: string;
  description: string;
  infos: string[];
  image: string;
  overallRating: number;
};

const Restaurants = ({
  title,
  description,
  infos,
  image,
  overallRating,
  id,
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={id}>{info}</Tag>
      ))}
    </S.Infos>
    <S.CardContent>
      <S.CardTop>
        <S.Title>{title}</S.Title>
        <S.OverallRating>
          {overallRating}
          <FaStar color="#FFB930" size={20} style={{ marginLeft: "4px" }} />
        </S.OverallRating>
      </S.CardTop>
      <S.Description>{getDescription(description)}</S.Description>
      <Link to={`/perfil/${id}`}>
        <S.Button>Saiba mais</S.Button>
      </Link>
    </S.CardContent>
  </S.Card>
);

export default Restaurants;
