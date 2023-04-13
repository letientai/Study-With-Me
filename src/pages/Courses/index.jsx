import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Courses.scss'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ListNameCourse from "../../components/ListNameCourse";
import CardCourse from "../../components/CardCourse";


const data = ["Đại học - Cao đẳng","Bổ trợ & bồi dưỡng HSG","Luyện thi đại học","Trung học phổ thông","Luyện thi vào 10"]
function Courses() {
    return <div className="container py-4">
    <div className="row">
      <div className="col-3 ">
      {data.map((course,index) => (
          <ListNameCourse key={index} data={course}/>
      ))}
      </div>
      <div className="col-9">
        <div className="wrapCourses">
        <h3 className="text-start align-items-center">
             <a href="/"> <FontAwesomeIcon icon={faHouse} className="icon"/></a>
             TOÁN CAO CẤP
            </h3>
            <div className="row">
                {data.map((course,index) => (
                <div key={index} className="col-4">
                    <CardCourse data={course} />
                </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  </div>
}

export default Courses;