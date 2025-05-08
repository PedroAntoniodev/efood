import { FaStar } from "react-icons/fa";

import Tag from "../Tag";
import {
  Botao,
  Card,
  ConteudoCard,
  Descricao,
  Infos,
  OverallRating,
  Titulo,
  TopoCard,
} from "./styles";
import { Link } from "react-router-dom";

type Props = {
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
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <ConteudoCard>
      <TopoCard>
        <Titulo>{title}</Titulo>
        <OverallRating>
          {overallRating}
          <FaStar color="#FFB930" size={20} style={{ marginLeft: "4px" }} />
        </OverallRating>
      </TopoCard>
      <Descricao>{description}</Descricao>
      <Link to="/LaDolceVita">
        <Botao>Saiba mais</Botao>
      </Link>
    </ConteudoCard>
  </Card>
);

export default Restaurants;
