import http from "../utils/https";

export const getAllcategory = () => http.get(`get/getCategories`)
export const addCategory = (body) => http.post(`post/category`,body)