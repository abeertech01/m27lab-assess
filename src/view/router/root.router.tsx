import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RootLayout from "@/view/components/layout/RootLayout"
import { RouteUrl } from "./url"
import Home from "@/view/pages/Home/home.page"
import Login from "@/view/pages/Login/login.page"
import ProtectedRoute from "@/view/components/ProtectedRoute"

const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteUrl.HOME} element={<RootLayout />}>
          <Route path={RouteUrl.LOGIN} element={<Login />} />
          <Route path={RouteUrl.HOME} element={<ProtectedRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default RootRouter
