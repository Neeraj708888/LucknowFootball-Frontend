import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hero from "../pages/Hero";
import AppLayout from "../layout/appLayout";
import { routes } from "./routes";

function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <>
            <Hero />
            </>
        },
        ...routes
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoute;