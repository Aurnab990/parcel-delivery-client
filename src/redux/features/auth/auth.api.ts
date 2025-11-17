import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/auth/register",
                method: "POST",
                data: userInfo
            }),
        }),
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            }),
            invalidatesTags: ["USER"]
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["USER"]
        }),
        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ["USER"]
        }),
        allUser: builder.query({
            query: () =>({
                url: "/user/all-users",
                method: "GET",
            }),
            providesTags: ["USER"]
        }),
        removerUser: builder.mutation({
            query: (userId)=>({
                url: `/user/delete/${userId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["USER"]
        }),
        updateUserRole: builder.mutation({
            query: (id)=>({
                url: `/user/role/${id}`,
                method: "PATCH",
                data: {role: "ADMIN"}
            }),
            invalidatesTags: ["USER"]
        })
    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useUserInfoQuery, useAllUserQuery, useUpdateUserRoleMutation, useRemoverUserMutation } = authApi;