import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const apiSlice = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({baseUrl : "/api"}),
    endpoints : (builder) => ({
        createMeeting : builder.mutation({
            query : (formData) => ({
                url : "/meeeting/create",
                method : "POST",
                body : formData,
            })
        })
    })
})

export const {useCreateMeetingMutation} = apiSlice;

export default apiSlice;