import http from "../utils/https";


export const getCourseByTeacherId = (id) =>
  http.get(`get/${id}/getCoursesByTeacherId`)

