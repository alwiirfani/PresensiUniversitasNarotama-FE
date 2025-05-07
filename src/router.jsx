import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./views/RootLayout";
import LoginLayout from "./views/LoginLayout";
import HomeLayout from "./views/HomeLayout";

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
          <div className="flex w-full min-h-screen items-center justify-center">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
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
