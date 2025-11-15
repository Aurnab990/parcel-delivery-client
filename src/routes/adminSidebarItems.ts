import AddParcel from "@/pages/Admin/AddParcel";
import Analytics from "@/pages/Admin/Analytics";

export const adminSidebarItems = [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component: Analytics
        },
        {
          title: "Parcel Overciew",
          url: "#",
          component: AddParcel
        },
      ],
    },
    {
      title: "Parcels",
      url: "#",
      items: [
        {
          title: "Add Parcel",
          url: "/admin/add-parcel",
          component: AddParcel
        },
        {
          title: "Manage Parcels",
          url: "#",
          component: AddParcel
        },
        {
          title: "Parcels Overview",
          url: "#",
          component: AddParcel
        },
        
      ],
    },
    {
      title: "Users",
      url: "#",
      items: [
        {
          title: "Users Management",
          url: "#",
          component: AddParcel
        }
      ],
    }
]