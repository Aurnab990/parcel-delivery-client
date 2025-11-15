import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useParcelInfoQuery } from "@/redux/features/auth/parcel/parcel.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { IParcel } from "@/types/parcel.type";

const Analytics = () => {
  const { data: parcelInfo, isLoading } = useParcelInfoQuery(undefined);
  const { data: userInfo } = useUserInfoQuery(undefined);

  const user = userInfo?.data;
  const parcels = parcelInfo?.data || [];

  if (isLoading) return <p className="p-6">Loading...</p>;

  const totalReceived = parcels.filter(
      (p: IParcel) => p.status.toUpperCase() === "DELIVERED"
    ).length;
    const totalCancelled = parcels.filter(
      (p: IParcel) => p.status.toUpperCase() === "CANCELED"
    ).length;
    const totalPending = parcels.filter(
      (p: IParcel) => p.status.toUpperCase() === "PENDING"
    ).length;

  const overviewItems = [
    {
      title: "Receivable Parcels",
      value: totalPending,
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      title: "Delivered Parcels",
      value: totalReceived,
      color: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      title: "Canceled Parcels",
      value: totalCancelled,
      color: "bg-purple-100",
      textColor: "text-purple-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        Your Parcel Analytics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-4xl font-bold text-gray-800">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Latest Parcel Activity */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Parcels
        </h2>

        <div className="space-y-3">
          {parcels
            .filter((p: IParcel) => p.receiver?.email === user?.email)
            .slice(0, 5)
            .map((p: IParcel) => (
              <Card key={p._id} className="p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{p.itemName}</p>
                    <p className="text-sm text-gray-500">
                      From: {p.sender?.name || "Unknown"}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      p.status === "PENDING"
                        ? "bg-yellow-200 text-yellow-700"
                        : p.status === "DELIVERED"
                        ? "bg-green-200 text-green-700"
                        : "bg-purple-200 text-purple-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
