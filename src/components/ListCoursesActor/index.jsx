import ListItemCourseActor from '../ListItemCourseActor';
import './ListCoursesActor.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ListCoursesActor({result}) {
    return  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="wraptop">
          <div className="table-responsive">
            <table className="table project-list-table table-nowrap align-middle table-borderless">
              <thead>
                <tr>
                  
                  <th scope="col">Tên Khoá Học</th>
                  <th scope="col">Mô Tả</th>
                  <th scope="col">Khoá</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Trạng Thái</th>
                  <th scope="col" style={{width: '200px'}}>Action</th>
                </tr>
              </thead>
              <tbody>
              {result.data?.data?.data.map((item, index) => (
                <ListItemCourseActor key={index} data={item}  />
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="row g-0 align-items-center pb-4">
      <div className="col-sm-6">
        <div><p className="mb-sm-0"></p></div>
      </div>
      <div className="col-sm-6">
        <div className="float-sm-end">
          <ul className="pagination mb-sm-0">
            <li className="page-item disabled">
              <button  className="page-link"><FontAwesomeIcon icon={faChevronLeft} fontSize={18}/></button>
            </li>
            <li className="page-item active"><a href="abcabc" className="page-link">1</a></li>
            <li className="page-item"><a href="abcabc" className="page-link">2</a></li>
            <li className="page-item"><a href="abcabc" className="page-link">3</a></li>
            <li className="page-item"><a href="abcabc" className="page-link">4</a></li>
            <li className="page-item"><a href="abcabc" className="page-link">5</a></li>
            <li className="page-item">
              <button className="page-link"><FontAwesomeIcon icon={faChevronRight} fontSize={18}/></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default ListCoursesActor;