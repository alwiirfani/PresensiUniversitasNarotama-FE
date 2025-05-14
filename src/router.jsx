import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import LoginLayout from "./views/LoginLayout";
import HomeLayout from "./views/HomeLayout";
import DashboardLayout from "./views/DashboardLayout";
import ProtectedRoute from "./contexts/ProtectedRoute";
import ErrorNotFoundLayout from "./views/errors/ErrorNotFoundLayout";
import PresensiLayout from "./views/PresensiLayout";
import ProfileLayout from "./views/ProfileLayout";
import ChangePasswordLayout from "./views/ChangePasswordLayout";

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
      {
        path: "/presensi",
        element: (
          <ProtectedRoute>
            <PresensiLayout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfileLayout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/change-password/:id",
        element: (
          <ProtectedRoute>
            <ChangePasswordLayout />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
  {
    path: "*",
    element: <ErrorNotFoundLayout />,
  },
]);

export default router;
