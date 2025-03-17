import { FC } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"

interface ComponentProps {}

const App: FC<ComponentProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
