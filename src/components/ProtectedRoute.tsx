import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ComponentProps {}

type User = {
  email: string
  password: string
}

const ProtectedRoute: FC<ComponentProps> = () => {
  const navigate = useNavigate()

  useEffect(() => {}, [])

  return (
    <div>
      <h1>Welcome to ProtectedRoute Component</h1>
    </div>
  )
}

export default ProtectedRoute
