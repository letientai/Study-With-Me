import axios from 'axios'

class Http {
  instance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://backenddoan-production.up.railway.app/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
        (config) => {
          return config
        },
        (error) => Promise.reject(error)
    )
    this.instance.interceptors.response.use(
        (config) => config,
        (error) => Promise.reject(error)
    )
  }
}

const http = new Http().instance

export default http