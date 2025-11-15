import type { ComponentType } from "react";

export type { ILogin } from "@/types/auth.type";

export interface ISidebarItem{
    title: string,
    url: string,
    items: {
        title: string,
        url: string,
        component: ComponentType;
    }[]
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "USER";