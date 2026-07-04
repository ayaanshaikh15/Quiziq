import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/react";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <Loading/>;
  }
  
  return isSignedIn ? children : <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;