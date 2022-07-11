import request from '@/utils/request'

// 1. 封装API
export const loginAPI = (mobile: string, code: string) => {
  return request({
    url: '',
    method: 'post',
    data: {
      mobile,
      code,
    },
  })
}
