import { FC, useEffect } from "react"
import { toast } from "sonner"

interface ComponentProps {}

const Home: FC<ComponentProps> = () => {
  useEffect(() => {
    toast("Hello from toast!")
  }, [])

  return (
    <div>
      <h1>Welcome to Home Component</h1>
    </div>
  )
}

export default Home
