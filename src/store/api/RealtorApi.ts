import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const RealtorApi = createApi({
  reducerPath: 'RealtorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://realtor16.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '569fda8c1bmsha9508d0ee504b01p17557ejsn6edd5ed6df25'),
        headers.set('X-RapidAPI-Host', 'realtor16.p.rapidapi.com')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllHomes: builder.query({
      query: (location) => ({
        url: '/forsale',
        params: {
          location,
        }
      })
    })
  }),
})


export const { useGetAllHomesQuery } = RealtorApi