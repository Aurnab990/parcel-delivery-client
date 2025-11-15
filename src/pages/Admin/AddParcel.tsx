import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAddParcelMutation } from "@/redux/features/auth/parcel/parcel.api"
import { toast } from "sonner"

const AddParcel = () => {
  const [ AddParcel ] = useAddParcelMutation(undefined);

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const parcelInfo= {
      itemName: formData.get("itemName"),
      pickupAddress: formData.get("pickupAddress"),
      deliveryAddress: formData.get("deliveryAddress"),
      price: formData.get("price"),
      receiverEmail: formData.get("email") 
  }
  console.log(parcelInfo);
  try {
    const result = await AddParcel(parcelInfo).unwrap();
    console.log("Parcel created successfully", result);
    toast.success("Parcel created successfully");
  } catch (error) {
    console.log(error);
    toast.error("Something is wrong, try again");
  }
}


  return (
    <div className="flex justify-center mb:-mt-1 lg:-mt-8 items-center min-h-screen">
      <Card className="w-full max-w-3xl shadow-xl border-0 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Add New Parcel
          </CardTitle>
          <p className="text-gray-500 text-sm mt-1">Enter details to create a new delivery order</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Row 1: Parcel Title & Receiver Name */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <Label htmlFor="parcelTitle" className="font-medium text-gray-700">
                  Parcel Title
                </Label>
                <Input
                  name="itemName"
                  id="parcelTitle"
                  placeholder="e.g. Electronics Package"
                  className="mt-1"
                />
              </div>
              <div className="flex flex-col flex-1">
                <Label htmlFor="receiverName" className="font-medium text-gray-700">
                  Receiver Email
                </Label>
                <Input
                  name="email"
                  id="receiverEmail"
                  placeholder="email should be a valid user"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Row 2: Pickup & Delivery Addresses */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col flex-1">
                <Label htmlFor="pickupAddress" className="font-medium text-gray-700">
                  Pickup Address
                </Label>
                <Input
                  name="pickupAddress"
                  id="pickupAddress"
                  placeholder="e.g. 123 Market Street"
                  className="mt-1"
                />
              </div>
              <div className="flex flex-col flex-1">
                <Label htmlFor="deliveryAddress" className="font-medium text-gray-700">
                  Delivery Address
                </Label>
                <Input
                  name="deliveryAddress"
                  id="deliveryAddress"
                  placeholder="e.g. 456 Elm Avenue"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Row 3: Price */}
            <div className="flex flex-col md:w-1/2">
              <Label htmlFor="price" className="font-medium text-gray-700">
                Price
              </Label>
              <Input
                name="price"
                id="price"
                type="number"
                placeholder="Enter price"
                className="mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="px-8 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 transition rounded-lg cursor-pointer"
              >
                Add Parcel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddParcel
