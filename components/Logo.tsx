import { CameraIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function Logo() {
  return (
    <Link
      className="flex items-center justify-center gap-2 font-bold tracking-tighter xl:gap-5 text-primary m-5"
      href="/"
    >
      <CameraIcon className="h-10 w-10 xl:h-12 xl:w-12 fill-primary" />

      <span className="text-5xl tracking-tighter">Snapshot</span>
    </Link>
  );
}
export default Logo;
