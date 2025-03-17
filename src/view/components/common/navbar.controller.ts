import { RouteUrl } from "@/view/router/url"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useNavbarController = () => {
  const [loggedin, seLoggedin] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const loginBtn = () => {
    if (loggedin) {
      localStorage.removeItem("user")
      seLoggedin(false)
    }
    navigate(RouteUrl.LOGIN)
  }

  useEffect(() => {
    const user = localStorage.getItem("user")

    if (user && location.pathname === RouteUrl.HOME) {
      seLoggedin(true)
    }
  }, [location])

  return {
    loginBtn,
    loggedin,
  }
}
