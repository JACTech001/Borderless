import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Wraps children with route protection. Redirects to /login if not authenticated.
 * If `requiredRole` is provided, also checks that user.role matches (case-insensitive).
 */
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (
    requiredRole &&
    (!user.role || user.role.toLowerCase() !== requiredRole.toLowerCase())
  ) {
    // could show "Forbidden" or go home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
