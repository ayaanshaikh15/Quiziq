import { Route, Routes } from "react-router-dom"
import HomeScreen from "./components/HomeScreen"
import Layout from "./components/Layout"
import Quiz from "./components/Quiz"
import NotFound from "./components/NotFound"


function App() {
  return (
    <>
    <Routes>
      {/*routes with navbar*/}
      <Route element={<Layout/>}>
        <Route path="/" element={<HomeScreen/>}/>
      </Route>

    {/*routes without navbar */}
   <Route path="/quiz" element={<Quiz/>}/>
   <Route path="*" element={<NotFound/>}/>
    </Routes>
      
    </>
  )
}

export default App