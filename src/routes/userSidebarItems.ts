import AddParcel from "@/pages/Admin/AddParcel";
import TrackingParcel from "@/pages/User/TrackingParcel";
import { lazy } from "react";
const Analytics = lazy(()=> import("@/pages/Admin/Analytics"));
const ManageParcel = lazy(()=> import("@/pages/User/ManageParcel"));
const UserProfile = lazy(()=> import("@/pages/User/UserProfile"));

export const userSidebarItems = [
    
    {
      title: "Parcels",
      url: "#",
      items: [
          {
          title: "Profile",
          url: "/user/profile",
          component: UserProfile
        },
        {
          title: "Add Parcel",
          url: "/user/add-parcel",
          component: AddParcel
        },
        {
          title: "Manage Parcels",
          url: "/user/manage-parcel",
          component: ManageParcel
         
        },
        {
          title: "Parcels Overview",
          url: "/user/parcel-overview",
          component: Analytics
        },
        {
          title: "Track your Percel",
          url: "/user/tracking",
          component: TrackingParcel
        },
        
      ],
    }
]