import RegisterForm from "@/components/modules/Authntication/RegisterForm";

const Registration = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen overflow-hidden bg-orange-50 px-4 lg:px-20">

      <div className="flex-1 flex justify-center items-center text-center relative z-0 mb-10 lg:mb-0">
        <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-orange-300 opacity-20 select-none leading-tight">
          REGISTER <br />
          FOR QUICK AND FAST DELIVERY
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="w-[400px] md:w-[450px] lg:w-[500px] bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">
            Create Account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sign up to start managing your parcels quickly and safely
          </p>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
