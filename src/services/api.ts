import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Restaurant } from "../pages/Home";

type Product = {
  id: number;
  price: number;
};

type PurchasePayLoad = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
    getMenu: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<PurchseResponse, PurchasePayLoad>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetMenuQuery, usePurchaseMutation } =
  api;

export default api;
