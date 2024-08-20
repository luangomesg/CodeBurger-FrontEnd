import axios from 'axios'

const apiCodeburger = axios.create({
  baseURL: 'https://codeburger-backend.onrender.com'
})

apiCodeburger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token

  if (!config.url.includes('/product-file')) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
})

export default apiCodeburger
