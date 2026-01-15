import MainLayout from "@/layouts/MainLayout";
import LandingPage from "@/features/landing/LandingPage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import AnalyticsPage from "@/features/analytics/AnalyticsPage";

const routes = [
  { path: "/", element: <LandingPage /> },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
    ],
  },
];

export default routes;
