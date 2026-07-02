import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/react";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;