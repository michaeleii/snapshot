import Logo from "./Logo";
import { Button } from "@/components/ui/button";

function MainNav() {
  return (
    <nav className="p-5 xl:border-r xl:border-b-0 border-b xl:min-h-screen flex flex-col">
      <Logo />
      <div className="flex xl:flex-col gap-2 mt-auto mb-5">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Register
        </Button>
      </div>
    </nav>
  );
}
export default MainNav;
