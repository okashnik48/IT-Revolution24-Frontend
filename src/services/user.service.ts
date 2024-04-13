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

export type UserProps = {
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



const userService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{tokens: Tokens} , InfoForLogin >({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body: body
            }),
        }), 
        registration: builder.mutation<{tokens: Tokens} , InfoForRegistration >({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body: body
            }),
        }),
        getUserInfo: builder.query<UserProps ,null >({
            query: (body) => ({
                url: '/users/me',
                method: 'GET',
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