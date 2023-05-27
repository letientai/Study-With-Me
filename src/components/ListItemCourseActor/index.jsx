import {   faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleStatus } from "../../utils/CustomRes"
import './ListItemCourseActor.scss'
import { Link } from "react-router-dom";
function ListItemCourseActor({data, show}) {
    const status = handleStatus(data.trangThai)
    return <tr>
                <td><Link to={`/listCourse/${data.id}`} className="text-body custom-show">{data.tenKhoaHoc}</Link></td>
                <td><span className="text-body custom-show">{data.moTa}</span></td>
                <td>{data.giaCa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</td>
                <td><span className={`badge ${data.trangThai === 1 ? "badge-soft-success" : "badge-soft-danger"} mb-0`}>{status}</span></td>
                <td>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                    <Link to={`/actor-courses/${data.id}`} className="px-2 text-primary"><FontAwesomeIcon icon={faPencil} fontSize={18}/></Link>
                    </li>
                    <li className="list-inline-item">
                    <button onClick={() => show(data.id)} className="px-2 text-danger bg-transparent"><FontAwesomeIcon icon={faTrash} fontSize={18}/></button>
                    </li>
                </ul>
                </td>
                
            </tr>    
}

export default ListItemCourseActor;