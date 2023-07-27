import MainNav from "./MainNav";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr]">
      <MainNav />
      {children}
    </div>
  );
}
export default MainLayout;
