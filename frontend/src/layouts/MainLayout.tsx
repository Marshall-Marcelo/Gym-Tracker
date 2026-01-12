import { Outlet } from "react-router-dom";
import Header from "@/features/navigation/Header";
import { useIsMobile } from "@/hooks/useIsMobile";

const MainLayout = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <main className="grid place-items-center w-full h-full bg-gray-50">
          <Header />
          <div className="w-full max-w-175 mt-12">
            <section className="flex flex-col gap-2 px-8 py-4">
              <Outlet />
            </section>
          </div>
        </main>
      ) : (
        <main></main>
      )}
    </>
  );
};

export default MainLayout;
