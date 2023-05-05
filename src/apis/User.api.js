import http from "../utils/https";


export const updateInfomationUser = (body) =>
  http.put('update/user/profile',body)
