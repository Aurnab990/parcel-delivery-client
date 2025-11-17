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
import Feature from "@/pages/Feature";
import Home from "@/pages/Home";
import BlogSection from "@/pages/Blog";
export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        Component: Home,
        path: "home",
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Feature,
        path: "feature",
      },
      {
        Component: BlogSection,
        path: "blog",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/super_admin",
    children: [...generateRoutes(superAdminSiderbarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [...generateRoutes(userSidebarItems)],
  },
  {
    Component: Registration,
    path: "user-register",
  },
  {
    Component: Login,
    path: "login",
  },
]);
