import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import './ListChapterAndLesson.scss'
import ItemsLesson from "./ItemsLesson";
import { handleStatus } from "../../../utils/CustomRes";

import { Link } from "react-router-dom";
function ItemsChapter({idCourse,data , show , showLess}) {
  const status = handleStatus(data.trangThai)
    return <>
      <div className="chapter-wrap">
        <h4 className="nameChapter custom-show-name">{data.tenChuongHoc}</h4>
        <span className={`badge custom-show-status ${data.trangThai === 1 ? "badge-soft-success" : "badge-soft-danger"} mb-0`}>{status}</span>
        <ul className="list-inline mb-0 d-flex">
                <li className="list-inline-item ">
                <Link to={`/actor-chapter/${data.id}`} className="px-2 text-primary"><FontAwesomeIcon icon={faPencil} fontSize={18}/></Link>
                </li>
                <li className="list-inline-item">
                <button onClick={() => show(data.id)} className="px-2 text-danger bg-transparent"><FontAwesomeIcon icon={faTrash} fontSize={18}/></button>
                </li>
          </ul>
          </div>
          {data.lessons.map((lesson) => (
            <ItemsLesson idCourse={idCourse} idChapter={data.id} show={showLess} data={lesson} key={lesson.id} />
          ))}
    </>

}

export default ItemsChapter;