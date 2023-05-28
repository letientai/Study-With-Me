import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Courses.scss";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ListNameCourse from "../../components/ListNameCourse";
import CardCourse from "../../components/CardCourse";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { searchCourse } from "../../apis/Courses.api";
import { useState } from "react";
import HomeMenu from "../../components/Slide/homeMenu";
import { useEffect } from "react";
import { getCategory } from "../../apis/Categorys.api";
import emptyData from "../../assets/Images/No data-cuate.png";
// const data = [
//   "Đại học - Cao đẳng",
//   "Bổ trợ & bồi dưỡng HSG",
//   "Luyện thi đại học",
//   "Trung học phổ thông",
//   "Luyện thi vào 10",
// ];
function Courses() {
  const { type } = useParams();
  const [dataSearch, setDataSearch] = useState([]);
  const location = useLocation();
  const checkActionHandleCategory =
    location.pathname.split("/")[1] === "danh-muc";
  useEffect(() => {
    if (!checkActionHandleCategory) {
      searchCourse(type).then((res) => {
        setDataSearch(res?.data?.courses);
      });
    } else {
      getCategory().then((res) => {
        // console.log(res);
        var data = res.data.data.filter(
          (item) => item.id === parseInt(location.pathname.split("/")[2])
        )[0];
        setDataSearch(data.course);
      });
    }
  }, [location]);
  return (
    <div className="container py-4">
      <h3 className="text-start align-items-center pb-3">
        <a href="/Study-With-Me">
          {" "}
          <FontAwesomeIcon icon={faHouse} className="icon" />
        </a>
        TOÁN CAO CẤP
      </h3>
      <div className="d-flex">
        <div className="col-3">
          {/* {data.map((course,index) => (
          <ListNameCourse key={index} data={course}/>
      ))} */}
          <HomeMenu />
        </div>
        <div className="col-9">
          <div className="wrapCourses">
            {dataSearch.length > 0 ? (
              <>
                <div className="row">
                  {dataSearch.map((course) => (
                    <div key={course.id} className="col-6 col-lg-4">
                      <CardCourse data={course} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center empty-data">
                <h3 className="text-center text-warning">
                  Chưa có khoá học nào tồn tại
                </h3>
                {/* <img src={emptyData} alt="" className="w-75" style={{margin: "auto"}}/> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
