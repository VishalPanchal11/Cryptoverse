import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const cryptoApiHeaders = {
  "x-rapidapi-key": "06b79fa730msh45a05707a561b7ap1a219djsndc51560e187d",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl =
  "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery, } = cryptoApi;
