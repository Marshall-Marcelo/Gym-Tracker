import { Outlet } from "react-router-dom";
import { Footer, type FooterOptions } from "@/features/navigation/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { IoHomeOutline } from "react-icons/io5";
import { PiBarbell } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiUser } from "react-icons/ci";

const MainLayout = () => {
  const isMobile = useIsMobile();
  const footerOptions: FooterOptions[] = [
    {
      icon: <IoHomeOutline size={28} />,
      label: "Home",
      url: "/app",
    },
    {
      icon: <PiBarbell size={28} />,
      label: "Workout",
      url: "/app/workout",
    },
    {
      icon: <TbBrandGoogleAnalytics size={28} />,
      label: "Analytics",
      url: "/app/analytics",
    },
    {
      icon: <CiUser size={28} />,
      label: "Personal",
      url: "/app/user",
    },
  ];

  return (
    <>
      {isMobile ? (
        <main className="grid place-items-center w-dvw h-dvh">
          {/* <Header /> */}
          <div className="w-full h-fit max-w-175">
            {" "}
            {/* Put mt-12 when bringing back header max-h-[100% + 48px]*/}
            <section className="flex flex-col gap-2 p-6 mb-14">
              <Outlet />
            </section>
          </div>
          <Footer options={footerOptions} />
        </main>
      ) : (
        <main></main>
      )}
    </>
  );
};

export default MainLayout;
