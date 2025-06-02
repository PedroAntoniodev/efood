import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IMaskInput } from "react-imask";

import { usePurchaseMutation } from "../../services/api";

import type { RootReducer } from "../../store";
import { close, remove, setStep, clear } from "../../store/reducers/cart";

import * as S from "./styles";
import { Button } from "../Foods/styles";

import { formatPrice } from "../../utils";
const Cart = () => {
  const { isOpen, items, step } = useSelector(
    (state: RootReducer) => state.cart
  );

  const [purchase, { data, isSuccess, isLoading, reset }] =
    usePurchaseMutation();
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      cep: "",
      houseNumber: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter no mínimo 5 caracteres")
        .required("Campo obrigatório"),
      address: Yup.string().required("Campo obrigatório"),
      city: Yup.string().required("Campo obrigatório"),
      cep: Yup.string().required("Campo obrigatório"),
      houseNumber: Yup.string().required("Campo obrigatório"),

      cardName: Yup.string().when((values, schema) =>
        step === "payment" ? schema.required("Campo obrigatório") : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        step === "payment" ? schema.required("Campo obrigatório") : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        step === "payment" ? schema.required("Campo obrigatório") : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        step === "payment" ? schema.required("Campo obrigatório") : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        step === "payment" ? schema.required("Campo obrigatório") : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
      });
    },
  });

  const CheckInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco);
    }, 0);
  };

  const handleFinishOrder = () => {
    dispatch(close());
    dispatch(setStep("cart"));
    reset();
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const goToDelivery = () => {
    if (items.length === 0) {
      return alert("Seu carrinho está vazio");
    }
    dispatch(setStep("delivery"));
  };

  const goToPayment = async () => {
    const errors = await form.validateForm();
    if (Object.keys(errors).length === 0) {
      dispatch(setStep("payment"));
    } else {
      form.setTouched(
        Object.keys(form.values).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as { [key: string]: boolean })
      );
    }
  };

  const goToCart = () => {
    dispatch(setStep("cart"));
  };

  return (
    <S.CardContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay
        onClick={() => {
          if (!isLoading && !isSuccess) {
            closeCart();
          }
        }}
      />
      <S.SideBar>
        {isSuccess && data ? (
          <>
            <S.Title>Pedido realizado - {data.orderId}</S.Title>
            <S.Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </S.Text>
            <S.Text>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </S.Text>
            <S.Text>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </S.Text>
            <S.Text>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </S.Text>
            <Button onClick={handleFinishOrder}>Concluir</Button>
          </>
        ) : step === "cart" ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                  ></button>
                </S.CartItem>
              ))}
            </ul>
            <S.Preco>
              <p>Valor total</p>
              <p>{formatPrice(getTotalPrice())}</p>
            </S.Preco>
            <S.ButtonContainer>
              <Button
                type="button"
                title="Clique aqui para continuar com a entrega"
                onClick={goToDelivery}
              >
                Continuar com a entrega
              </Button>
              <Button
                type="button"
                title="Clique aqui para continuar comprando"
                onClick={closeCart}
              >
                Continuar comprando
              </Button>
            </S.ButtonContainer>
          </>
        ) : step === "delivery" ? (
          <form onSubmit={form.handleSubmit}>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <S.Label htmlFor="fullName">Quem irá receber</S.Label>
              <S.Input
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={CheckInputHasError("fullName") ? "error" : ""}
              />
              <S.Label htmlFor="adress">Endereço</S.Label>
              <S.Input
                id="adress"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={CheckInputHasError("address") ? "error" : ""}
              />
              <S.Label htmlFor="city">Cidade</S.Label>
              <S.Input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={CheckInputHasError("city") ? "error" : ""}
              />
            </S.InputGroup>
            <S.ContainerInput>
              <S.InputGroup maxWidth="155px">
                <S.Label htmlFor="cep">CEP</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="00000-000"
                  id="cep"
                  type="text"
                  name="cep"
                  value={form.values.cep}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("cep") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <S.Label htmlFor="houseNumber">Número</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="0000"
                  id="houseNumber"
                  type="text"
                  name="houseNumber"
                  value={form.values.houseNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("houseNumber") ? "error" : ""}
                />
              </S.InputGroup>
            </S.ContainerInput>
            <S.InputGroup>
              <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
              <S.Input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.ButtonContainer>
              <Button onClick={goToPayment}>Ir para Pagamento</Button>
              <Button onClick={goToCart}>Voltar ao Carrinho</Button>
            </S.ButtonContainer>
          </form>
        ) : step === "payment" ? (
          <form onSubmit={form.handleSubmit}>
            <S.Title>
              Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
            </S.Title>
            <S.InputGroup>
              <S.Label htmlFor="cardName">Nome no cartão</S.Label>
              <S.Input
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={CheckInputHasError("cardName") ? "error" : ""}
              />
            </S.InputGroup>
            <S.ContainerInput>
              <S.InputGroup maxWidth="228px">
                <S.Label htmlFor="cardNumber">Número do Cartão</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="0000 0000 0000 0000"
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("cardNumber") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <S.Label htmlFor="cardCode">CVV</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="000"
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("cardCode") ? "error" : ""}
                />
              </S.InputGroup>
            </S.ContainerInput>
            <S.ContainerInput>
              <S.InputGroup maxWidth="155px">
                <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="00"
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("expiresMonth") ? "error" : ""}
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="155px">
                <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                <S.Input
                  as={IMaskInput}
                  mask="00"
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={CheckInputHasError("expiresYear") ? "error" : ""}
                />
              </S.InputGroup>
            </S.ContainerInput>
            <S.ButtonContainer>
              <Button
                type="submit"
                title="Clique aqui para finalizar o pedido"
                disabled={isLoading}
              >
                {isLoading
                  ? "Realizando o pagamento..."
                  : "Finalizar pagamento"}
              </Button>
              <Button onClick={goToDelivery}>
                Voltar para a edição de endereço
              </Button>
            </S.ButtonContainer>
          </form>
        ) : null}
      </S.SideBar>
    </S.CardContainer>
  );
};

export default Cart;
