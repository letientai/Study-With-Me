
function SidebarInf({data}) {
  return (
    <div className="sidebar-second d-flex col-12 col-md-4 m-md-1 m-0 mt-md-0">
      <div className="block-course-info ">
        <h3 className="block-course-info-title">Học 365 ngày chỉ với</h3>
        <div className="block-course-info-price text-center my-3">
          <span>{data?.giaCa?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đđ</span>
        </div>
        <div className="course-register-wr mt-2 text-center">
          <div className="reg-decrease d-block">Học thử miễn phí</div>
          <div className="reg-decrease course-register-now d-block ">
            Đăng ký ngay
          </div>
        </div>
        <hr />
        <div className="course-info-description">
          <p className="course-info-stitle">Mục tiêu khóa học</p>
          <ul className="course-info-list">
            <li>
              {" "}
              Giúp học sinh nắm vững kiến thức {data?.tenKhoaHoc}, tự tin học tập và đạt
              điểm số cao trên lớp.{" "}
            </li>
          </ul>
          <p className="course-info-stitle">Mục tiêu khóa học</p>
          <ul className="course-info-list">
            <li>
              {" "}
              Giúp học sinh nắm vững kiến thức {data?.tenKhoaHoc}, tự tin học tập và đạt
              điểm số cao trên lớp.{" "}
            </li>
          </ul>
          <p className="course-info-stitle">Mục tiêu khóa học</p>
          <ul className="course-info-list">
            <li>
              {" "}
              Giúp học sinh nắm vững kiến thức {data?.tenKhoaHoc}, tự tin học tập và đạt
              điểm số cao trên lớp.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarInf;
