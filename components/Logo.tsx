import { CameraIcon } from "@heroicons/react/20/solid";

function Logo() {
  return (
    <h1 className="flex items-center justify-center gap-2 font-bold tracking-tighter xl:gap-5 p-5">
      <CameraIcon className="h-10 w-10 xl:h-12 xl:w-12" fill="bg-primary" />

      <span className="text-5xl tracking-tighter text-primary font-bold">
        Snapshot
      </span>
    </h1>
  );
}
export default Logo;
