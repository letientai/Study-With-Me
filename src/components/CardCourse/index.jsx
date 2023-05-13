import { Link } from "react-router-dom";
import "./CardCourse.scss"
function CardCourse( { data}) {
    return <div className="wraperCard">
        <a href="khoa-hoc-truc-tuyen/:id" className="img-card">
            <img alt="" src={data.linkVideo} />
        </a>
        <div className="content-card"> 
            <h3>{data.tenKhoaHoc}</h3>
            <span>Học phí trọn gói: {data.giaCa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đồng </span>
            <span>Thời gian học: 365 ngày  </span>
            <span>Giảng Viên: {data.instructor.hoTen}</span>
            <Link className="btn-detail" to={`khoa-hoc-truc-tuyen/${data.id}`}>Chi tiết</Link>
        </div>
    </div>
}

export default CardCourse;