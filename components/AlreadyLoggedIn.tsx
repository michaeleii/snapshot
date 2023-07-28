import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AlreadyLoggedIn({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoadingUser } = useUser();

  useEffect(() => {
    if (isAuthenticated) router.replace("/");
  }, [isAuthenticated, router]);

  if (isLoadingUser) return null;

  if (!isAuthenticated) return children;
}
export default AlreadyLoggedIn;
