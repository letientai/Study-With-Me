import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import './ListChapterAndLesson.scss'
import { handleFee} from "../../../utils/CustomRes";

function ItemsLesson({data,show,idCourse,idChapter}) {
   const fee = handleFee(data.trangThai)
    return <div className="lesson-wrap">
    <h4 className="nameChapter custom-show">{data.tenBaiHoc}</h4>
      <span className="custom-show"></span>
      <span className="custom-show"></span>
      <span className={`badge custom-show-status ${data.trangThai === 1 ? "badge-soft-success":"badge-soft-danger"} mb-0`}>{fee}</span>
      <ul className="list-inline mb-0 d-flex">
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