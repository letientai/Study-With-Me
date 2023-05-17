import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import './ListChapterAndLesson.scss'
import ItemsLesson from "./ItemsLesson";
import { handleStatus } from "../../../utils/CustomRes";
import {  useMutation, useQueryClient } from "react-query";
import { deleteChapter } from "../../../apis/Courses.api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
function ItemsChapter({data}) {
  const queryClient = useQueryClient()
  const deleteChapterMutation = useMutation({
    mutationFn : (id) => deleteChapter(id),
    onSuccess:(id) => {
      toast.success(`Xoá Thành Công Chương Học`)
      queryClient.invalidateQueries({queryKey:['Chapter'] })
  }
  })
    const handleDelete = (id) => {
      deleteChapterMutation.mutate(id)
  }
  const status = handleStatus(data.trangThai)
    return <>
      <div className="chapter-wrap">
        <h4 className="nameChapter custom-show-name">{data.tenChuongHoc}</h4>
        <span className="custom-show-status badge-soft-success badge">{status}</span>
        <ul className="list-inline mb-0">
                <li className="list-inline-item">
                <Link to={`/actor-chapter/${data.id}`} className="px-2 text-primary"><FontAwesomeIcon icon={faPencil} fontSize={18}/></Link>
                </li>
                <li className="list-inline-item">
                <button onClick={() => handleDelete(data.id)} className="px-2 text-danger bg-transparent"><FontAwesomeIcon icon={faTrash} fontSize={18}/></button>
                </li>
          </ul>
          </div>
          {data.lessons.map((lesson) => (
            <ItemsLesson data={lesson} key={lesson.id} />
          ))}
    </>

}

export default ItemsChapter;