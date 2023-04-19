import http from "../utils/https";


export const registerAccount = (body) =>
  http.post('register', {
    hoTen:body.nameAll,
    email:body.email,
    password:body.password,
    soDienThoai:body.soDienThoai
})


export const postLogin = (body) =>
  http.post('login', {
    email:body.email,
    password:body.password
})