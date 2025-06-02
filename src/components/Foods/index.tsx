import { useState } from "react";
import { useDispatch } from "react-redux";

import type { Food } from "../../pages/Home";

import { add, open } from "../../store/reducers/cart";
import { formatPrice, getDescriptionSmall } from "../../utils";

import close from "../../assets/images/close.png";

import * as S from "./styles";

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
      <S.Card>
        <img src={image} alt={title} />
        <S.CardContent>
          <S.Title>{title}</S.Title>
          <S.Description>{getDescriptionSmall(description)}</S.Description>
          <S.Button onClick={() => setModal({ isVisible: true })}>
            Mais detalhes
          </S.Button>
        </S.CardContent>
      </S.Card>
      <S.Modal className={modal.isVisible ? "visivel" : ""}>
        <S.ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Botão fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </header>
          <S.ModalCard>
            <img src={image} alt={title} />
            <S.CardContent>
              <S.Title>{title}</S.Title>
              <S.Description>{description}</S.Description>
              <br />
              <p>Serve: {serving}</p>
              <S.Button onClick={adicionarAoCarrinho}>
                Adicionar ao carrinho - {formatPrice(price)}
              </S.Button>
            </S.CardContent>
          </S.ModalCard>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </S.Modal>
    </>
  );
};

export default Foods;
