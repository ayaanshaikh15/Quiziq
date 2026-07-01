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

function App() {
  return (
    <>
      <Routes>
        {/*routes with navbar*/}
        <Route element={<Layout/>}>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/score" element={<Score />} />
          <Route path="/history" element={<History/>}/>
        </Route>

        {/*routes without navbar */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
