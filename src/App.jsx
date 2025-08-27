import Home from "./pages/Home.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/NotFound.jsx"
import { Toaster } from "./components/ui/toaster.jsx"

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
