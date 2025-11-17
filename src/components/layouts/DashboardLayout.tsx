import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Outlet, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";

const DashboardLayout = () => {
  const { data: userData } = useUserInfoQuery(undefined);
  const [ logout ] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = userData?.data?.role || "User";

  const handleLogout = async() =>{
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
    navigate("/");
    toast("Logout Successfully");
  }


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white/70 backdrop-blur-md px-6 shadow-sm">
          
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="h-5 bg-gray-300"
            />
            <h1 className="text-xl font-semibold text-gray-800">
              Welcome to{" "}
              <span className="text-green-500">{role} Dashboard</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
            onClick={handleLogout}
              variant="destructive"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-6 bg-gray-50/50">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
