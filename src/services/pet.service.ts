import { serviceApi } from "./app.service";


interface Pets {
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
        getPets: builder.query<Pets[] , null >({
            query: (body) => ({
                url: '/pets',
                method: 'GET',
            }),
            invalidatesTags: ["pets"],
        }), 
        sellPet: builder.mutation<null , {petId: string } >({
            query: (body) => ({
                url: '/pets/sell',
                method: 'POST',
                body: body
            }),
            providesTags: ["pets"],
        }),
    })
})

export default petService;