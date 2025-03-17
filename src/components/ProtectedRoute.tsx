import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ComponentProps {}

const ProtectedRoute: FC<ComponentProps> = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (!user) {
      navigate("/login")
    }
  }, [])

  return (
    <div>
      <h1>Welcome to ProtectedRoute Component</h1>
    </div>
  )
}

export default ProtectedRoute
