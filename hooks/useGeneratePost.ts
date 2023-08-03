import { generateImage } from "@/services/apiGenerateImage";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/router";

export function useGenerateImage() {
  const router = useRouter();
  const { mutate, isLoading, error, data } = useMutation({
    mutationKey: ["generateImage"],
    mutationFn: ({ prompt, apiKey }: { prompt: string; apiKey: string }) =>
      generateImage(prompt, apiKey),
    onSuccess: () => {
      console.log("success");
      router.replace("/");
    },
  });
  return { mutate, isLoading, error, data };
}
