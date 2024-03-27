import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Cocktail"],
  endpoints: (builder) => ({}),
});
