import { serviceApi } from "./app.service";

interface Pets {
  id: number;
  type: string;
  sex: string;
  satiety: number;
}

const petService = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    getPets: builder.query<Pets[], null>({
      query: (body) => ({
        url: "/pets",
        method: "GET",
      }),
      providesTags: ["pets"],
    }),
    sellPet: builder.mutation<null, { type: string }>({
      query: (body) => ({
        url: "/pets/sell",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["pets", 'users'],
    }),
    fidPets: builder.mutation<null, null>({
      query: (body) => ({
        url: "/pets/feed",
        method: "POST",
      }),
      invalidatesTags: ["pets", 'users'],
    }),
  }),
});

export default petService;
