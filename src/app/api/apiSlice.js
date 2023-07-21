import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api-ieee-unheval.onrender.com",
});
export const apiSlice = createApi({
  tagTypes: ["Member"],
  baseQuery,
  endpoints: (builder) => ({}),
});
