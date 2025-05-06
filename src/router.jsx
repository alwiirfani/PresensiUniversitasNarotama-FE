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
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
]);

export default router;
