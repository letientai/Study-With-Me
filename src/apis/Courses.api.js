import http from "../utils/https";

export const CoursesGVid = (id) => http.get(`get/${id}/getCoursesByTeacherId`)
export const getCourse = (id) => http.get(`detail/${id}/course`)
export const addCourse = (body) =>http.post('post/course', {
    tenKhoaHoc:body.tenKhoaHoc,
    moTa:body.moTa,
    linkVideo:body.linkVideo,
    giaCa:body.giaCa,
    category_id:body.category_id
})

export const updateCourse = (id, body) => http.put(`update/${id}/course`,{
    tenKhoaHoc:body.tenKhoaHoc,
    moTa:body.moTa,
    linkVideo:body.linkVideo,
    giaCa:body.giaCa,
    category_id:body.category_id,
    trangThai:body.trangThai
})


export const deleteCourse = (id) => http.get(`delete/${id}/course`)


