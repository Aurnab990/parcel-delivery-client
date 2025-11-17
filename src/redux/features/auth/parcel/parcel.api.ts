import { baseApi } from "@/redux/baseApi";

const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcels/create-parcel",
        method: "POST",
        data: parcelInfo,
      }),
    }),

    parcelInfo: builder.query({
      query: () => ({
        url: "/parcels/me",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
    }),

    removeParcel: builder.mutation({
      query: (id) => ({
        url: `parcels/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PARCEL"],
    }),

    updateParcelStatus: builder.mutation({
      query: (id) => ({
        url: `/parcels/receiver/update/${id}`,
        method: "PATCH",
        data: { status: "DELIVERED" },
      }),
      invalidatesTags: ["PARCEL"]
    }),
    trackingParcel: builder.query({
      query: (trackingId) => ({
        url: `/parcels/tracking/${trackingId}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useAddParcelMutation,
  useParcelInfoQuery,
  useRemoveParcelMutation,
  useTrackingParcelQuery,
  useUpdateParcelStatusMutation
} = parcelApi;
