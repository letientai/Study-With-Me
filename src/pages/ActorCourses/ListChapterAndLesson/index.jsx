import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse  } from "@fortawesome/free-solid-svg-icons";
import { getProfileFromLS } from "../../../utils/auth";
import './ListChapterAndLesson.scss'
import ItemsChapter from "./ItemsChapter";
import { useQuery } from "react-query";
import { useState } from "react";
import { getChapterByIdCourse, getDetailCourses } from "../../../apis/Courses.api";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../../components/until/loader"

import {  useMutation, useQueryClient } from "react-query";
import { deleteChapter, deleteLesson } from "../../../apis/Courses.api";
import { toast } from "react-toastify";
import Confirm from "../../../components/Confirm";
function ListChapterAndLesson() {
  const profile = getProfileFromLS();
  const dataName = [
    {
      name: "Thêm Khoá Học",
      to: "/actor-courses/add",
    },
    {
      name: "Thêm Chương Học",
      to: "/actor-chapter/add",
    },
    {
      name: "Thêm Bài Học",
      to: "/add-lesson",
    },
   
  ];
  const [chapters, setChapters] = useState([]);
  const [nameCourse, setNameCourse] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id)
  useQuery({
    queryKey: ["Chapter",id],
  queryFn: () => getChapterByIdCourse(id),
    onSuccess: (data) => {
      setChapters(data?.data?.data)
      setLoading(false);
    },
  });

  console.log(chapters)

  useQuery({
    queryKey: ["coursesDetail",id],
  queryFn: () => getDetailCourses(id),
    onSuccess: (data) => {
      setNameCourse(data?.data?.data?.tenKhoaHoc)
      setLoading(false);
    },
  });
  // handle confirm delete
  const [idDelete,setIdDelete] = useState(null)
  const [idDeleteLs,setIdDeleteLs] = useState(null)
  let visible = idDelete || idDeleteLs !== null
  const queryClient = useQueryClient()
  // delete chapter
  const deleteChapterMutation = useMutation({
     mutationFn : (id) => deleteChapter(id),
     onSuccess:(id) => {
       toast.success(`Xoá Thành Công Chương Học`)
       queryClient.invalidateQueries({queryKey:['Chapter'] })
  }})

  // delete chapter
  const deleteLessonMutation = useMutation({
    mutationFn : (id) => deleteLesson(id),
    onSuccess:(id) => {
      toast.success(`Xoá Thành Công Bài Học`)
      queryClient.invalidateQueries({queryKey:['Chapter'] })
 }})
  const handleOK = () => {
    if(idDelete !== null) {
      deleteChapterMutation.mutate(idDelete)
    }
    else if(idDeleteLs !== null) {
      deleteLessonMutation.mutate(idDeleteLs)
    }
    setIdDelete(null)
    setIdDeleteLs(null)
  }
  const hanldeShowConf = (id) => {
    setIdDelete(id)
    
  } 
  const hanldeShowConfLess = (id) => {
    setIdDeleteLs(id)
  } 
  const handleCancel = () => {
    setIdDelete(null)
    setIdDeleteLs(null)
  }
  

  return <>
    {(!loading) ? <div className="container py-4">
    <h3 className="text-start fs-4 align-items-center">
      <Link to="/Study-With-Me">
        {" "}
        <FontAwesomeIcon icon={faHouse} className="icon" />
      </Link>
      Trang Chủ &gt; Chương học và bài học
    </h3>
    <div className="row mt-4">
      <div className="col-3">
        <div className="info-user">
          <div className="mc-avatar">
            <img
              src={profile.avatar || "https://hocmai.vn/pix/u/f1.png"}
              alt=""
            ></img>
          </div>
          <div className="name">
            <span>{profile.hoTen}</span>
          </div>
          {dataName.map((data, index) => (
            <Link key={index} to={data.to} className="mc-links">
              {data.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-9 ">
        <h3 className="nameCourse">Khoá Học : <span>{nameCourse}</span></h3>
        {chapters.length > 0 ? <>{chapters.map((chapter) =>(
        <ItemsChapter idCourse={id} show={hanldeShowConf} showLess={hanldeShowConfLess} key={chapter.id}  data={chapter} />
      ))}</> : <h3 className="text-center text-warning">Chưa có Chương học nào tồn tại</h3>}
      
      </div>
    </div>
    <Confirm visible={visible} ok={handleOK} cancel={handleCancel} />
  </div>: <Loader />}
  </> 
}

export default ListChapterAndLesson;