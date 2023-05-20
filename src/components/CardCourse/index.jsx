import { Link } from "react-router-dom";
import "./CardCourse.scss"
function CardCourse( { data}) {
    return <div className="wraperCard">
        <Link to={`/khoa-hoc-truc-tuyen/${data.id}`} className="img-card">
            <img alt="" src={data.linkVideo} />
        </Link>
        <div className="content-card"> 
            <h3>{data.tenKhoaHoc}</h3>
            <span>Học phí trọn gói: {data.giaCa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đồng </span>
            <span>Thời gian học: 365 ngày  </span>
            <span>Giảng Viên: {data.instructor.hoTen}</span>
            <Link className="btn-detail" to={`/khoa-hoc-truc-tuyen/${data.id}`}>Chi tiết</Link>
        </div>
    </div>
}

export default CardCourse;