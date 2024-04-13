import { serviceApi } from "./app.service";

type InfoForRegistration = {
    username: string;
    password: string;
    email: string;
    role: "parent" | "child" ; 
}

type InfoForLogin = {
    username: string;
    password: string; 
}

export type User = {
    id: number;
    createdAt: Date;
    name: string;
    email: string;
    isRegistered: boolean;
    role: "parent" | "child" | ""
};

export type Tokens = {
    accessToken: string;
    refreshToken: string;
};

export type LoginReply = {
    tokens: Tokens;
    user: User;
}
const userService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginReply , InfoForLogin >({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body: body
            }),
        }), 
        registration: builder.mutation<LoginReply , InfoForRegistration >({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body: body
            }),
        }),
        verifyCode: builder.mutation<null , number >({
            query: (body) => ({
                url: '/auth/code',
                method: 'POST',
                body: {code: body}
            }),
        }), 
        refreshTokens: builder.mutation<null , string >({
            query: (body) => ({
                url: '/auth/refresh_token',
                method: 'POST',
                body: body
            }),
        }), 

    })
})

export default userService;