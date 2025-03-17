import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/Navbar"

interface ComponentProps {}

const Layout: FC<ComponentProps> = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default Layout
