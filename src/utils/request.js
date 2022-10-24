import axios from 'axios'


/**
 * https://www.pexels.com/zh-cn/api/new/
 */
const authKey = '563492ad6f9170000100000120a63e6014f64e5fa888ad9aa21ea7bd';

const service = axios.create({
  baseURL: '/v1',
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = authKey;
    // if (store.getters.token) {
    //   // 如果token存在 注入token
    //   config.headers.Authorization = `Bearer ${store.getters.token}`
    // }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
