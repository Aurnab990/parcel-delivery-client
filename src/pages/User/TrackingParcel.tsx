import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrackingParcelQuery } from "@/redux/features/auth/parcel/parcel.api";
import { Package, MapPin, Truck, Hash } from "lucide-react";

const statusColors: any = {
  PENDING: "bg-yellow-100 text-yellow-700",
  "IN TRANSIT": "bg-blue-100 text-blue-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

const TrackingParcel = () => {
  const [trackingId, setTrackingId] = useState("");
  const [submittedId, setSubmittedId] = useState("");

  const { data, isFetching, error } = useTrackingParcelQuery(submittedId, {
    skip: !submittedId,
  });

  const parcel = data?.data;

  const handleSearch = () => {
    if (trackingId.trim() !== "") setSubmittedId(trackingId);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-center">Parcel Tracking</h1>

      {/* SEARCH BOX */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Track Your Parcel</CardTitle>
        </CardHeader>

        <CardContent className="flex gap-3">
          <Input
            placeholder="Enter tracking ID..."
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
          />
          <Button onClick={handleSearch} className="px-6">
            Search
          </Button>
        </CardContent>
      </Card>

      {/* LOADING */}
      {isFetching && <p className="text-center">Searching...</p>}

      {/* ERROR */}
      {error && submittedId && (
        <p className="text-center text-red-600 font-medium">
          No parcel found for this Tracking ID.
        </p>
      )}

      {/* RESULT */}
      {parcel && (
        <Card className="shadow-lg border rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-6 h-6 text-blue-500" />
              {parcel.itemName}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            {/* Tracking ID */}
            <p className="flex items-center gap-2 text-sm">
              <Hash className="w-4 h-4 text-purple-600" />
              <span className="font-medium">Tracking ID:</span> {parcel.trackingId}
            </p>

            {/* Status */}
            <Badge className={`${statusColors[parcel.status]} text-sm px-4 py-1`}>
              {parcel.status}
            </Badge>

            {/* TIMELINE */}
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Delivery Progress</h3>

              <div className="space-y-4">
                {/* PENDING */}
                <Step
                  label="Pending"
                  active={["PENDING", "IN TRANSIT", "DELIVERED"].includes(parcel.status)}
                />

                {/* IN TRANSIT */}
                <Step
                  label="In Transit"
                  active={["IN TRANSIT", "DELIVERED"].includes(parcel.status)}
                />

                {/* DELIVERED */}
                <Step
                  label="Delivered"
                  active={parcel.status === "DELIVERED"}
                />

                {/* CANCELLED */}
                {parcel.status === "CANCELLED" && (
                  <Step label="Cancelled" active={true} canceled />
                )}
              </div>
            </div>

            {/* ADDRESSES */}
            <div className="mt-4 space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <strong>Pickup:</strong> {parcel.pickupAddress}
              </p>

              <p className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-orange-500" />
                <strong>Delivery:</strong> {parcel.deliveryAddress}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

// TIMELINE STEP COMPONENT
const Step = ({
  label,
  active,
  canceled,
}: {
  label: string;
  active: boolean;
  canceled?: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div
      className={`w-4 h-4 rounded-full border-2 ${
        canceled
          ? "border-red-500 bg-red-500"
          : active
          ? "border-green-600 bg-green-600"
          : "border-gray-400"
      }`}
    ></div>
    <span
      className={`text-sm ${
        canceled ? "text-red-700" : active ? "text-green-700" : "text-gray-500"
      }`}
    >
      {label}
    </span>
  </div>
);

export default TrackingParcel;
