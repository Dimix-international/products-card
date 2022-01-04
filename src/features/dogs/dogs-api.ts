import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

interface Breed {
    id: string;
    name: string;
    image: {
        url: string
    }
}

const DOGS_API_KEY = '0cfe7610-a26e-42b4-a539-da6551be5f0b';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);
            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number|void>({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
});

export const {useFetchBreedsQuery} = apiSlice;
