import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/apiPost";
import { useRouter } from "next/router";

export function useCreatePost() {
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (image: File) => createPost(image),
    onSuccess: () => {
      router.replace("/");
    },
  });
  return { mutate, isLoading };
}
