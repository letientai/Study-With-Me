import http from "../utils/https";


export const getListOfTeachers = (body) =>
  http.get('get/teachers')
