import AlreadyLoggedIn from "../AlreadyLoggedIn";
import Image from "next/image";
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AlreadyLoggedIn>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {children}
        <div className="relative">
          <Image
            src="/test-post.jpg"
            alt=""
            fill
            className="hidden object-cover xl:block"
          />
        </div>
      </div>
    </AlreadyLoggedIn>
  );
}
export default AuthLayout;
