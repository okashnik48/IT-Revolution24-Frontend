import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store-hooks";

export const ROOT_URL = "https://hackaton.dev.m0e.space/api";

const baseQuery = fetchBaseQuery({
  baseUrl: ROOT_URL,
  method: "GET",
  prepareHeaders: (headers, { getState }) => {
    try {
      const state = getState() as RootState;

      if (!state) return headers;

      const token = state.user.tokens.accessToken;
      console.log(token);
      if (token) {
        console.log(token);
        headers.set("Authorization", `Bearer ${token}`);
      }
    } catch (error) {
      console.log("fetchBaseQuery", error);
    } finally {
      return headers;
    }
  },
});

export const serviceApi = createApi({
  baseQuery: baseQuery,
  tagTypes: ["pets", "tags", "users"],
  reducerPath: "api",
  refetchOnFocus: false, // true, TRUE only for production
  refetchOnReconnect: true,
  keepUnusedDataFor: 120, // default is 60
  refetchOnMountOrArgChange: 900,
  endpoints: () => ({}),
});
