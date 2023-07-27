import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

function MainNav() {
  return (
    <nav className="p-5 xl:border-r xl:border-b-0 border-b xl:min-h-screen flex flex-col">
      <Logo />
      <div className="flex xl:flex-col gap-2 mt-auto mb-5">
        <Button asChild className="w-full">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
}
export default MainNav;
