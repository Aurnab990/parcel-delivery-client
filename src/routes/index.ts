import App from "@/App";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router";
import Registration from "@/pages/Registration";
import Login from "@/pages/Login";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { generateRoutes } from "@/utlis/generateRoutes";
import { userSidebarItems } from "./userSidebarItems";
import { adminSidebarItems } from "./adminSidebarItems";
import { superAdminSiderbarItems } from "./superAdminSidebarItems";
export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: About,
                path: "about"
            }
        ]
    },
    {
        Component: DashboardLayout,
        path: "/super_admin",
        children: [
            ...generateRoutes(superAdminSiderbarItems)
        ]
    },
    {
        Component: DashboardLayout,
        path: "/admin",
        children: [
            ...generateRoutes(adminSidebarItems)
        ]
    },
    {
        Component: DashboardLayout,
        path: "/user",
        children: [
            ...generateRoutes(userSidebarItems)
        ]
    },
    {
        Component: Registration,
        path: "user-register"
    },
    {
        Component: Login,
        path: "login"
    }
])