import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import PageLoading from "./Components/PageLoading";

const Layout = React.lazy(() => import("./Components/Layout/index"));
const Login = React.lazy(() => import("./Pages/Login/index"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <h2>Home</h2>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
