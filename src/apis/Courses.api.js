import http from "../utils/https";

export const CoursesGVid = (id) => http.get(`get/${id}/getCoursesByTeacherId`)
export const getCourse = (id) => http.get(`detail/${id}/course`)
export const addCourse = (body) => http.post('post/course', {
    tenKhoaHoc: body.tenKhoaHoc,
    moTa: body.moTa,
    linkVideo: body.linkVideo,
    giaCa: body.giaCa,
    category_id: body.category_id
})

export const updateCourse = (id, body) => http.put(`update/${id}/course`, {
    tenKhoaHoc: body.tenKhoaHoc,
    moTa: body.moTa,
    linkVideo: body.linkVideo,
    giaCa: body.giaCa,
    category_id: body.category_id,
    trangThai: body.trangThai
})
export const getAllcourses = () => http.get(`search/course`)
export const getChapterByIdCourse = (id) => http.get(`get/${id}/chapter`)
export const addLesson = (body) => http.post(`post/lesson`, body)

export const getCommentsByLesson = (id) => http.get(`lessons/${id}/comments`)
export const postComment = (id, field) => http.post(`comment/${id}/lesson`, field)
export const replyComment = (idLesson, parentIdComment, textComment) => {
    http.post(`lesson/${idLesson}/comments/${parentIdComment}/replies`, {
        noiDung: textComment
    })
}

export const paymentCourse = (id, field) => http.post(`pay/${id}/bills`, field)


export const deleteCourse = (id) => http.get(`delete/${id}/course`)

export const searchCourse = (inputSearch) => http.get(`search/course`, {
    params: {
        search: inputSearch
    }
}) 
