import "./CardCourse.scss"
function CardCourse( { data}) {
    return <div className="wraperCard">
        <a href="khoa-hoc-truc-tuyen/:id" className="img-card">
            <img src="https://hocmai.vn/course/images/phan-dai-so-tuyen-tinh-thay-le-ba-tran-phuong-1616742770.png" />
        </a>
        <div className="content-card"> 
            <h3>{data}</h3>
            <span>Học phí trọn gói: 600.000 đồng </span>
            <span>Thời gian học: 365 ngày  </span>
            <span>Giáo viên: <a className="link-gv" href="abc">Thầy Lê Bá Trần Phương</a> </span>
            <a className="btn-detail" href="khoa-hoc-truc-tuyen/:id">Chi tiết</a>
        </div>
    </div>
}

export default CardCourse;