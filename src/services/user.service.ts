import { serviceApi } from "./app.service";

type InfoForRegistration = {
    phone: string;
    username: string
}

type Token = {
    token: string;
}

const userService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        userInfo: builder.query<string , string >({
            query: () => ({
                url: 'users/me',
                method: 'GET',
            }),
        }),
        registration: builder.mutation<null , InfoForRegistration >({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body: body
            }),
        }),

        verify: builder.query<Token , null >({
            query: (id) => ({
                url: `auth/verify/${id}`,
                method: 'GET',
            }),
        }),

    })
})

export default userService;