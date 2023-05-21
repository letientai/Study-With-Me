import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import './ListChapterAndLesson.scss'
import { handleStatus } from "../../../utils/CustomRes";

function ItemsLesson({data,show,idCourse,idChapter}) {
   const status = handleStatus(data.trangThai)
    return <div className="lesson-wrap">
    <h4 className="nameChapter custom-show">{data.tenBaiHoc}</h4>
      <span className="custom-show">{data.tenBaiTap}</span>
      <span className="custom-show ">{data.moTaBaiTap}</span>
      <span className="custom-show-status badge-soft-success badge">{status}</span>
      <ul className="list-inline mb-0">
              <li className="list-inline-item">
              <a href={`/edit-lesson/${idCourse}/${idChapter}/${data.id}`} className="px-2 text-primary"><FontAwesomeIcon icon={faPencil} fontSize={18}/></a>
              </li>
              <li className="list-inline-item">
              <button onClick={() => show(data.id)} className="px-2 text-danger bg-transparent"><FontAwesomeIcon icon={faTrash} fontSize={18}/></button>
              </li>
      </ul>
  </div>
}

export default ItemsLesson;