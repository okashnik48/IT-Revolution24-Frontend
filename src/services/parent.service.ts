import { serviceApi } from "./app.service";

type Child = {
    id: number;
    email: string;
    name: string;
    newMessages: string[];
    password: string;
    alivePetsCount: number;
    balance: number;
    starvingPetsCount: number;
};


const parentService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        getChildrens: builder.query<Child[] , null >({
            query: (body) => ({
                url: '/users/children',
                method: 'GET',
            }),
        }), 
    })
})

export default parentService;