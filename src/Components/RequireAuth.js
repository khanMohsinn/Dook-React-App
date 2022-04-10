import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const RequireAuth = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
