import { Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import LandingScreen from "./components/LandingScreen";
import Score from "./components/Score";
import History from "./components/History";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
  {/* Public routes */}
  <Route path="/" element={<Layout />}>
    <Route index element={<LandingScreen />} />
  </Route>

  {/* Protected routes with Navbar */}
  <Route
    element={
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    }
  >
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/home" element={<HomeScreen />} />
    <Route path="/history" element={<History />} />
  </Route>

  {/* Protected routes without Navbar */}
  <Route
    path="/quiz/:id"
    element={
      <ProtectedRoute>
        <Quiz />
      </ProtectedRoute>
    }
  />

  <Route
    path="/score/:id"
    element={
      <ProtectedRoute>
        <Score />
      </ProtectedRoute>
    }
  />

  {/* Public */}
  <Route path="*" element={<NotFound />} />
</Routes>
    </>
  );
}

export default App;
