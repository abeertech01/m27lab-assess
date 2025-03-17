import { texts } from "@/constants/text.constant"
import { FC, useEffect } from "react"
import { toast } from "sonner"

interface ComponentProps {}

const Home: FC<ComponentProps> = () => {
  useEffect(() => {
    toast("Hello from toast!")
  }, [])

  return (
    <div className="px-5 py-2 grid grid-cols-4 gap-2">
      <div className="col-span-2 border-2 p-4">{texts.lorem}</div>
      <div className="border-2 p-4">Links</div>
      <div className="border-2 p-4">Blank</div>
    </div>
  )
}

export default Home
