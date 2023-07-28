import AlreadyLoggedIn from "../AlreadyLoggedIn";
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AlreadyLoggedIn>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        {children}
        <img
          src="/test-post.jpg"
          alt=""
          className="hidden h-screen w-full object-cover xl:block"
        />
      </div>
    </AlreadyLoggedIn>
  );
}
export default AuthLayout;
