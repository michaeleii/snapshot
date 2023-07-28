import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@/contexts/UserContext";
import { useLogout } from "@/hooks/useLogout";

import { Settings } from "lucide-react";

function MainNav() {
  const { currentUser, isAuthenticated } = useUser();
  const { mutate: logout, isLoading: isLoggingOut } = useLogout();

  return (
    <nav className="p-5 xl:p-10 xl:border-r xl:border-b-0 border-b xl:min-h-screen flex flex-col relative">
      <div className="absolute right-2 top-2 block xl:hidden">
        <ModeToggle />
      </div>
      <div className="absolute left-2 top-2 block xl:hidden">
        <Button asChild variant="ghost" className="w-full xl:hidden">
          <Link href="/settings">
            <Settings />
          </Link>
        </Button>
      </div>
      <div className="p-5">
        <Logo />
      </div>
      {!isAuthenticated && (
        <div className="flex xl:flex-col gap-2 mt-auto mb-5">
          <Button asChild className="w-full">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
      {isAuthenticated && currentUser && (
        <div className="hidden xl:flex xl:flex-col gap-2 mt-8 mb-5 mx-auto items-center">
          <Image
            src="/default-user.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full object-cover object-center"
          />
          <span>{currentUser.username}</span>
        </div>
      )}
      {isAuthenticated && (
        <div className="flex xl:flex-col gap-2 mt-auto mb-5">
          <Button asChild className="w-full">
            <Link href="/upload">Create Post</Link>
          </Button>
          <Button variant="outline" asChild className="w-full hidden xl:flex">
            <Link href="/settings">Settings</Link>
          </Button>
          <Button
            variant="outline"
            className="w-full"
            disabled={isLoggingOut}
            onClick={() => logout()}
          >
            {isLoggingOut ? "Logging out" : "Logout"}
          </Button>
        </div>
      )}
    </nav>
  );
}
export default MainNav;
