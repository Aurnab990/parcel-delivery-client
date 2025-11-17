import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BadgeCheck, MapPin, Mail, Edit3 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router"

const UserProfile = () => {
  const { data } = useUserInfoQuery(undefined)
  const user = data?.data || {}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <Card className="w-full max-w-4xl shadow-2xl border border-gray-100 rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md transition-all hover:shadow-blue-200">
        <div className="relative">
          {/* Decorative banner background */}
          <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-500"></div>

          {/* Edit Button */}
          <Link to={`/user/update/${user._id}`}>
          <Button
          
            variant="secondary"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 shadow-sm backdrop-blur-md cursor-pointer"
          >
            <Edit3 className="w-4 h-4 mr-2" /> Edit Profile
          </Button>
          </Link>

          {/* Profile Header Section */}
          <CardHeader className="relative flex flex-col items-center text-center mt-[-4rem] space-y-3">
            <Avatar className="w-32 h-32 ring-8 ring-white shadow-lg">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback className="text-3xl font-semibold bg-blue-100 text-blue-700">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex items-center gap-2 mt-2">
              <CardTitle className="text-3xl font-semibold text-gray-800">
                {user.name || "User Name"}
              </CardTitle>
              {user.verified && (
                <BadgeCheck className="text-blue-600 w-6 h-6" />
              )}
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-base">
              <Mail className="w-5 h-5" />
              <span>{user.email || "user@example.com"}</span>
            </div>
          </CardHeader>
        </div>

        <CardContent className="px-10 py-8 text-center">
          {/* Address Section */}
          <div className="flex justify-center items-center gap-2 text-gray-700 text-lg mb-4">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>{user.address || "No address provided"}</span>
          </div>

          {/* Verified Status */}
          <div className="mt-4">
            <span
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium",
                user.verified
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              )}
            >
              {user.verified ? "Verified Account" : "Unverified Account"}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserProfile
