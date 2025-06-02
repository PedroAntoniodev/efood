export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
export const descriptionLimit = (description: string, limit: number) => {
  if (description.length > limit) {
    return description.slice(0, limit).trim() + "...";
  }

  return description;
};

export const getDescriptionSmall = (description: string) => {
  return descriptionLimit(description, 100);
};

export const getDescription = (description: string) => {
  return descriptionLimit(description, 250);
};
