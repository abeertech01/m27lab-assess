import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { RouteUrl } from "../router/url"

interface ComponentProps {}

const ProtectedRoute: FC<ComponentProps> = () => {
  const user = localStorage.getItem("user")

  if (!user) return <Navigate to={RouteUrl.LOGIN} />

  return <Outlet />
}

export default ProtectedRoute
