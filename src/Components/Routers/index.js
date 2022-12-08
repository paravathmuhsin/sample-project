import React from "react";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound";
import PageLoading from "../PageLoading";

const Layout = React.lazy(() => import("../Layout"));
const Login = React.lazy(() => import("../../Pages/Login"));
// const PostList = React.lazy(() => import("../../Pages/Post/List"));
// const PostDetail = React.lazy(() => import("../../Pages/Post/Detail"));
const ToDoList = React.lazy(() => import("../../Pages/ToDo/List"));
const ToDoDetail = React.lazy(() => import("../../Pages/ToDo/Detail"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      // {
      //   index: true,
      //   element: <PostList />,
      // },
      // {
      //   path: "post/:id",
      //   element: <PostDetail />,
      // },

      {
        index: true,
        element: <ToDoList />,
      },
      {
        path: "ToDo/:id",
        element: <ToDoDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Routers = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routers;
