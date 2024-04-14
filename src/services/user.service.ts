import { toast } from "react-toastify";
import { serviceApi } from "./app.service";

type InfoForRegistration = {
  username: string;
  password: string;
  email: string;
  role: "parent" | "child";
};

type InfoForLogin = {
  username: string;
  password: string;
};

export type UserProps = {
  id: number;
  createdAt: Date;
  name: string;
  email: string;
  isRegistered: boolean;
  role: "parent" | "child" | "";
  balance?: number;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

const userService = serviceApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ Tokens: Tokens }, InfoForLogin>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, api) {
        api.queryFulfilled.catch((data) => {
          toast.error("data");
        });
      },
    }),
    registration: builder.mutation<{ Tokens: Tokens }, InfoForRegistration>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, api) {
        api.queryFulfilled.catch((data) => {
          toast.error("data");
        });
      },
    }),
    getUserInfo: builder.query<UserProps, null>({
      query: (body) => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["users"],
    }),
    verifyCode: builder.mutation<null, number>({
      query: (body) => ({
        url: "/auth/code",
        method: "POST",
        body: { code: body },
      }),
    }),
    refreshTokens: builder.mutation<null, string>({
      query: (body) => ({
        url: "/auth/refresh_token",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export default userService;
