import axios from 'axios'
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS } from './auth'

class Http {
  instance
  accessToken
  constructor() {

    this.instance = axios.create({
      baseURL: 'https://cmd-production-f0d6.up.railway.app/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        // queryClient.setQueryData('loader', true);
        this.accessToken = getAccessTokenFromLS()
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        // queryClient.setQueryData('loader', false);
        const { url } = response.config
        if (url === 'login') {
          this.accessToken = response.data.access_token
          setAccessTokenToLS(this.accessToken)
        } else if (url === 'logout') {
          this.accessToken = ''
          clearLS()
        }
        return response
      },
    )
  }
}

const http = new Http().instance

export default http