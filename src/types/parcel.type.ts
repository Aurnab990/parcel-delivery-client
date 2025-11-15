export interface IParcel {
  _id: string;
  itemName: string;
  pickupAddress: string;
  deliveryAddress: string;
  price: number;
  receiver: {
    _id: string;
    name: string;
    email: string;
  };
  sender: {
    _id: string;
    name: string;
    email: string;
  };
  status: "PENDING" | "DELIVERED" | "CANCELLED" | "RECEIVED";
  trackingId: string;
  createdAt: string;
  updatedAt: string;
}
