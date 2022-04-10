import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const RedirectAuth = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  return currentUser ? (
    <Navigate to="/menu" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RedirectAuth;
