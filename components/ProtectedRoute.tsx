import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoadingUser } = useUser();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/login");
  }, [isAuthenticated, router]);

  if (isLoadingUser) return null;

  if (isAuthenticated) return children;
}
export default ProtectedRoute;
