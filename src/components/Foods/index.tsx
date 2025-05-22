import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Food } from "../../pages/Home";

import { add, open } from "../../store/reducers/cart";
import { formataPreco, getDescricaoCurta } from "../../utils";

import {
  Botao,
  Card,
  ConteudoCard,
  Descricao,
  Modal,
  ModalCard,
  ModalContent,
  Titulo,
} from "./styles";
import fechar from "../../assets/images/close.png";

type Props = {
  title: string;
  description: string;
  serving: string;
  image: string;
  price: number;
  food: Food;
};

export interface ModalState {
  isVisible: boolean;
}

const Foods = ({ title, description, image, serving, price, food }: Props) => {
  const dispatch = useDispatch();

  const adicionarAoCarrinho = () => {
    dispatch(add(food));
    dispatch(open());
  };

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
  });

  const closeModal = () => {
    setModal({
      isVisible: false,
    });
  };
  return (
    <>
      <Card>
        <img src={image} alt={title} />
        <ConteudoCard>
          <Titulo>{title}</Titulo>
          <Descricao>{getDescricaoCurta(description)}</Descricao>
          <Botao onClick={() => setModal({ isVisible: true })}>
            Mais detalhes
          </Botao>
        </ConteudoCard>
      </Card>
      <Modal className={modal.isVisible ? "visivel" : ""}>
        <ModalContent className="container">
          <header>
            <img
              src={fechar}
              alt="Botão fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </header>
          <ModalCard>
            <img src={image} alt={title} />
            <ConteudoCard>
              <Titulo>{title}</Titulo>
              <Descricao>{description}</Descricao>
              <br />
              <p>Serve: {serving}</p>
              <Botao onClick={adicionarAoCarrinho}>
                Adicionar ao carrinho - {formataPreco(price)}
              </Botao>
            </ConteudoCard>
          </ModalCard>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </Modal>
    </>
  );
};

export default Foods;
