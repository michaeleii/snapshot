import { useMutation } from "@tanstack/react-query";
import { signUp } from "../services/apiAuth";
import { useRouter } from "next/router";

export function useSignUp() {
  const router = useRouter();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => signUp(username, email, password),
    onSuccess: () => {
      router.replace("/");
    },
  });
  return { mutate, isLoading, error };
}
