import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import LoginLayout from "./views/LoginLayout";
import HomeLayout from "./views/HomeLayout";
import DashboardLayout from "./views/DashboardLayout";
import ProtectedRoute from "./contexts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
]);

export default router;
