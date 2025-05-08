import { Botao, Card, ConteudoCard, Descricao, Titulo } from "./styles";

type Props = {
  title: string;
  description: string;
  image: string;
};

const Foods = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <ConteudoCard>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </ConteudoCard>
  </Card>
);

export default Foods;
