import { CameraIcon } from "@heroicons/react/20/solid";

function Logo() {
  return (
    <h1 className="flex items-center justify-center gap-2 font-bold tracking-tighter xl:gap-5 p-5 text-primary">
      <CameraIcon className="h-10 w-10 xl:h-12 xl:w-12 fill-primary" />

      <span className="text-5xl tracking-tighter">Snapshot</span>
    </h1>
  );
}
export default Logo;
