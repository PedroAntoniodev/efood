export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};
export const LimitaDescricao = (descricao: string, limite: number) => {
  if (descricao.length > limite) {
    return descricao.slice(0, limite).trim() + "...";
  }

  return descricao;
};

export const getDescricaoCurta = (descricao: string) => {
  return LimitaDescricao(descricao, 100);
};

export const getDescricao = (descricao: string) => {
  return LimitaDescricao(descricao, 250);
};
