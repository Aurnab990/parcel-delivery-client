import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParcelInfoQuery, useRemoveParcelMutation } from "@/redux/features/auth/parcel/parcel.api";
import { toast } from "sonner";

const Allparcels = () => {
  const { data: parcelInfo, isLoading } = useParcelInfoQuery(undefined);
  const [deleteParcel] = useRemoveParcelMutation();

  const parcels = parcelInfo?.data || [];

  const handleDelete = async(id: string) => {
    const toastId = toast.loading("Deleting........");
    try {
        const result = await deleteParcel(id).unwrap();
        if(result.success){
            toast.success("Deleted Successfully",{id: toastId});
        }
    } catch (error) {
        toast.error("Error occured");
        console.log(error);
    }

  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4">All Parcels</h1>

      <div className="rounded-xl border bg-card p-4 shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Pickup</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Sender</TableHead>
                <TableHead>Receiver</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {parcels?.map((parcel: any) => (
                <TableRow key={parcel._id}>
                  <TableCell>{parcel.itemName}</TableCell>
                  <TableCell>{parcel.pickupAddress}</TableCell>
                  <TableCell>{parcel.deliveryAddress}</TableCell>
                  <TableCell>{parcel.price} BDT</TableCell>

                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{parcel.sender?.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {parcel.sender?.email}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{parcel.receiver?.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {parcel.receiver?.email}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Badge
                      className={
                        parcel.status === "PENDING"
                          ? "bg-yellow-500 text-black"
                          : parcel.status === "DELIVERED"
                          ? "bg-green-600"
                          : parcel.status === "CANCELLED"
                          ? "bg-red-600"
                          : ""
                      }
                    >
                      {parcel.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(parcel._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {parcels.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6">
                    No parcels found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Allparcels;
