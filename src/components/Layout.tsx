import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/Navbar"

interface ComponentProps {}

const Layout: FC<ComponentProps> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
    </>
  )
}

export default Layout
