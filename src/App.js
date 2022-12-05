import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import PageLoading from "./Components/PageLoading";
import store from "./Store/store";

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
    <Provider store={store}>
      <Suspense fallback={<PageLoading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  );
}

export default App;
