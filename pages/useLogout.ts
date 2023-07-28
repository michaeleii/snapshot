import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../services/apiAuth";
import { useRouter } from "next/router";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/");
    },
  });
  return { mutate, isLoading, error };
}
