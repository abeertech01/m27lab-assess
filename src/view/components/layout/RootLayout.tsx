import { FC } from "react"
import { Outlet } from "react-router-dom"
import { Toaster } from "@/view/components/ui/sonner"
import Navbar from "@/view/components/common/Navbar"

interface ComponentProps {}

const RootLayout: FC<ComponentProps> = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default RootLayout
