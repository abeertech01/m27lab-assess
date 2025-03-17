import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { formDto, formSchema, ILoginResponse } from "@/service/auth/auth.dto"
import { AuthService } from "@/service/auth/auth.service"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RouteUrl } from "@/view/router/url"

export const useLoginController = () => {
  const navigate = useNavigate()

  const form = useForm<formDto>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: formDto) {
    try {
      const data: ILoginResponse = await AuthService.login(values)

      localStorage.setItem("user", JSON.stringify(data))
      navigate(RouteUrl.HOME)
    } catch (error) {
      console.error("Login failed", error)
      toast("Invalid credentials")
    }
  }

  return {
    form,
    onSubmit,
  }
}
