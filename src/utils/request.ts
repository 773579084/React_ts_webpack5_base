import axios from 'axios'

// 请求基地址
export const baseURL = ''

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    return response.data
  },
  async function (error) {
    console.dir(error)

    if (!error.response) {
      // Toast.show({ content: '网路有问题，请检查网络' })
      return Promise.reject(error)
    }

    if (error.response.status !== 401) {
      // Toast.show({ content: error.response.data.message })
      return Promise.reject(error)
    }
  },
)

export default request
