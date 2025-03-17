import { FC, useEffect } from "react"
import { toast } from "sonner"

interface ComponentProps {}

const Home: FC<ComponentProps> = () => {
  useEffect(() => {
    toast("Hello from toast!")
  }, [])

  return (
    <div className="px-5 py-2 grid grid-cols-4 gap-2">
      <div className="col-span-2 border-2 p-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        quaerat corporis architecto eum libero, molestias esse, quo fugiat animi
        quae reiciendis iusto, ad odit explicabo? Earum amet vitae consectetur,
        iusto, fugiat optio beatae atque, dolorum similique ullam velit.
        Praesentium ipsum molestiae dolores dicta cum, dignissimos quasi!
        Obcaecati nihil quia aliquam odio veniam ea id, reprehenderit quasi, eos
        suscipit totam consequuntur. Facilis repellendus natus officia est magni
        eveniet quos ea eligendi, deleniti unde deserunt error quam saepe
        accusantium magnam in laudantium.
      </div>
      <div className="border-2 p-4">Links</div>
      <div className="border-2 p-4">Blank</div>
    </div>
  )
}

export default Home
