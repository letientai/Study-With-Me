import http from "../utils/https";


export const registerAccount = (body) =>
  http.post('register', {
    hoTen: body.nameAll,
    email: body.email,
    password: body.password,
    soDienThoai: body.soDienThoai
  })


export const loginAccount = (body) =>
  http.post('login', {
    email: body.email,
    password: body.password
  })

export const logout = () => {
  http.post('logout')
}

export const changePassworrd = (body) =>
  http.post('change/password', body)

export const forgotPassword = (email) => http.post('reset/password',email)