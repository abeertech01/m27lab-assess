import { FC, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

interface ComponentProps {}

const ProtectedRoute: FC<ComponentProps> = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (!user) {
      navigate("/login")
    }
  }, [])

  return <Outlet />
}

export default ProtectedRoute
