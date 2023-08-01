import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { useUser } from "@/contexts/UserContext";
import { useLogout } from "@/hooks/useLogout";
import { Drawer } from "vaul";

import { Settings } from "lucide-react";
import SettingsForm from "@/pages/settings";

function MainNav() {
  const { currentUser, isAuthenticated } = useUser();

  const { mutate: logout, isLoading: isLoggingOut } = useLogout();

  return (
    <Drawer.Root>
      <nav className="p-5 xl:p-10 xl:border-r xl:border-b-0 border-b xl:min-h-screen flex flex-col relative">
        <div className="absolute right-2 top-2 block xl:hidden">
          <ModeToggle />
        </div>
        {isAuthenticated && (
          <div className="absolute left-2 top-2 block xl:hidden">
            {/* <Button asChild variant="ghost" className="w-full xl:hidden">
            <Link href="/settings">
              <Settings />
            </Link>
          </Button> */}
            <Drawer.Trigger asChild>
              <Button variant="ghost" className="xl:hidden w-full">
                <Settings />
              </Button>
            </Drawer.Trigger>
          </div>
        )}
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

            <Drawer.Trigger asChild>
              <Button className="hidden xl:block">Settings</Button>
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-background flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
                <div className="p-4 bg-background rounded-t-[10px] flex-1">
                  <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-primary mb-8 bg-zinc-400" />
                  <div className="max-w-md mx-auto">
                    <SettingsForm />
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>

            {/* <Button variant="outline" asChild className="w-full hidden xl:flex">
            <Link href="/settings">Settings</Link>
          </Button> */}
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
    </Drawer.Root>
  );
}
export default MainNav;
