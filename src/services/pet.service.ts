import { serviceApi } from "./app.service";

interface Fish {
    id: number;
    type: string;
    sex: string;
    satiety: number;
    loveMeter: number;
    cost: number;
    userId: number;
}


const petService = serviceApi.injectEndpoints({
    endpoints: (builder) => ({
        getPets: builder.query<Fish[] , null >({
            query: (body) => ({
                url: '/pets',
                method: 'GET',
            }),
        }), 
        sellPet: builder.mutation<null , {petId: string } >({
            query: (body) => ({
                url: '/pets/sell',
                method: 'POST',
                body: body
            }),
        }),
    })
})

export default petService;