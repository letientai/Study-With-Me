import http from "../utils/https";

export const getAllcategory = () => http.get(`get/getCategories`)
export const getCategory = () => http.get(`get/category/course`)
export const addCategory = (body) => http.post(`post/category`,body)