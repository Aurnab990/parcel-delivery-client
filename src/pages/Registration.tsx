import RegisterForm from "@/components/modules/Authntication/RegisterForm";

const Registration = () => {
  
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen overflow-hidden bg-orange-100 px-4 lg:px-20">
      
      {/* === LEFT SIDE: Big Text Section === */}
      <div className="flex-1 flex justify-center items-center text-center relative z-0 mb-10 lg:mb-0">
        <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-orange-600 opacity-20 select-none leading-tight">
          REGISTER <br />
          FOR QUICK AND FAST DELIVERY
        </h1>
      </div>

      {/* === RIGHT SIDE: Form Section === */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="w-[400px] md:w-[450px] lg:w-[500px] bg-orange-500 text-white font-bold rounded-xl shadow-xl p-8">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
