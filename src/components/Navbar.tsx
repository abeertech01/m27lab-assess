import { FC } from "react"
import avatar from "@/assets/avatar.jpg"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface ComponentProps {}

const Navbar: FC<ComponentProps> = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="logo flex items-center gap-2">
        <div className="w-12 aspect-square">
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-full overflow-hidden rounded-md object-cover"
          />
        </div>
        <div className="text-4xl font-bold">LOGO</div>
      </div>
      <div className="nav">
        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
