import MainLayout from "@/layouts/MainLayout";
import DashboardPage from "@/features/dashboard/DashboardPage";

const routes = [{ path: "/dashboard", element: <MainLayout />, children: [{ index: true, element: <DashboardPage /> }] }];

export default routes;
