import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Valid email required!",
    })
    .email(),
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    const email = values.email
    const password = values.password

    if (email === "test@email.com" && password === "12345") {
      localStorage.setItem("user", JSON.stringify(values))
      navigate("/")
    } else {
      toast("Invalid Credentials!")
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email" {...field} />
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
                    <Input placeholder="*****" {...field} />
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
