import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
// const url = "http://localhost:5056/"
const url = "https://42f4-103-93-20-138.ngrok-free.app/";


// Set and send an ngrok-skip-browser-warning request header with any value.
// Or, set and send a custom/non-standard browser User-Agent request header.

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.set('ngrok-skip-browser-warning', 'true')
      return headers
    },
  }),
  endpoints: () => ({}),
})