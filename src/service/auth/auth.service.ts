import { ApiService } from "../api.service"
import { formDto, ILoginResponse } from "@/service/auth/auth.dto"

export const AuthService = {
  login: async (dto: formDto) => {
    const { data } = await ApiService.post<ILoginResponse>("/auth/login", {
      ...dto,
    })
    return data
  },
}
