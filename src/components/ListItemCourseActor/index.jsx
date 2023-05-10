import {  faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleStatus } from "../../utils/CustomRes"
import {  useMutation, useQueryClient } from "react-query";
import { deleteCourse } from "../../apis/Courses.api";
import { toast } from "react-toastify";
function ListItemCourseActor({data}) {
    const queryClient = useQueryClient()
    const status = handleStatus(data.trangThai)
    const deleteCourseMutation = useMutation({
        mutationFn : (id) => deleteCourse(id),
        onSuccess:(id) => {
            toast.success(`Xoá Thành Công Khoá Học`)
            queryClient.invalidateQueries({queryKey:['courses'] })
        }
    })
    const handleDelete = (id) => {
        deleteCourseMutation.mutate(id)
    }
    return <tr>
                <td><a href="abcabc" className="text-body">{data.tenKhoaHoc}</a></td>
                <td><span className="badge badge-soft-success mb-0">{data.moTa}</span></td>
                <td>{data.category_id}</td>
                <td>{data.giaCa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ</td>
                <td><span className="badge badge-soft-success mb-0"></span>{status}</td>
                <td>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                    <a href={`actor-courses/${data.id}`} className="px-2 text-primary"><FontAwesomeIcon icon={faPencil} fontSize={18}/></a>
                    </li>
                    <li className="list-inline-item">
                    <button onClick={() => handleDelete(data.id)} className="px-2 text-danger bg-transparent"><FontAwesomeIcon icon={faTrash} fontSize={18}/></button>
                    </li>
                </ul>
                </td>
            </tr>    
}

export default ListItemCourseActor;