import registrationImage from "@/assets/images/registration-01.png";
import LoginForm from "@/components/modules/Authntication/LoginForm";


const Login = () => {

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center min-h-screen overflow-hidden bg-orange-100 px-4 lg:px-20">
      <div className="flex-1 flex justify-center items-center text-center relative z-0 mb-44">
        <h1 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold text-orange-600 opacity-20 select-none leading-tight">
          LOGIN <br />
          FOR QUICK AND FAST DELIVERY
        </h1>
      </div>
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="relative w-[400px] md:w-[450px] lg:w-[500px]">
          <img
            src={registrationImage}
            alt="parcel-delivery-image"
            className="w-full h-auto drop-shadow-xl"
          />
          <div className="absolute top-[10%] left-[20%] w-[60%] bg-orange-400 text-white font-bold rounded-xl shadow-lg p-5">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
