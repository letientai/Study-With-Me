import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./ActorCourses.scss";
import ListCoursesActor from "../../../components/ListCoursesActor";
import { useQuery } from "react-query";
import { CoursesGVid } from "../../../apis/Courses.api";

import { getProfileFromLS } from "../../../utils/auth";
import { Link } from "react-router-dom";

function ActorCourses() {
  const profile = getProfileFromLS();
  const user = JSON.parse(localStorage.getItem("user"));
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

  const result = useQuery({
    queryKey: ["courses", profile.id],
    queryFn: () => CoursesGVid(profile.id),
  });
  return (
    <>
      {user?.phanQuyen ? (
        <div className="container py-4">
          <h3 className="text-start fs-4 align-items-center">
            <a href="/">
              {" "}
              <FontAwesomeIcon icon={faHouse} className="icon" />
            </a>
            Trang Chủ &gt; Khoá Học
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
              <ListCoursesActor result={result} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container error-permisstion d-flex align-items-center justify-content-center py-4">
          <h3 className="text-center">You don't have permission to access this website</h3>{" "}
        </div>
      )}
    </>
  );
}

export default ActorCourses;
