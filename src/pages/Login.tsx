import LoginForm from "@/components/modules/Authntication/LoginForm";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 px-4">
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Welcome Back
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Login to manage your parcels quickly and securely
        </p>
        <LoginForm />
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors text-gray-800 font-medium"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
