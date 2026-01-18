import MainLayout from "@/layouts/MainLayout";
import LandingPage from "@/features/landing/LandingPage";
import DashboardPage from "@/features/dashboard/DashboardPage";
import AnalyticsPage from "@/features/analytics/AnalyticsPage";
import PersonalPage from "@/features/personal/PersonalPage";
import WorkoutPage from "@/features/workout/WorkoutPage";

const routes = [
  { path: "/", element: <LandingPage /> },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "workout", element: <WorkoutPage /> },
      { path: "user", element: <PersonalPage /> },
    ],
  },
];

export default routes;
