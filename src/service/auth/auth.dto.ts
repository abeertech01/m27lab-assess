import { z } from "zod"

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username required!",
  }),
  password: z.string().min(2, {
    message: "Valid password required!",
  }),
})

export type formDto = z.infer<typeof formSchema>

export interface ILoginResponse {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  accessToken: string
  refreshToken: string
}
