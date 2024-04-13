import { serviceApi } from "./app.service";

export type Child = {
    id: number;
    createdAt: string; 
    name: string;
    email: string;
    isRegistered: boolean;
    balance: number;
};


const parentService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        getPets: builder.query<Child[] , null >({
            query: (body) => ({
                url: '/users/children',
                method: 'GET',
            }),
        }), 

    })
})

export default parentService;