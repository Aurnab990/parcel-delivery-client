import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { superAdminSiderbarItems } from "@/routes/superAdminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) =>{
    switch(userRole){
        case role.superAdmin:
            return [...superAdminSiderbarItems];
        case role.admin:
            return [...adminSidebarItems];
        case role.user:
            return [...userSidebarItems];
        default:
            return []    
    }
}