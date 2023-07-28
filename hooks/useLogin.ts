import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/apiAuth";
import { useRouter } from "next/router";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]).catch((err) => console.log(err));
      router.replace("/");
    },
  });
  return { mutate, isLoading, error };
}
