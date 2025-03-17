import { Button } from "@/view/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/view/components/ui/form"
import { Input } from "@/view/components/ui/input"
import { FC } from "react"
import { useLoginController } from "@/view/pages/Login/login.controller"

interface ComponentProps {}

const Login: FC<ComponentProps> = () => {
  const { form, onSubmit } = useLoginController()

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
