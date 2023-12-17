import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AddUser from "../pages/AddUser";
import UpdateUser from "../pages/UpdateUser";
import UserDetails from "../pages/UserDetails";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/updateUser/123",
        element: <UpdateUser></UpdateUser>,
      },
      {
        path: "/userDetails/123",
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);
