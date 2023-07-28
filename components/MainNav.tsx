import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@/contexts/UserContext";
import { useLogout } from "@/pages/useLogout";

function MainNav() {
  const { currentUser, isAuthenticated } = useUser();

  return (
    <nav className="p-5 xl:border-r xl:border-b-0 border-b xl:min-h-screen flex flex-col relative">
      <div className="absolute right-2 top-2 block xl:hidden">
        <ModeToggle />
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
        <div className="flex xl:flex-col gap-2 mt-auto mb-5">
          <Image
            src="/default-user.jpg"
            alt=""
            width={300}
            height={300}
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
          <Button variant="outline" className="w-full">
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
export default MainNav;
