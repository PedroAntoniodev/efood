import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";

import { formataPreco } from "../../utils";

import { Overlay, CardContainer, SideBar, CartItem, Preco } from "./styles";
import { Botao } from "../Foods/styles";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CardContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </CartItem>
          ))}
        </ul>
        <Preco>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Preco>
        <Botao type="button" title="Clique aqui para continuar com a entrega">
          Continuar com a entrega
        </Botao>
      </SideBar>
    </CardContainer>
  );
};

export default Cart;
