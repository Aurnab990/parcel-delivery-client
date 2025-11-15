import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

interface IParcel {
  trackingId: string;
  itemName: string;
  sender: { name: string; email: string };
  receiver: { name: string; email: string };
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED" | "CANCELLED";
  pickupAddress: string;
  deliveryAddress: string;
}

// Simulated API/props
const sampleParcel: IParcel = {
  trackingId: "TRK1763136809151",
  itemName: "Tp-link Router",
  sender: { name: "Halloween Alam", email: "halloween@gmail.com" },
  receiver: { name: "Pritha Das Mouli", email: "pritha@gmail.com" },
  status: "IN_TRANSIT",
  pickupAddress: "Dhaka, Bangladesh",
  deliveryAddress: "Chittagong, Bangladesh",
};

const statusSteps = ["PENDING", "IN_TRANSIT", "DELIVERED", "CANCELLED"];

const LiveParcelState = () => {
  const [parcel, setParcel] = useState<IParcel>(sampleParcel);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Parcel Tracking
      </h1>

      <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{parcel.itemName}</CardTitle>
          <p className="text-gray-600 text-sm">Tracking ID: {parcel.trackingId}</p>
        </CardHeader>
        <CardContent>
          {/* Parcel Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-500">Sender</p>
              <p className="font-medium">{parcel.sender.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Receiver</p>
              <p className="font-medium">{parcel.receiver.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Pickup</p>
              <p className="font-medium">{parcel.pickupAddress}</p>
            </div>
            <div>
              <p className="text-gray-500">Delivery</p>
              <p className="font-medium">{parcel.deliveryAddress}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-4">
            {statusSteps.map((step, index) => {
              const isActive = statusSteps.indexOf(parcel.status) >= index;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <Badge
                    className={`${
                      isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    } w-10 h-10 flex items-center justify-center rounded-full`}
                  >
                    {index + 1}
                  </Badge>
                  <span className="text-xs mt-1 font-medium">{step.replace("_", " ")}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Status Message */}
          <div className="text-center mt-6">
            {parcel.status === "PENDING" && (
              <p className="text-yellow-600 font-semibold">Your parcel is pending pickup.</p>
            )}
            {parcel.status === "IN_TRANSIT" && (
              <p className="text-blue-600 font-semibold">Your parcel is on the way!</p>
            )}
            {parcel.status === "DELIVERED" && (
              <p className="text-green-600 font-semibold">Your parcel has been delivered.</p>
            )}
            {parcel.status === "CANCELLED" && (
              <p className="text-red-600 font-semibold">Your parcel delivery was cancelled.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveParcelState;
