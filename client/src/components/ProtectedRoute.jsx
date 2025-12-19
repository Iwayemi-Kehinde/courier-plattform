import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) {
    return <Navigate to="/auth" />;
  } 
  return children;
};


export const  ProtectedRouteAuth = ({children}) => {
    const { user, loading } = useAuth();

    if (loading) return null;
    if (user) {
      return <Navigate to="/user-dashboard" />;
    } 
    return children;
}


