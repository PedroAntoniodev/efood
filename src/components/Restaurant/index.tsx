import Tag from "../Tag";
import { Card, Descricao, Infos, Titulo } from "./styles";
import Star from "../../assets/images/star.png";

type Props = {
  title: string;
  description: string;
  infos: string[];
  image: string;
  overallRating: number;
};

const Restaurant = ({
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
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Titulo>{title}</Titulo>
      <p>
        {overallRating}
        <img src={Star} />
      </p>
    </div>
    <Descricao>{description}</Descricao>
  </Card>
);

export default Restaurant;
