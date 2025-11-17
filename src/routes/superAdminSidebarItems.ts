import AddParcel from "@/pages/Admin/AddParcel";
import Allparcels from "@/pages/SuperAdmin/Allparcels";
import Allusers from "@/pages/SuperAdmin/Allusers";
import ParcelOverview from "@/pages/SuperAdmin/ParcelOverview";

export const superAdminSiderbarItems = [
    {
      title: "Parcels",
      url: "#",
      items: [
        {
          title: "Add Parcel",
          url: "/super_admin/add-parcel",
          component: AddParcel
        },
        {
          title: "Manage Parcels",
          url: "/super_admin/all-parcels",
          component: Allparcels
         
        },
        {
          title: "Overview",
          url: "/super_admin/parcel-overview",
          component: ParcelOverview
        },
        
      ],
    },
    {
      title: "Users",
      url: "#",
      items: [
        {
          title: "Users Management",
          url: "/super_admin/all-users",
          component: Allusers
        }
      ],
    }
]