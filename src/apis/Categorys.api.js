import http from "../utils/https";

export const getAllcategory = () => http.get(`get/getCategories`)