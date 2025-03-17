import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface ComponentProps {}

type User = {
  email: string
  password: string
}

const ProtectedRoute: FC<ComponentProps> = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const localStorageData = localStorage.getItem("user")
    const credentials: User = localStorageData && JSON.parse(localStorageData)
    console.log(credentials)

    if (
      credentials === null ||
      (credentials.email !== "test@email.com" &&
        credentials.password !== "12345")
    ) {
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
