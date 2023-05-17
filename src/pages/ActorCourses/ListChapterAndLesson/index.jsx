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


  return <>
    {(!loading) ? <div className="container py-4">
    <h3 className="text-start fs-4 align-items-center">
      <a href="/">
        {" "}
        <FontAwesomeIcon icon={faHouse} className="icon" />
      </a>
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
      {chapters.map((chapter) =>(
        <ItemsChapter key={chapter.id}  data={chapter} />
      ))}
      </div>
    </div>
  </div>: <Loader />}
  </> 
}

export default ListChapterAndLesson;