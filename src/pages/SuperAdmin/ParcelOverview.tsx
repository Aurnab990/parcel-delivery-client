import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAllUserQuery } from "@/redux/features/auth/auth.api";
import { useParcelInfoQuery } from "@/redux/features/auth/parcel/parcel.api";
import type { IParcel } from "@/types/parcel.type";

const ParcelOverview = () => {
  const { data, isLoading } = useParcelInfoQuery(undefined);
  const { data: userData } = useAllUserQuery(undefined);

  const parcels = data?.data || [];
  console.log(parcels.status);
  const users = userData?.data || [];

  const today = new Date();
  const todayISO = today.toISOString().split("T")[0];
  const totalParcel = parcels.length;
  const totalUsers = users.length;
  const todaysParcel = parcels.filter(
    (p: IParcel) => p.createdAt.slice(0, 10) === todayISO
  ).length;

  const totalReceived = parcels.filter(
    (p: IParcel) => p.status.toUpperCase() === "DELIVERED"
  ).length;
  const totalCancelled = parcels.filter(
    (p: IParcel) => p.status.toUpperCase() === "CANCELED"
  ).length;
  const totalPending = parcels.filter(
    (p: IParcel) => p.status.toUpperCase() === "PENDING"
  ).length;

  console.log(totalReceived);

  const overviewItems = [
    {
      title: "Total Parcels",
      value: totalParcel,
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      title: "Today's Parcels",
      value: todaysParcel,
      color: "bg-purple-100",
      textColor: "text-purple-700",
    },
    {
      title: "Total Users",
      value: totalUsers,
      color: "bg-green-100",
      textColor: "text-green-700",
    },
    { title: "Total Pending", value: totalPending, color: "bg-red-100", textColor: "text-red-700" },
    // { title: "Today's Received", value: todaysReceived, color: "bg-indigo-100", textColor: "text-indigo-700" },
    {
      title: "Total Received",
      value: totalReceived,
      color: "bg-teal-100",
      textColor: "text-teal-700",
    },
    {
      title: "Total Cancelled",
      value: totalCancelled,
      color: "bg-pink-100",
      textColor: "text-pink-700",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Parcel Overview
      </h1>

      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-xl hover:shadow-2xl transition-all"
            >
              <CardHeader className={`${item.color} rounded-t-xl`}>
                <CardTitle className={`text-lg font-medium ${item.textColor}`}>
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-800">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParcelOverview;
