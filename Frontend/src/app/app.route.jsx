import { createBrowserRouter, Navigate } from "react-router";
import { PublicOnlyRoute } from "../features/auth/components/ProtectedRoute";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import AuthSuccess from "../features/auth/pages/AuthSuccess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/success",
    element: <AuthSuccess />,
  },
]);
