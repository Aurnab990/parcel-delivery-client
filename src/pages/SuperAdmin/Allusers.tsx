import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useAllUserQuery, useRemoverUserMutation, useUpdateUserRoleMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const Allusers = () => {
  const { data: usersInfo, isLoading } = useAllUserQuery(undefined);
  const [deleteUser] = useRemoverUserMutation();
  const [makeAdmin] = useUpdateUserRoleMutation();

  const users = usersInfo?.data || [];

  // Delete user
  const handleDeleteUser = async (userId: string) => {
    const toastId = toast.loading("Deleting user...");
    try {
      const result = await deleteUser(userId).unwrap();
      if (result.success) {
        toast.success("User deleted successfully", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  // Make Admin
  const handleMakeAdmin = async (userId: string) => {
    const toastId = toast.loading("Updating role...");
    try {
      const result = await makeAdmin(userId).unwrap();
      if (result.success) {
            toast.success("User promoted to Admin", { id: toastId });
      }
    } catch (error) {
      toast.error("Failed to make admin");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Loader2 className="animate-spin h-8 w-8 text-primary" />
      </div>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">All Users</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-medium">
                <th className="p-3">User</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Verified</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user: any) => (
                <tr key={user._id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.image} />
                      <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </td>

                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.address || "N/A"}</td>
                  <td className="p-3">{user.phone || "N/A"}</td>

                  <td className="p-3">
                    {user.isVerified ? (
                      <Badge className="bg-green-500 text-white">Verified</Badge>
                    ) : (
                      <Badge variant="destructive">Not Verified</Badge>
                    )}
                  </td>

                  <td className="p-3">
                    <Badge className="bg-blue-500 text-white">{user.role}</Badge>
                  </td>

                  <td className="p-3 flex justify-center gap-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete
                    </Button>

                    {
                    user.role !== "ADMIN"? (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleMakeAdmin(user._id)}
                      >
                        Make Admin
                      </Button>
                    ):(
                        <Button
                        variant="secondary"
                        size="sm"
                        // onClick={() => handleMakeAdmin(user._id)}
                      >
                        Remove Admin
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No users found.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Allusers;
