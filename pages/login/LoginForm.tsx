import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import Logo from "@/components/Logo";
import { useLogin } from "@/hooks/useLogin";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" }),
});

type FormData = z.infer<typeof formSchema>;

function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    isLoading: isLoggingIn,
    mutate: login,
    error: loginError,
  } = useLogin();
  const onSubmit = (values: FormData) => login(values);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 px-5 xl:px-20"
      >
        <h1 className="mb-5 font-bold text-3xl text-center">Login</h1>
        {loginError instanceof Error && (
          <FormMessage className="text-center">
            {loginError.message}
          </FormMessage>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled={isLoggingIn} />
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
                <Input type="password" {...field} disabled={isLoggingIn} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoggingIn}>
          {isLoggingIn ? "Logging In..." : "Login"}
        </Button>
      </form>
    </Form>
  );
}
export default LoginForm;
