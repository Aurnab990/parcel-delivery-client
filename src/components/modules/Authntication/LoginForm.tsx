import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      const result = await login(data).unwrap();
      if (result.success) {
        toast.success("Login successfully");
        navigate("/");
      }
    } catch (err: any) {
      // console.log(err.data.message);
      if ((err?.data?.message === "Something went wrong: Error: Password Incorrect")) {
        toast.error("Password does not match");
      }
      if((err?.data?.message === "Something went wrong: Error: User Not registered")){
        toast.error("Email not found");
      } else{
        toast.error("Something went wrong, try again");
      }
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <span>
          Don't have an Account?{" "}
          <Link className="text-red-900 underline" to={"/user-register"}>
            Register
          </Link>
        </span>

        <Button
          type="submit"
          className="w-full bg-white text-orange-600 font-bold hover:bg-orange-50 cursor-pointer"
        >
          LOGIN
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
