import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
