import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { AUTH_URL } from "@/constants/auth.constant"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username required!",
  }),
  password: z.string().min(2, {
    message: "Valid password required!",
  }),
})

interface ComponentProps {}

const Login: FC<ComponentProps> = () => {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        AUTH_URL,
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate("/")
    } catch (error) {
      console.error("Login failed", error)
      toast("Invalid credentials")
    }
  }

  return (
    <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center">
      <div className="w-80 pb-10">
        <h1 className="text-3xl font-bold text-center mb-3">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*****" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Login
