import { http } from '../index'
import { ILoginApi } from '@/type'

// 1. 封装API
export const loginAPI = (data: { username: string; password: string }) => {
  return http<ILoginApi>('POST', '/login', data)
}
