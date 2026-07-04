import { useAuth } from "@clerk/react";
import { Navigate } from "react-router-dom";
import LandingScreen from "./LandingScreen";
import Loading from "./Loading";

function LandingRedirect() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <Loading/>;
  }

  return isSignedIn ? <Navigate to="/home" replace /> : <LandingScreen />;
}

export default LandingRedirect;