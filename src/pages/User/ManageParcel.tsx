import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Package, MapPin, Truck, Hash } from "lucide-react";
import { useParcelInfoQuery } from "@/redux/features/auth/parcel/parcel.api";

const ManageParcel = () => {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const user = userInfo?.data;

  const { data: parcelInfo, isLoading } = useParcelInfoQuery(undefined);
  const parcelData = parcelInfo?.data || [];

  if (isLoading) return <p className="text-center py-12">Loading parcels...</p>;

  const receivableParcels = parcelData.filter(
    (parcel: any) => parcel.receiver.email === user?.email
  );

  const sendingParcels = parcelData.filter(
    (parcel: any) => parcel.sender.email === user?.email
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6">
      <Card className="w-full lg:w-1/2 shadow-xl rounded-2xl border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Receivable Parcels</CardTitle>
          <Badge variant="outline">{receivableParcels.length}</Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          {receivableParcels.length === 0 && (
            <p className="text-gray-500 text-center py-4">No parcels to receive.</p>
          )}

          {receivableParcels.map((parcel: any) => (
            <Card key={parcel._id} className="p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-500" />
                    {parcel.itemName}
                  </h2>

                  <p className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                    <Hash className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Tracking ID:</span> {parcel.trackingId}
                  </p>

                  <div className="text-sm text-gray-600 mt-2">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      Pickup: {parcel.pickupAddress}
                    </p>
                    <p className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-orange-500" />
                      Delivery: {parcel.deliveryAddress}
                    </p>

                    <p className="mt-1">
                      Sender:
                      <span className="font-medium"> {parcel.sender.name}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge
                    className={
                      parcel.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }
                  >
                    {parcel.status}
                  </Badge>

                  {parcel.status === "PENDING" && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Receive
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card className="w-full lg:w-1/2 shadow-xl rounded-2xl border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">Sending Parcels</CardTitle>
          <Badge variant="outline">{sendingParcels.length}</Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          {sendingParcels.length === 0 && (
            <p className="text-gray-500 text-center py-4">No parcels sent yet.</p>
          )}

          {sendingParcels.map((parcel: any) => (
            <Card key={parcel._id} className="p-4 rounded-xl shadow-sm border">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <Package className="w-5 h-5 text-green-600" />
                    {parcel.itemName}
                  </h2>

                  <p className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                    <Hash className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Tracking ID:</span> {parcel.trackingId}
                  </p>

                  <div className="text-sm text-gray-600 mt-2">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-500" />
                      Pickup: {parcel.pickupAddress}
                    </p>
                    <p className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-orange-500" />
                      Delivery: {parcel.deliveryAddress}
                    </p>

                    <p className="mt-1">
                      Receiver:
                      <span className="font-medium"> {parcel.receiver.name}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge
                    className={
                      parcel.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  >
                    {parcel.status}
                  </Badge>

                  {parcel.status === "PENDING" && (
                    <Button className="cursor-pointer bg-green-500" size="sm" variant="destructive">
                      UPDATE
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageParcel;
